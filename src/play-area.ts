import { h, Component, render } from "preact";
import htm from "htm";
import { PlayCard } from "./play-card";
import kanaMap from "./kana-map";
const html = htm.bind(h);

export type GuessStatus = "correct" | "incorrect" | "indeterminate";

interface CardState
{
	guessStatus: GuessStatus;
	guess: string;
	kana: string;
}

export class PlayArea extends Component<{ allowedKana: string[] }, { cards: CardState[], cardIndex: number }>
{
	constructor(props: { allowedKana: string[] })
	{
		super(props);

		const cards = new Array(10).fill(1).map(e => this.generateCard());

		this.state = { cards, cardIndex: 0 };
	}

	render()
	{
		return html`
			<div id="play-area">
			${this.state.cards.map((card, cardIndex) => html`
				<${PlayCard}
					key=${cardIndex}
					kana="${card.kana}"
					onSubmit=${(userGuess: string) => this.onGuessSubmit(userGuess)}
					status="${card.guessStatus}"
					disabled="${cardIndex !== this.state.cardIndex}"
					xOffset="${-this.state.cardIndex * 260}"
				/>
			`)}
			</div>
		`;
	}

	private onGuessSubmit(guess: string): void
	{
		this.setState(prevState =>
		{
			const card = prevState.cards[prevState.cardIndex];
			const kanaEntry = kanaMap.find(e => e.kana === card.kana);

			const arrayBeforeCard = prevState.cards.slice(0, prevState.cardIndex);
			const arrayAfterCard = prevState.cards.slice(prevState.cardIndex + 1);
			const newCard = {...card, guessStatus: "correct"};
			const newCards = [...arrayBeforeCard, newCard, ...arrayAfterCard, this.generateCard()] as CardState[];
			
			if (kanaEntry!.romanji === guess)
			{
				return { cards: newCards, cardIndex: prevState.cardIndex + 1 };
			}
			else
			{
				newCard.guessStatus = "incorrect";
				return { cards: newCards };
			}
		});
		
	}

	private generateCard(): CardState
	{
		const randomKana = this.props.allowedKana[Math.floor(Math.random() * Object.keys(this.props.allowedKana).length)];
		
		return {
			guessStatus: "indeterminate",
			kana: randomKana,
			guess: "",
		} as CardState;
	}
}
