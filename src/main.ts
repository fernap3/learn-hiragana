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
	constructor(props: {})
	{
		super(props);

		this.state = { selectedKana: {}, cards: [] };
		
		const savedSelectedKanaJson = localStorage.getItem("selected-kana");
		if (savedSelectedKanaJson)
		{
			this.state = { ...this.state, selectedKana: JSON.parse(savedSelectedKanaJson) };
		}

		const cards = new Array(10).fill(1).map(e => this.generateCard());
		this.state = { ...this.state, cards };
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
					<div>
						<button type="button" class="bulk-select" onClick="${() => this.selectAll()}">Select all</button>
						<button type="button" class="bulk-select" onClick="${() => this.selectNone()}">Select none</button>
					</div>
				</div>
				<${PlayArea} cards=${this.state.cards} />
			</div>
		`;
	}

	private onKanaSelect(kana: string): void
	{
		this.setState(prevState =>
		{
			const newSelectedKana = { ...prevState.selectedKana, [kana]: !prevState.selectedKana[kana] };
			this.saveSelectedKanaToLocalStorage(newSelectedKana);

			const filteredCards = this.state.cards.filter(c => !!newSelectedKana[c.kana]);
			return { selectedKana: newSelectedKana, cards: filteredCards };
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
		
		this.setState({
			selectedKana: newSelectedKana,
		});

		this.saveSelectedKanaToLocalStorage(newSelectedKana);
	}

	private selectNone(): void
	{
		this.setState({ selectedKana: {} });

		this.saveSelectedKanaToLocalStorage({});
	}

	private generateCard(): Card
	{
		const allowedKana = Object.entries(this.state.selectedKana).filter(e => e[1]).map(e => e[0]);
		const randomKana = allowedKana[Math.floor(Math.random() * Object.keys(allowedKana).length)];
		
		return {
			id: guid(),
			kana: randomKana,
		} as Card;
	}
}


render(html`<${App} />`, document.body);

export default {};
