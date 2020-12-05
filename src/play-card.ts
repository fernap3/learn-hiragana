import { h, Component } from "preact";
import htm from "htm";
import { GuessStatus } from "./play-area";
const html = htm.bind(h);

interface PlayCardProps
{
	kana: string;
	onSubmit: (userGuess: string) => void;
	status: GuessStatus;
	disabled: boolean;
	xOffset: number;
}

export class PlayCard extends Component<PlayCardProps, { }>
{
	private inputElement: HTMLInputElement | undefined;
	
	constructor(props: PlayCardProps)
	{
		super(props);
		this.state = { };
	}

	render()
	{
		return html`
			<div
				class="play-card play-card--${this.props.status} ${this.props.disabled ? "play-card--disabled" : ""}"
				style="transform: translateX(${this.props.xOffset}px)"
			>
				${this.props.kana}
				<input
					type="text"
					maxLength="3"
					spellCheck="false"
					disabled=${this.props.disabled}
					onKeydown=${(evt: KeyboardEvent) => this.onKeydown(evt)}
					ref=${(e: HTMLInputElement | null) => { e && (this.inputElement = e) }}
				/>
			</div>
		`;
	}

	private onKeydown(evt: KeyboardEvent): void
	{
		// Don't allow the text field to lose focus via tab; we'll control focus in code
		if (evt.key === "Tab")
			evt.preventDefault();
		
		if (evt.key === "Enter" || evt.key === "Tab")
			this.props.onSubmit(this.inputElement!.value);
	}

	public componentDidUpdate(prevProps: PlayCardProps): void
	{
		if (prevProps.disabled && !this.props.disabled)
		{
			this.inputElement!.focus();
		}
	}
}