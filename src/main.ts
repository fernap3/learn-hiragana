import { h, Component, render } from "preact";
import htm from "htm";
import { PlayArea } from "./play-area";
import kanaMap from "./kana-map";
import { guid } from "./utils";
const html = htm.bind(h);

interface AppState
{
	selectedKana: {[kana: string]: boolean };
	cards: Card[];
}

export interface Card
{
	id: string;
	kana: string;
}

class App extends Component<{}, AppState>
{
	private static readonly cardQueueLength = 10;
	
	constructor(props: {})
	{
		super(props);

		this.state = { selectedKana: {}, cards: [] };
		
		const savedSelectedKanaJson = localStorage.getItem("selected-kana");
		if (savedSelectedKanaJson)
		{
			this.state = { ...this.state, selectedKana: JSON.parse(savedSelectedKanaJson) };
		}
	}

	render()
	{
		return html`
			<div class="pane-container">
				<div id="options-pane">
					<ul id="kana-list">
						${kanaMap.map(item => html`
						<li style="grid-area: ${item.kana}">
							<label class=${this.state.selectedKana[item.kana] ? "selected" : ""}>
								<input type="checkbox" checked=${this.state.selectedKana[item.kana]} onClick="${() => this.onKanaSelect(item.kana)}" /><span class="kana">${item.kana}</span><div class="romanji">${item.romanji}</div>
							</label>
						</li>
						`)}
					</ul>
					<div id="kana-bulk-select-buttons">
						<button type="button" class="bulk-select" onClick="${() => this.selectAll()}">Select all</button>
						<button type="button" class="bulk-select" onClick="${() => this.selectNone()}">Select none</button>
					</div>
				</div>
				<${PlayArea}
					cards=${this.state.cards}
					afterCorrectGuess=${() => this.afterCorrectGuess()}
				/>
			</div>
		`;
	}

	private afterCorrectGuess(): void
	{
		this.setState(prevState =>
		{
			const allowedKana = Object.entries(prevState.selectedKana).filter(e => e[1]).map(e => e[0]);
			return { cards: [...prevState.cards, this.generateCard(allowedKana) ] };
		});
	}

	private onKanaSelect(kana: string): void
	{
		this.setState(prevState =>
		{
			const newSelectedKana = { ...prevState.selectedKana, [kana]: !prevState.selectedKana[kana] };
			this.saveSelectedKanaToLocalStorage(newSelectedKana);

			const newCards = Object.values(newSelectedKana).some(e => e === true) ? this.generateFullCardQueue(newSelectedKana) : [];
			return { selectedKana: newSelectedKana, cards: newCards };
		});
	}

	private saveSelectedKanaToLocalStorage(selectedKana: AppState["selectedKana"]): void
	{
		const allKana = new Set(kanaMap.map(o => o.kana));
		const objectToSave = Object.fromEntries(Object.entries(selectedKana).filter(e => allKana.has(e[0])));
		localStorage.setItem("selected-kana", JSON.stringify(objectToSave));
	}

	private selectAll(): void
	{
		const newSelectedKana = Object.fromEntries(kanaMap.map(e => [e.kana, true]));

		this.setState(prevState =>
		{
			return { selectedKana: newSelectedKana, cards: this.generateFullCardQueue(newSelectedKana) };
		});

		this.saveSelectedKanaToLocalStorage(newSelectedKana);
	}

	private selectNone(): void
	{
		this.setState({ selectedKana: {}, cards: [], });
		this.saveSelectedKanaToLocalStorage({});
	}

	private generateFullCardQueue(selectedKana: {[kana: string]: boolean}): Card[]
	{
		const newCards = [];
		const allowedKana = Object.entries(selectedKana).filter(e => e[1]).map(e => e[0]);

		// Bring the card queue up to the desired size if it is not already full
		for (let i = 0; i < App.cardQueueLength; i++)
			newCards.push(this.generateCard(allowedKana));

		return newCards;
	}

	private generateCard(allowedKana: string[]): Card
	{
		const randomKana = allowedKana[Math.floor(Math.random() * Object.keys(allowedKana).length)];
		
		return {
			id: guid(),
			kana: randomKana,
		} as Card;
	}
}


render(html`<${App} />`, document.body);

export default {};
