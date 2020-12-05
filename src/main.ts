import { h, Component, render } from "preact";
import htm from "htm";
import { PlayArea } from "./play-area";
import kanaMap from "./kana-map";
import { guid } from "./utils";
const html = htm.bind(h);

interface AppState
{
	selectedKana: string[];
	sequenceAlgo: "random" | "shuffle";
	cardQueue: Card[];
	cardIndex: number;
}

export interface Card
{
	id: string;
	kana: string;
}

class App extends Component<{}, AppState>
{
	private kanaAvailableForShuffle = new Set<string>();
	
	constructor(props: {})
	{
		super(props);

		this.state = { selectedKana: [], cardQueue: [], cardIndex: 0, sequenceAlgo: "shuffle" };
		
		const savedSelectedKanaJson = localStorage.getItem("selected-kana");
		if (savedSelectedKanaJson)
		{
			const savedSelectedKana = JSON.parse(savedSelectedKanaJson);
			this.state = {
				...this.state,
				selectedKana: savedSelectedKana,
				cardQueue: savedSelectedKana.length > 0 ? this.generateNext50Cards(savedSelectedKana, this.state.sequenceAlgo) : [],
			};
		}
	}

	render()
	{
		const selectedKanaSet = new Set<string>(this.state.selectedKana);
		
		return html`
			<div class="pane-container">
				<div id="options-pane">
					<ul id="kana-list">
						${kanaMap.map(item => html`
						<li style="grid-area: ${item.kana}">
							<label class=${selectedKanaSet.has(item.kana) ? "selected" : ""}>
								<input type="checkbox" checked=${selectedKanaSet.has(item.kana)} onClick="${() => this.onKanaSelect(item.kana)}" /><span class="kana">${item.kana}</span><div class="romanji">${item.romanji}</div>
							</label>
						</li>
						`)}
					</ul>
					<div id="kana-bulk-select-buttons">
						<button type="button" class="bulk-select" onClick="${() => this.selectAll()}">Select all</button>
						<button type="button" class="bulk-select" onClick="${() => this.selectNone()}">Select none</button>
					</div>
					<div id="other-options">
						<div id="other-options__sequence-algo">	
							<label><input type="radio" name="sequence-algo" checked="${this.state.sequenceAlgo === "shuffle"}" onClick=${() => this.setSequenceAlgo("shuffle")} />Shuffle</label>
							<label><input type="radio" name="sequence-algo" checked="${this.state.sequenceAlgo === "random"}" onClick=${() => this.setSequenceAlgo("random")} />Random</label>
						</div>
					</div>
				</div>
				<${PlayArea}
					cards=${this.state.cardQueue}
					afterCorrectGuess=${() => this.afterCorrectGuess()}
					cardIndex=${this.state.cardIndex}
				/>
			</div>
		`;
	}

	private setSequenceAlgo(algo: "shuffle" | "random"): void
	{
		this.setState(prevState =>
		{
			const selectedKana = prevState.selectedKana;
			const newCards = selectedKana.length > 0 ? this.generateNext50Cards(selectedKana, algo) : [];
			return { sequenceAlgo: algo, cardQueue: newCards, cardIndex: 0 };
		});
	}

	private afterCorrectGuess(): void
	{
		this.setState(prevState =>
		{
			const nextCard = this.generateCard(prevState.selectedKana, prevState.sequenceAlgo);
			return { cardQueue: [...prevState.cardQueue, nextCard ], cardIndex: prevState.cardIndex + 1 };
		});
	}

	private onKanaSelect(kana: string): void
	{
		this.setState(prevState =>
		{
			const newSelectedKana = prevState.selectedKana.includes(kana) ? prevState.selectedKana.filter(e => e !== kana) : [...prevState.selectedKana, kana];
			this.saveSelectedKanaToLocalStorage(newSelectedKana);

			const newCards = newSelectedKana.length > 0 ? this.generateNext50Cards(newSelectedKana, prevState.sequenceAlgo) : [];
			return { selectedKana: newSelectedKana, cardQueue: newCards, cardIndex: 0 };
		});
	}

	private saveSelectedKanaToLocalStorage(selectedKana: AppState["selectedKana"]): void
	{
		localStorage.setItem("selected-kana", JSON.stringify(selectedKana));
	}

	private selectAll(): void
	{
		const newSelectedKana = kanaMap.map(e => e.kana);

		this.setState(prevState =>
		{
			return { selectedKana: newSelectedKana, cardQueue: this.generateNext50Cards(newSelectedKana, prevState.sequenceAlgo), cardIndex: 0 };
		});

		this.saveSelectedKanaToLocalStorage(newSelectedKana);
	}

	private selectNone(): void
	{
		this.setState({ selectedKana: [], cardQueue: [], cardIndex: 0 });
		this.saveSelectedKanaToLocalStorage([]);
	}

	private generateNext50Cards(allowedKana: string[], algorithm: "random" | "shuffle"): Card[]
	{
		const newCards = [];

		// Bring the card queue up to the desired size if it is not already full
		for (let i = 0; i < 50; i++)
			newCards.push(this.generateCard(allowedKana, algorithm));

		return newCards;
	}

	private generateCard(allowedKana: string[], algorithm: "shuffle" | "random"): Card
	{
		if (algorithm === "random")
		{
			const randomKana = allowedKana[Math.floor(Math.random() * Object.keys(allowedKana).length)];
			return {
				id: guid(),
				kana: randomKana,
			} as Card;
		}
		else
		{
			if (this.kanaAvailableForShuffle.size === 0)
				this.kanaAvailableForShuffle = new Set(allowedKana);

			const nextKana = [...this.kanaAvailableForShuffle][Math.floor(Math.random() * this.kanaAvailableForShuffle.size)];
			this.kanaAvailableForShuffle.delete(nextKana);
			return {
				id: guid(),
				kana: nextKana,
			} as Card;
		}
	}

	private shuffle<T>(cards: readonly T[]): T[]
	{
		const shuffled = [...cards];
		
		for (let i = 0; i < cards.length; i++)
			shuffled[i] = shuffled[Math.floor(Math.random() * shuffled.length)];

		return shuffled;
	}
}


render(html`<${App} />`, document.body);

export default {};
