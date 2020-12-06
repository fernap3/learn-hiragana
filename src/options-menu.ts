import { h, Component } from "preact";
import htm from "htm";
import kanaMap from "./kana-map";
import { OptionsModel } from "./main";
const html = htm.bind(h);

interface OptionsMenuProps
{
	options: OptionsModel;
	onChange: (newOptions: OptionsModel) => void;
	onClose: () => void;
}

export class OptionsMenu extends Component<OptionsMenuProps, {}>
{
	constructor(props: OptionsMenuProps)
	{
		super(props);
	}

	render()
	{
		const selectedKanaSet = new Set<string>(this.props.options.selectedKana);

		const regularHiragana = kanaMap.filter(e => e.class === "hiragana");
		const hiraganaDakuten = kanaMap.filter(e => e.class === "hiragana-dakuten");
		const comboHiragana = kanaMap.filter(e => e.class === "combo-hiragana");
		const regularKatakana = kanaMap.filter(e => e.class === "katakana");
		const katakanaDakuten = kanaMap.filter(e => e.class === "katakana-dakuten");
		const comboKatakana = kanaMap.filter(e => e.class === "combo-katakana");
		
		return html`
			<div id="options-menu">
				<div id="hiragana-list">
					<h1>Hiragana</h1>
					<ul id="regular-hiragana-list">
						${regularHiragana.map(item => html`
						<li style="grid-area: ${item.kana}">
							<label class=${selectedKanaSet.has(item.kana) ? "selected" : ""}>
								<input type="checkbox" checked=${selectedKanaSet.has(item.kana)} onClick="${() => this.onKanaSelect(item.kana)}" />
								<span class="kana${item.kana.length > 1 ? " combo" : ""}">${item.kana}</span>
								<div class="romanji">${item.romanji}</div>
							</label>
						</li>
						`)}
					</ul>
					<h1>Hiragana Dakuten</h1>
					<ul id="hiragana-dakuten-list">
						${hiraganaDakuten.map(item => html`
						<li style="grid-area: ${item.kana}">
							<label class=${selectedKanaSet.has(item.kana) ? "selected" : ""}>
								<input type="checkbox" checked=${selectedKanaSet.has(item.kana)} onClick="${() => this.onKanaSelect(item.kana)}" />
								<span class="kana${item.kana.length > 1 ? " combo" : ""}">${item.kana}</span>
								<div class="romanji">${item.romanji}</div>
							</label>
						</li>
						`)}
					</ul>
					<h1>Combo Hiragana</h1>
					<ul id="combo-hiragana-list">
						${comboHiragana.map(item => html`
						<li style="grid-area: ${item.kana}">
							<label class=${selectedKanaSet.has(item.kana) ? "selected" : ""}>
								<input type="checkbox" checked=${selectedKanaSet.has(item.kana)} onClick="${() => this.onKanaSelect(item.kana)}" />
								<span class="kana${item.kana.length > 1 ? " combo" : ""}">${item.kana}</span>
								<div class="romanji">${item.romanji}</div>
							</label>
						</li>
						`)}
					</ul>
					<h1>Katakana</h1>
					<ul id="regular-katakana-list">
						${regularKatakana.map(item => html`
						<li style="grid-area: ${item.kana}">
							<label class=${selectedKanaSet.has(item.kana) ? "selected" : ""}>
								<input type="checkbox" checked=${selectedKanaSet.has(item.kana)} onClick="${() => this.onKanaSelect(item.kana)}" />
								<span class="kana${item.kana.length > 1 ? " combo" : ""}">${item.kana}</span>
								<div class="romanji">${item.romanji}</div>
							</label>
						</li>
						`)}
					</ul>
					<h1>Katakana Dakuten</h1>
					<ul id="katakana-dakuten-list">
						${katakanaDakuten.map(item => html`
						<li style="grid-area: ${item.kana}">
							<label class=${selectedKanaSet.has(item.kana) ? "selected" : ""}>
								<input type="checkbox" checked=${selectedKanaSet.has(item.kana)} onClick="${() => this.onKanaSelect(item.kana)}" />
								<span class="kana${item.kana.length > 1 ? " combo" : ""}">${item.kana}</span>
								<div class="romanji">${item.romanji}</div>
							</label>
						</li>
						`)}
					</ul>
					<h1>Combo Katakana</h1>
					<ul id="combo-katakana-list">
						${comboKatakana.map(item => html`
						<li style="grid-area: ${item.kana}">
							<label class=${selectedKanaSet.has(item.kana) ? "selected" : ""}>
								<input type="checkbox" checked=${selectedKanaSet.has(item.kana)} onClick="${() => this.onKanaSelect(item.kana)}" />
								<span class="kana${item.kana.length > 1 ? " combo" : ""}">${item.kana}</span>
								<div class="romanji">${item.romanji}</div>
							</label>
						</li>
						`)}
					</ul>
				</div>
				<div id="kana-bulk-select-buttons">
					<button type="button" class="bulk-select" onClick="${() => this.selectAll()}">Select all</button>
					<button type="button" class="bulk-select" onClick="${() => this.selectNone()}">Select none</button>
					<button type="button" class="bulk-select" onClick="${() => this.props.onClose()}">Close menu</button>
				</div>
				<div id="other-options">
					<div id="other-options__sequence-algo">	
						<label><input type="radio" name="sequence-algo" checked="${this.props.options.sequenceAlgo === "shuffle"}" onClick=${() => this.onSequenceAlgoChange("shuffle")} />Shuffle</label>
						<label><input type="radio" name="sequence-algo" checked="${this.props.options.sequenceAlgo === "random"}" onClick=${() => this.onSequenceAlgoChange("random")} />Random</label>
					</div>
				</div>
			</div>
		`;
	}

	private onKanaSelect(kana: string): void
	{
		const newOptions = { ...this.props.options } as OptionsModel;
		
		if (this.props.options.selectedKana.includes(kana))
			newOptions.selectedKana = this.props.options.selectedKana.filter(e => e !== kana);
		else
			newOptions.selectedKana = [...this.props.options.selectedKana, kana];

		this.props.onChange(newOptions);
	}

	private selectAll(): void
	{
		const newOptions = { ...this.props.options } as OptionsModel;
		newOptions.selectedKana = kanaMap.map(e => e.kana);
		this.props.onChange(newOptions);
	}

	private selectNone(): void
	{
		const newOptions = { ...this.props.options } as OptionsModel;
		newOptions.selectedKana = [];
		this.props.onChange(newOptions);
	}

	private onSequenceAlgoChange(algo: "random" | "shuffle"): void
	{
		const newOptions = { ...this.props.options } as OptionsModel;
		newOptions.sequenceAlgo = algo;
		this.props.onChange(newOptions);
	}
}
				