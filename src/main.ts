import { h, Component, render } from "preact";
import htm from "htm";
import { PlayArea } from "./play-area";
import { guid } from "./utils";
import { OptionsMenu } from "./options-menu";
const html = htm.bind(h);

interface AppState
{
	selectedKana: string[];
	sequenceAlgo: "random" | "shuffle";
	cardQueue: Card[];
	cardIndex: number;
	optionsMenuOpen: boolean;
}

export interface Card
{
	id: string;
	kana: string;
}

export interface OptionsModel
{
	selectedKana: string[];
	sequenceAlgo: "random" | "shuffle";
}

class App extends Component<{}, AppState>
{
	private kanaAvailableForShuffle = [] as string[];
	
	constructor(props: {})
	{
		super(props);

		this.state = { selectedKana: [], cardQueue: [], cardIndex: 0, sequenceAlgo: "shuffle", optionsMenuOpen: false };
		
		const savedSelectedKanaJson = localStorage.getItem("selected-kana");
		if (savedSelectedKanaJson)
		{
			const savedSelectedKana = JSON.parse(savedSelectedKanaJson);
			this.state = {
				...this.state,
				selectedKana: savedSelectedKana,
				cardQueue: savedSelectedKana.length > 0 ? this.generate50Cards(savedSelectedKana, this.state.sequenceAlgo) : [],
			};
		}
	}

	render()
	{
		return html`
			<div class="pane-container">
				<button type="button" onClick="${() => this.onOptionsMenuButtonClick()}" style="position: absolute; top: 0; left: 0;">Open options menu</button>
				${this.state.optionsMenuOpen ?
					html`<${OptionsMenu}
						onChange=${(newOptions: OptionsModel) => this.onOptionsMenuChange(newOptions)}
						onClose=${() => this.onOptionsMenuClose()}
						options=${{ selectedKana: this.state.selectedKana, sequenceAlgo: this.state.sequenceAlgo }}
					/>`
					: null}
				<${PlayArea}
					cards=${this.state.cardQueue}
					afterCorrectGuess=${() => this.afterCorrectGuess()}
					cardIndex=${this.state.cardIndex}
				/>
			</div>
		`;
	}

	private onOptionsMenuButtonClick(): void
	{
		this.setState(prevState => ({ optionsMenuOpen: !prevState.optionsMenuOpen }));
	}

	private onOptionsMenuChange(newOptions: OptionsModel): void
	{
		console.log(newOptions);
		this.setState({ selectedKana: newOptions.selectedKana, sequenceAlgo: newOptions.sequenceAlgo });
		this.saveSelectedKanaToLocalStorage(newOptions.selectedKana);
	}

	private onOptionsMenuClose(): void
	{
		this.setState(prevState =>
		{
			const newCards = prevState.selectedKana.length > 0 ? this.generate50Cards(prevState.selectedKana, prevState.sequenceAlgo) : [];
			return { sequenceAlgo: prevState.sequenceAlgo, cardQueue: newCards, cardIndex: 0 };
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

	private saveSelectedKanaToLocalStorage(selectedKana: AppState["selectedKana"]): void
	{
		localStorage.setItem("selected-kana", JSON.stringify(selectedKana));
	}

	private generate50Cards(allowedKana: string[], algorithm: "random" | "shuffle"): Card[]
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
			if (this.kanaAvailableForShuffle.length === 0)
				this.kanaAvailableForShuffle = [...allowedKana];

			const kanaIndex = Math.floor(Math.random() * this.kanaAvailableForShuffle.length);
			const nextKana = this.kanaAvailableForShuffle[kanaIndex];
			this.kanaAvailableForShuffle.splice(kanaIndex, 1);
			return {
				id: guid(),
				kana: nextKana,
			} as Card;
		}
	}
}


render(html`<${App} />`, document.body);

export default {};
