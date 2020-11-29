import { h, Component, render } from "preact";
import htm from "htm";
import { PlayArea } from "./play-area";
import kanaMap from "./kana-map";
const html = htm.bind(h);

interface AppState
{
	selectedKana: {[kana: string]: boolean };
}

class App extends Component<{}, AppState>
{
	constructor(props: {})
	{
		super(props);

		this.state = { selectedKana: {} };
		
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
				</div>
				<${PlayArea} allowedKana=${Object.entries(this.state.selectedKana).filter(e => e[1]).map(e => e[0])} />
			</div>
		`;
	}

	private onKanaSelect(kana: string): void
	{
		this.setState(prevState =>
		{
			const newSelectedKana = { ...prevState.selectedKana, [kana]: !prevState.selectedKana[kana] };
			this.saveSelectedKanaToLocalStorage(newSelectedKana);
			
			return { selectedKana: newSelectedKana };
		});
	}

	private saveSelectedKanaToLocalStorage(selectedKana: AppState["selectedKana"]): void
	{
		const allKana = new Set(kanaMap.map(o => o.kana));
		const objectToSave = Object.fromEntries(Object.entries(selectedKana).filter(e => allKana.has(e[0])));
		localStorage.setItem("selected-kana", JSON.stringify(objectToSave));
	}
}


render(html`<${App} />`, document.body);

export default {};
