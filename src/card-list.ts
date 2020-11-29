import { h, Component, render } from "preact";
import htm from "htm";
import { PlayCard } from "./play-card";
import { GuessStatus } from "./play-area";
const html = htm.bind(h);

interface CardListProps
{
	cards: { kana: string; }[];
	cardIndex: number;
	onGuessSubmit: (userGuess: string) => void;
	activeCardStatus: GuessStatus;
}

export class CardList extends Component<CardListProps, {}>
{
	constructor(props: CardListProps)
	{
		super(props);
		this.state = { activeCardStatus: "indeterminate" };
	}

	render()
	{
		return html`
			${this.props.cards.map((card, cardIndex) => html`
				<${PlayCard}
					key=${cardIndex}
					kana="${card.kana}"
					onSubmit=${(userGuess: string) => this.props.onGuessSubmit(userGuess)}
					status="${cardIndex === this.props.cardIndex ? this.props.activeCardStatus : cardIndex < this.props.cardIndex ? "correct" : "indeterminate"}"
					disabled="${cardIndex !== this.props.cardIndex}"
					xOffset="${-this.props.cardIndex * 260}"
				/>
			`)}
		`;
	}
}
