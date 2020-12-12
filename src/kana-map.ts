export type KanaClass = "hiragana" | "hiragana-dakuten" | "combo-hiragana" | "katakana" | "katakana-dakuten" | "combo-katakana";

export interface KanaMapEntry
{
	kana: string;
	romaji: string;
	class: KanaClass;
}

export default <KanaMapEntry[]>[
	{ kana: "あ", romaji: "a", class: "hiragana" },
	{ kana: "い", romaji: "i", class: "hiragana" },
	{ kana: "う", romaji: "u", class: "hiragana" },
	{ kana: "え", romaji: "e", class: "hiragana" },
	{ kana: "お", romaji: "o", class: "hiragana" },

	{ kana: "か", romaji: "ka", class: "hiragana" },
	{ kana: "き", romaji: "ki", class: "hiragana" },
	{ kana: "く", romaji: "ku", class: "hiragana" },
	{ kana: "け", romaji: "ke", class: "hiragana" },
	{ kana: "こ", romaji: "ko", class: "hiragana" },

	{ kana: "さ", romaji: "sa", class: "hiragana" },
	{ kana: "し", romaji: "shi", class: "hiragana" },
	{ kana: "す", romaji: "su", class: "hiragana" },
	{ kana: "せ", romaji: "se", class: "hiragana" },
	{ kana: "そ", romaji: "so", class: "hiragana" },

	{ kana: "た", romaji: "ta", class: "hiragana" },
	{ kana: "ち", romaji: "chi", class: "hiragana" },
	{ kana: "つ", romaji: "tsu", class: "hiragana" },
	{ kana: "て", romaji: "te", class: "hiragana" },
	{ kana: "と", romaji: "to", class: "hiragana" },

	{ kana: "な", romaji: "na", class: "hiragana" },
	{ kana: "に", romaji: "ni", class: "hiragana" },
	{ kana: "ぬ", romaji: "nu", class: "hiragana" },
	{ kana: "ね", romaji: "ne", class: "hiragana" },
	{ kana: "の", romaji: "no", class: "hiragana" },

	{ kana: "は", romaji: "ha", class: "hiragana" },
	{ kana: "ひ", romaji: "hi", class: "hiragana" },
	{ kana: "ふ", romaji: "hu", class: "hiragana" },
	{ kana: "へ", romaji: "he", class: "hiragana" },
	{ kana: "ほ", romaji: "ho", class: "hiragana" },

	{ kana: "ま", romaji: "ma", class: "hiragana" },
	{ kana: "み", romaji: "mi", class: "hiragana" },
	{ kana: "む", romaji: "mu", class: "hiragana" },
	{ kana: "め", romaji: "me", class: "hiragana" },
	{ kana: "も", romaji: "mo", class: "hiragana" },

	{ kana: "や", romaji: "ya", class: "hiragana" },
	{ kana: "ゆ", romaji: "yu", class: "hiragana" },
	{ kana: "よ", romaji: "yo", class: "hiragana" },
	
	{ kana: "ら", romaji: "ra", class: "hiragana" },
	{ kana: "り", romaji: "ri", class: "hiragana" },
	{ kana: "る", romaji: "ru", class: "hiragana" },
	{ kana: "れ", romaji: "re", class: "hiragana" },
	{ kana: "ろ", romaji: "ro", class: "hiragana" },

	{ kana: "わ", romaji: "wa", class: "hiragana" },
	{ kana: "を", romaji: "wo", class: "hiragana" },
	{ kana: "ん", romaji: "n", class: "hiragana" },

	{ kana: "が", romaji: "ga", class: "hiragana-dakuten" },
	{ kana: "ぎ", romaji: "gi", class: "hiragana-dakuten" },
	{ kana: "ぐ", romaji: "gu", class: "hiragana-dakuten" },
	{ kana: "げ", romaji: "ge", class: "hiragana-dakuten" },
	{ kana: "ご", romaji: "go", class: "hiragana-dakuten" },

	{ kana: "ざ", romaji: "za", class: "hiragana-dakuten" },
	{ kana: "じ", romaji: "ji", class: "hiragana-dakuten" },
	{ kana: "ず", romaji: "zu", class: "hiragana-dakuten" },
	{ kana: "ぜ", romaji: "ze", class: "hiragana-dakuten" },
	{ kana: "ぞ", romaji: "zo", class: "hiragana-dakuten" },

	{ kana: "だ", romaji: "da", class: "hiragana-dakuten" },
	{ kana: "ぢ", romaji: "di", class: "hiragana-dakuten" },
	{ kana: "づ", romaji: "du", class: "hiragana-dakuten" },
	{ kana: "で", romaji: "de", class: "hiragana-dakuten" },
	{ kana: "ど", romaji: "do", class: "hiragana-dakuten" },

	{ kana: "ば", romaji: "ba", class: "hiragana-dakuten" },
	{ kana: "び", romaji: "bi", class: "hiragana-dakuten" },
	{ kana: "ぶ", romaji: "bu", class: "hiragana-dakuten" },
	{ kana: "べ", romaji: "be", class: "hiragana-dakuten" },
	{ kana: "ぼ", romaji: "bo", class: "hiragana-dakuten" },
	
	{ kana: "ぱ", romaji: "pa", class: "hiragana-dakuten" },
	{ kana: "ぴ", romaji: "pi", class: "hiragana-dakuten" },
	{ kana: "ぷ", romaji: "pu", class: "hiragana-dakuten" },
	{ kana: "ぺ", romaji: "pe", class: "hiragana-dakuten" },
	{ kana: "ぽ", romaji: "po", class: "hiragana-dakuten" },

	{ kana: "きゃ", romaji: "kya", class: "combo-hiragana" },
	{ kana: "しゃ", romaji: "sha", class: "combo-hiragana" },
	{ kana: "ちゃ", romaji: "cha", class: "combo-hiragana" },
	{ kana: "にゃ", romaji: "nya", class: "combo-hiragana" },

	{ kana: "きゅ", romaji: "kyu", class: "combo-hiragana" },
	{ kana: "しゅ", romaji: "shu", class: "combo-hiragana" },
	{ kana: "ちゅ", romaji: "chu", class: "combo-hiragana" },
	{ kana: "にゅ", romaji: "nyu", class: "combo-hiragana" },

	{ kana: "きょ", romaji: "kyo", class: "combo-hiragana" },
	{ kana: "しょ", romaji: "sho", class: "combo-hiragana" },
	{ kana: "ちょ", romaji: "cho", class: "combo-hiragana" },
	{ kana: "にょ", romaji: "nyo", class: "combo-hiragana" },

	{ kana: "ひゃ", romaji: "hya", class: "combo-hiragana" },
	{ kana: "みゃ", romaji: "mya", class: "combo-hiragana" },
	{ kana: "りゃ", romaji: "rya", class: "combo-hiragana" },
	{ kana: "ぎゃ", romaji: "gya", class: "combo-hiragana" },

	{ kana: "ひゅ", romaji: "hyu", class: "combo-hiragana" },
	{ kana: "みゅ", romaji: "myu", class: "combo-hiragana" },
	{ kana: "りゅ", romaji: "ryu", class: "combo-hiragana" },
	{ kana: "ぎゅ", romaji: "gyu", class: "combo-hiragana" },

	{ kana: "ひょ", romaji: "hyo", class: "combo-hiragana" },
	{ kana: "みょ", romaji: "myo", class: "combo-hiragana" },
	{ kana: "りょ", romaji: "ryo", class: "combo-hiragana" },
	{ kana: "ぎょ", romaji: "gyo", class: "combo-hiragana" },

	{ kana: "じゃ", romaji: "jya", class: "combo-hiragana" },
	{ kana: "ぢゃ", romaji: "dya", class: "combo-hiragana" },
	{ kana: "びゃ", romaji: "bya", class: "combo-hiragana" },
	{ kana: "ぴゃ", romaji: "pya", class: "combo-hiragana" },

	{ kana: "じゅ", romaji: "jyu", class: "combo-hiragana" },
	{ kana: "ぢゅ", romaji: "dyu", class: "combo-hiragana" },
	{ kana: "びゅ", romaji: "byu", class: "combo-hiragana" },
	{ kana: "ぴゅ", romaji: "pyu", class: "combo-hiragana" },

	{ kana: "じょ", romaji: "jyo", class: "combo-hiragana" },
	{ kana: "ぢょ", romaji: "dyo", class: "combo-hiragana" },
	{ kana: "びょ", romaji: "byo", class: "combo-hiragana" },
	{ kana: "ぴょ", romaji: "pyo", class: "combo-hiragana" },

	{ kana: "ア", romaji: "a", class: "katakana" },
	{ kana: "イ", romaji: "i", class: "katakana" },
	{ kana: "ウ", romaji: "u", class: "katakana" },
	{ kana: "エ", romaji: "e", class: "katakana" },
	{ kana: "オ", romaji: "o", class: "katakana" },

	{ kana: "カ", romaji: "ka", class: "katakana" },
	{ kana: "キ", romaji: "ki", class: "katakana" },
	{ kana: "ク", romaji: "ku", class: "katakana" },
	{ kana: "ケ", romaji: "ke", class: "katakana" },
	{ kana: "コ", romaji: "ko", class: "katakana" },

	{ kana: "サ", romaji: "sa", class: "katakana" },
	{ kana: "シ", romaji: "shi", class: "katakana" },
	{ kana: "ス", romaji: "su", class: "katakana" },
	{ kana: "セ", romaji: "se", class: "katakana" },
	{ kana: "ソ", romaji: "so", class: "katakana" },

	{ kana: "タ", romaji: "ta", class: "katakana" },
	{ kana: "チ", romaji: "chi", class: "katakana" },
	{ kana: "ツ", romaji: "tsu", class: "katakana" },
	{ kana: "テ", romaji: "te", class: "katakana" },
	{ kana: "ト", romaji: "to", class: "katakana" },

	{ kana: "ナ", romaji: "na", class: "katakana" },
	{ kana: "ニ", romaji: "ni", class: "katakana" },
	{ kana: "ヌ", romaji: "nu", class: "katakana" },
	{ kana: "ネ", romaji: "ne", class: "katakana" },
	{ kana: "ノ", romaji: "no", class: "katakana" },

	{ kana: "ハ", romaji: "ha", class: "katakana" },
	{ kana: "ヒ", romaji: "hi", class: "katakana" },
	{ kana: "フ", romaji: "hu", class: "katakana" },
	{ kana: "ヘ", romaji: "he", class: "katakana" },
	{ kana: "ホ", romaji: "ho", class: "katakana" },

	{ kana: "マ", romaji: "ma", class: "katakana" },
	{ kana: "ミ", romaji: "mi", class: "katakana" },
	{ kana: "ム", romaji: "mu", class: "katakana" },
	{ kana: "メ", romaji: "me", class: "katakana" },
	{ kana: "モ", romaji: "mo", class: "katakana" },

	{ kana: "ヤ", romaji: "ya", class: "katakana" },
	{ kana: "ユ", romaji: "yu", class: "katakana" },
	{ kana: "ヨ", romaji: "yo", class: "katakana" },
	
	{ kana: "ラ", romaji: "ra", class: "katakana" },
	{ kana: "リ", romaji: "ri", class: "katakana" },
	{ kana: "ル", romaji: "ru", class: "katakana" },
	{ kana: "レ", romaji: "re", class: "katakana" },
	{ kana: "ロ", romaji: "ro", class: "katakana" },

	{ kana: "ワ", romaji: "wa", class: "katakana" },
	{ kana: "ヲ", romaji: "wo", class: "katakana" },
	{ kana: "ン", romaji: "n", class: "katakana" },

	{ kana: "ガ", romaji: "ga", class: "katakana-dakuten" },
	{ kana: "ギ", romaji: "gi", class: "katakana-dakuten" },
	{ kana: "グ", romaji: "gu", class: "katakana-dakuten" },
	{ kana: "ゲ", romaji: "ge", class: "katakana-dakuten" },
	{ kana: "ゴ", romaji: "go", class: "katakana-dakuten" },

	{ kana: "ザ", romaji: "za", class: "katakana-dakuten" },
	{ kana: "ジ", romaji: "ji", class: "katakana-dakuten" },
	{ kana: "ズ", romaji: "zu", class: "katakana-dakuten" },
	{ kana: "ゼ", romaji: "ze", class: "katakana-dakuten" },
	{ kana: "ゾ", romaji: "zo", class: "katakana-dakuten" },

	{ kana: "ダ", romaji: "da", class: "katakana-dakuten" },
	{ kana: "ヂ", romaji: "di", class: "katakana-dakuten" },
	{ kana: "ヅ", romaji: "du", class: "katakana-dakuten" },
	{ kana: "デ", romaji: "de", class: "katakana-dakuten" },
	{ kana: "ド", romaji: "do", class: "katakana-dakuten" },

	{ kana: "バ", romaji: "ba", class: "katakana-dakuten" },
	{ kana: "ビ", romaji: "bi", class: "katakana-dakuten" },
	{ kana: "ブ", romaji: "bu", class: "katakana-dakuten" },
	{ kana: "ベ", romaji: "be", class: "katakana-dakuten" },
	{ kana: "ボ", romaji: "bo", class: "katakana-dakuten" },
	
	{ kana: "パ", romaji: "pa", class: "katakana-dakuten" },
	{ kana: "ピ", romaji: "pi", class: "katakana-dakuten" },
	{ kana: "プ", romaji: "pu", class: "katakana-dakuten" },
	{ kana: "ペ", romaji: "pe", class: "katakana-dakuten" },
	{ kana: "ポ", romaji: "po", class: "katakana-dakuten" },

	{ kana: "キャ", romaji: "kya", class: "combo-katakana" },
	{ kana: "シャ", romaji: "sha", class: "combo-katakana" },
	{ kana: "チャ", romaji: "cha", class: "combo-katakana" },
	{ kana: "ニャ", romaji: "nya", class: "combo-katakana" },

	{ kana: "キュ", romaji: "kyu", class: "combo-katakana" },
	{ kana: "シュ", romaji: "shu", class: "combo-katakana" },
	{ kana: "チュ", romaji: "chu", class: "combo-katakana" },
	{ kana: "ニュ", romaji: "nyu", class: "combo-katakana" },

	{ kana: "キョ", romaji: "kyo", class: "combo-katakana" },
	{ kana: "ショ", romaji: "sho", class: "combo-katakana" },
	{ kana: "チョ", romaji: "cho", class: "combo-katakana" },
	{ kana: "ニョ", romaji: "nyo", class: "combo-katakana" },

	{ kana: "ヒャ", romaji: "hya", class: "combo-katakana" },
	{ kana: "ミャ", romaji: "mya", class: "combo-katakana" },
	{ kana: "リャ", romaji: "rya", class: "combo-katakana" },
	{ kana: "ギャ", romaji: "gya", class: "combo-katakana" },

	{ kana: "ヒュ", romaji: "hyu", class: "combo-katakana" },
	{ kana: "ミュ", romaji: "myu", class: "combo-katakana" },
	{ kana: "リュ", romaji: "ryu", class: "combo-katakana" },
	{ kana: "ギュ", romaji: "gyu", class: "combo-katakana" },

	{ kana: "ヒョ", romaji: "hyo", class: "combo-katakana" },
	{ kana: "ミョ", romaji: "myo", class: "combo-katakana" },
	{ kana: "リョ", romaji: "ryo", class: "combo-katakana" },
	{ kana: "ギョ", romaji: "gyo", class: "combo-katakana" },

	{ kana: "ジャ", romaji: "jya", class: "combo-katakana" },
	{ kana: "ヂャ", romaji: "dya", class: "combo-katakana" },
	{ kana: "ビャ", romaji: "bya", class: "combo-katakana" },
	{ kana: "ピャ", romaji: "pya", class: "combo-katakana" },

	{ kana: "ジュ", romaji: "jyu", class: "combo-katakana" },
	{ kana: "ヂュ", romaji: "dyu", class: "combo-katakana" },
	{ kana: "ビュ", romaji: "byu", class: "combo-katakana" },
	{ kana: "ピュ", romaji: "pyu", class: "combo-katakana" },

	{ kana: "ジョ", romaji: "jyo", class: "combo-katakana" },
	{ kana: "ヂョ", romaji: "dyo", class: "combo-katakana" },
	{ kana: "ビョ", romaji: "byo", class: "combo-katakana" },
	{ kana: "ピョ", romaji: "pyo", class: "combo-katakana" },
];