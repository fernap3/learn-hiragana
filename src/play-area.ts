import { h, Component } from "preact";
import htm from "htm";
import kanaMap from "./kana-map";
import { CardList } from "./card-list";
import { Card } from "./main";
const html = htm.bind(h);

export type GuessStatus = "incorrect" | "indeterminate";

export interface PlayAreaProps
{
	cards: Card[];
	afterCorrectGuess: () => void;
	cardIndex: number;
}

interface PlayAreaState
{
	guessStatus: GuessStatus;
}

export class PlayArea extends Component<PlayAreaProps, PlayAreaState>
{
	constructor(props: PlayAreaProps)
	{
		super(props);

		this.state = { guessStatus: "indeterminate" };
	}

	render()
	{
		if (this.props.cards.length === 0)
			return html`<div id="play-area" class="no-kana">Select one or more kana to begin</div>`;
		
		return html`
			<div id="play-area">
			<${CardList}
				cards=${this.props.cards}
				cardIndex="${this.props.cardIndex}"
				activeCardStatus=${this.state.guessStatus}
				onGuessSubmit=${(guess: string) => this.onGuessSubmit(guess)}
			/>
			</div>
		`;
	}

	private onGuessSubmit(guess: string): void
	{
		this.setState(prevState =>
		{
			const card = this.props.cards[this.props.cardIndex];
			const kanaEntry = kanaMap.find(e => e.kana === card.kana);
			
			if (kanaEntry!.romaji === guess.trim())
			{
				this.props.afterCorrectGuess();
				return { guessStatus: "indeterminate" };
			}
			else
			{
				return { guessStatus: "incorrect" };
			}
		});
		
	}
}
