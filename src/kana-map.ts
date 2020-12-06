type KanaClass = "hiragana" | "hiragana-dakuten" | "combo-hiragana" | "katakana" | "katakana-dakuten" | "combo-katakana";

interface KanaMapEntry
{
	kana: string;
	romanji: string;
	class: KanaClass;
}

export default <KanaMapEntry[]>[
	{ kana: "あ", romanji: "a", class: "hiragana" },
	{ kana: "い", romanji: "i", class: "hiragana" },
	{ kana: "う", romanji: "u", class: "hiragana" },
	{ kana: "え", romanji: "e", class: "hiragana" },
	{ kana: "お", romanji: "o", class: "hiragana" },

	{ kana: "か", romanji: "ka", class: "hiragana" },
	{ kana: "き", romanji: "ki", class: "hiragana" },
	{ kana: "く", romanji: "ku", class: "hiragana" },
	{ kana: "け", romanji: "ke", class: "hiragana" },
	{ kana: "こ", romanji: "ko", class: "hiragana" },

	{ kana: "さ", romanji: "sa", class: "hiragana" },
	{ kana: "し", romanji: "shi", class: "hiragana" },
	{ kana: "す", romanji: "su", class: "hiragana" },
	{ kana: "せ", romanji: "se", class: "hiragana" },
	{ kana: "そ", romanji: "so", class: "hiragana" },

	{ kana: "た", romanji: "ta", class: "hiragana" },
	{ kana: "ち", romanji: "chi", class: "hiragana" },
	{ kana: "つ", romanji: "tsu", class: "hiragana" },
	{ kana: "て", romanji: "te", class: "hiragana" },
	{ kana: "と", romanji: "to", class: "hiragana" },

	{ kana: "な", romanji: "na", class: "hiragana" },
	{ kana: "に", romanji: "ni", class: "hiragana" },
	{ kana: "ぬ", romanji: "nu", class: "hiragana" },
	{ kana: "ね", romanji: "ne", class: "hiragana" },
	{ kana: "の", romanji: "no", class: "hiragana" },

	{ kana: "は", romanji: "ha", class: "hiragana" },
	{ kana: "ひ", romanji: "hi", class: "hiragana" },
	{ kana: "ふ", romanji: "hu", class: "hiragana" },
	{ kana: "へ", romanji: "he", class: "hiragana" },
	{ kana: "ほ", romanji: "ho", class: "hiragana" },

	{ kana: "ま", romanji: "ma", class: "hiragana" },
	{ kana: "み", romanji: "mi", class: "hiragana" },
	{ kana: "む", romanji: "mu", class: "hiragana" },
	{ kana: "め", romanji: "me", class: "hiragana" },
	{ kana: "も", romanji: "mo", class: "hiragana" },

	{ kana: "や", romanji: "ya", class: "hiragana" },
	{ kana: "ゆ", romanji: "yu", class: "hiragana" },
	{ kana: "よ", romanji: "yo", class: "hiragana" },
	
	{ kana: "ら", romanji: "ra", class: "hiragana" },
	{ kana: "り", romanji: "ri", class: "hiragana" },
	{ kana: "る", romanji: "ru", class: "hiragana" },
	{ kana: "れ", romanji: "re", class: "hiragana" },
	{ kana: "ろ", romanji: "ro", class: "hiragana" },

	{ kana: "わ", romanji: "wa", class: "hiragana" },
	{ kana: "を", romanji: "wo", class: "hiragana" },
	{ kana: "ん", romanji: "n", class: "hiragana" },

	{ kana: "が", romanji: "ga", class: "hiragana-dakuten" },
	{ kana: "ぎ", romanji: "gi", class: "hiragana-dakuten" },
	{ kana: "ぐ", romanji: "gu", class: "hiragana-dakuten" },
	{ kana: "げ", romanji: "ge", class: "hiragana-dakuten" },
	{ kana: "ご", romanji: "go", class: "hiragana-dakuten" },

	{ kana: "ざ", romanji: "za", class: "hiragana-dakuten" },
	{ kana: "じ", romanji: "ji", class: "hiragana-dakuten" },
	{ kana: "ず", romanji: "zu", class: "hiragana-dakuten" },
	{ kana: "ぜ", romanji: "ze", class: "hiragana-dakuten" },
	{ kana: "ぞ", romanji: "zo", class: "hiragana-dakuten" },

	{ kana: "だ", romanji: "da", class: "hiragana-dakuten" },
	{ kana: "ぢ", romanji: "di", class: "hiragana-dakuten" },
	{ kana: "づ", romanji: "du", class: "hiragana-dakuten" },
	{ kana: "で", romanji: "de", class: "hiragana-dakuten" },
	{ kana: "ど", romanji: "do", class: "hiragana-dakuten" },

	{ kana: "ば", romanji: "ba", class: "hiragana-dakuten" },
	{ kana: "び", romanji: "bi", class: "hiragana-dakuten" },
	{ kana: "ぶ", romanji: "bu", class: "hiragana-dakuten" },
	{ kana: "べ", romanji: "be", class: "hiragana-dakuten" },
	{ kana: "ぼ", romanji: "bo", class: "hiragana-dakuten" },
	
	{ kana: "ぱ", romanji: "pa", class: "hiragana-dakuten" },
	{ kana: "ぴ", romanji: "pi", class: "hiragana-dakuten" },
	{ kana: "ぷ", romanji: "pu", class: "hiragana-dakuten" },
	{ kana: "ぺ", romanji: "pe", class: "hiragana-dakuten" },
	{ kana: "ぽ", romanji: "po", class: "hiragana-dakuten" },

	{ kana: "きゃ", romanji: "kya", class: "combo-hiragana" },
	{ kana: "しゃ", romanji: "sha", class: "combo-hiragana" },
	{ kana: "ちゃ", romanji: "cha", class: "combo-hiragana" },
	{ kana: "にゃ", romanji: "nya", class: "combo-hiragana" },

	{ kana: "きゅ", romanji: "kyu", class: "combo-hiragana" },
	{ kana: "しゅ", romanji: "shu", class: "combo-hiragana" },
	{ kana: "ちゅ", romanji: "chu", class: "combo-hiragana" },
	{ kana: "にゅ", romanji: "nyu", class: "combo-hiragana" },

	{ kana: "きょ", romanji: "kyo", class: "combo-hiragana" },
	{ kana: "しょ", romanji: "sho", class: "combo-hiragana" },
	{ kana: "ちょ", romanji: "cho", class: "combo-hiragana" },
	{ kana: "にょ", romanji: "nyo", class: "combo-hiragana" },

	{ kana: "ひゃ", romanji: "hya", class: "combo-hiragana" },
	{ kana: "みゃ", romanji: "mya", class: "combo-hiragana" },
	{ kana: "りゃ", romanji: "rya", class: "combo-hiragana" },
	{ kana: "ぎゃ", romanji: "gya", class: "combo-hiragana" },

	{ kana: "ひゅ", romanji: "hyu", class: "combo-hiragana" },
	{ kana: "みゅ", romanji: "myu", class: "combo-hiragana" },
	{ kana: "りゅ", romanji: "ryu", class: "combo-hiragana" },
	{ kana: "ぎゅ", romanji: "gyu", class: "combo-hiragana" },

	{ kana: "ひょ", romanji: "hyo", class: "combo-hiragana" },
	{ kana: "みょ", romanji: "myo", class: "combo-hiragana" },
	{ kana: "りょ", romanji: "ryo", class: "combo-hiragana" },
	{ kana: "ぎょ", romanji: "gyo", class: "combo-hiragana" },

	{ kana: "じゃ", romanji: "jya", class: "combo-hiragana" },
	{ kana: "ぢゃ", romanji: "dya", class: "combo-hiragana" },
	{ kana: "びゃ", romanji: "bya", class: "combo-hiragana" },
	{ kana: "ぴゃ", romanji: "pya", class: "combo-hiragana" },

	{ kana: "じゅ", romanji: "jyu", class: "combo-hiragana" },
	{ kana: "ぢゅ", romanji: "dyu", class: "combo-hiragana" },
	{ kana: "びゅ", romanji: "byu", class: "combo-hiragana" },
	{ kana: "ぴゅ", romanji: "pyu", class: "combo-hiragana" },

	{ kana: "じょ", romanji: "jyo", class: "combo-hiragana" },
	{ kana: "ぢょ", romanji: "dyo", class: "combo-hiragana" },
	{ kana: "びょ", romanji: "byo", class: "combo-hiragana" },
	{ kana: "ぴょ", romanji: "pyo", class: "combo-hiragana" },

	{ kana: "ア", romanji: "a", class: "katakana" },
	{ kana: "イ", romanji: "i", class: "katakana" },
	{ kana: "ウ", romanji: "u", class: "katakana" },
	{ kana: "エ", romanji: "e", class: "katakana" },
	{ kana: "オ", romanji: "o", class: "katakana" },

	{ kana: "カ", romanji: "ka", class: "katakana" },
	{ kana: "キ", romanji: "ki", class: "katakana" },
	{ kana: "ク", romanji: "ku", class: "katakana" },
	{ kana: "ケ", romanji: "ke", class: "katakana" },
	{ kana: "コ", romanji: "ko", class: "katakana" },

	{ kana: "サ", romanji: "sa", class: "katakana" },
	{ kana: "シ", romanji: "shi", class: "katakana" },
	{ kana: "ス", romanji: "su", class: "katakana" },
	{ kana: "セ", romanji: "se", class: "katakana" },
	{ kana: "ソ", romanji: "so", class: "katakana" },

	{ kana: "タ", romanji: "ta", class: "katakana" },
	{ kana: "チ", romanji: "chi", class: "katakana" },
	{ kana: "ツ", romanji: "tsu", class: "katakana" },
	{ kana: "テ", romanji: "te", class: "katakana" },
	{ kana: "ト", romanji: "to", class: "katakana" },

	{ kana: "ナ", romanji: "na", class: "katakana" },
	{ kana: "ニ", romanji: "ni", class: "katakana" },
	{ kana: "ヌ", romanji: "nu", class: "katakana" },
	{ kana: "ネ", romanji: "ne", class: "katakana" },
	{ kana: "ノ", romanji: "no", class: "katakana" },

	{ kana: "ハ", romanji: "ha", class: "katakana" },
	{ kana: "ヒ", romanji: "hi", class: "katakana" },
	{ kana: "フ", romanji: "hu", class: "katakana" },
	{ kana: "ヘ", romanji: "he", class: "katakana" },
	{ kana: "ホ", romanji: "ho", class: "katakana" },

	{ kana: "マ", romanji: "ma", class: "katakana" },
	{ kana: "ミ", romanji: "mi", class: "katakana" },
	{ kana: "ム", romanji: "mu", class: "katakana" },
	{ kana: "メ", romanji: "me", class: "katakana" },
	{ kana: "モ", romanji: "mo", class: "katakana" },

	{ kana: "ヤ", romanji: "ya", class: "katakana" },
	{ kana: "ユ", romanji: "yu", class: "katakana" },
	{ kana: "ヨ", romanji: "yo", class: "katakana" },
	
	{ kana: "ラ", romanji: "ra", class: "katakana" },
	{ kana: "リ", romanji: "ri", class: "katakana" },
	{ kana: "ル", romanji: "ru", class: "katakana" },
	{ kana: "レ", romanji: "re", class: "katakana" },
	{ kana: "ロ", romanji: "ro", class: "katakana" },

	{ kana: "ワ", romanji: "wa", class: "katakana" },
	{ kana: "ヲ", romanji: "wo", class: "katakana" },
	{ kana: "ン", romanji: "n", class: "katakana" },

	{ kana: "ガ", romanji: "ga", class: "katakana-dakuten" },
	{ kana: "ギ", romanji: "gi", class: "katakana-dakuten" },
	{ kana: "グ", romanji: "gu", class: "katakana-dakuten" },
	{ kana: "ゲ", romanji: "ge", class: "katakana-dakuten" },
	{ kana: "ゴ", romanji: "go", class: "katakana-dakuten" },

	{ kana: "ザ", romanji: "za", class: "katakana-dakuten" },
	{ kana: "ジ", romanji: "ji", class: "katakana-dakuten" },
	{ kana: "ズ", romanji: "zu", class: "katakana-dakuten" },
	{ kana: "ゼ", romanji: "ze", class: "katakana-dakuten" },
	{ kana: "ゾ", romanji: "zo", class: "katakana-dakuten" },

	{ kana: "ダ", romanji: "da", class: "katakana-dakuten" },
	{ kana: "ヂ", romanji: "di", class: "katakana-dakuten" },
	{ kana: "ヅ", romanji: "du", class: "katakana-dakuten" },
	{ kana: "デ", romanji: "de", class: "katakana-dakuten" },
	{ kana: "ド", romanji: "do", class: "katakana-dakuten" },

	{ kana: "バ", romanji: "ba", class: "katakana-dakuten" },
	{ kana: "ビ", romanji: "bi", class: "katakana-dakuten" },
	{ kana: "ブ", romanji: "bu", class: "katakana-dakuten" },
	{ kana: "ベ", romanji: "be", class: "katakana-dakuten" },
	{ kana: "ボ", romanji: "bo", class: "katakana-dakuten" },
	
	{ kana: "パ", romanji: "pa", class: "katakana-dakuten" },
	{ kana: "ピ", romanji: "pi", class: "katakana-dakuten" },
	{ kana: "プ", romanji: "pu", class: "katakana-dakuten" },
	{ kana: "ペ", romanji: "pe", class: "katakana-dakuten" },
	{ kana: "ポ", romanji: "po", class: "katakana-dakuten" },

	{ kana: "キャ", romanji: "kya", class: "combo-katakana" },
	{ kana: "シャ", romanji: "sha", class: "combo-katakana" },
	{ kana: "チャ", romanji: "cha", class: "combo-katakana" },
	{ kana: "ニャ", romanji: "nya", class: "combo-katakana" },

	{ kana: "キュ", romanji: "kyu", class: "combo-katakana" },
	{ kana: "シュ", romanji: "shu", class: "combo-katakana" },
	{ kana: "チュ", romanji: "chu", class: "combo-katakana" },
	{ kana: "ニュ", romanji: "nyu", class: "combo-katakana" },

	{ kana: "キョ", romanji: "kyo", class: "combo-katakana" },
	{ kana: "ショ", romanji: "sho", class: "combo-katakana" },
	{ kana: "チョ", romanji: "cho", class: "combo-katakana" },
	{ kana: "ニョ", romanji: "nyo", class: "combo-katakana" },

	{ kana: "ヒャ", romanji: "hya", class: "combo-katakana" },
	{ kana: "ミャ", romanji: "mya", class: "combo-katakana" },
	{ kana: "リャ", romanji: "rya", class: "combo-katakana" },
	{ kana: "ギャ", romanji: "gya", class: "combo-katakana" },

	{ kana: "ヒュ", romanji: "hyu", class: "combo-katakana" },
	{ kana: "ミュ", romanji: "myu", class: "combo-katakana" },
	{ kana: "リュ", romanji: "ryu", class: "combo-katakana" },
	{ kana: "ギュ", romanji: "gyu", class: "combo-katakana" },

	{ kana: "ヒョ", romanji: "hyo", class: "combo-katakana" },
	{ kana: "ミョ", romanji: "myo", class: "combo-katakana" },
	{ kana: "リョ", romanji: "ryo", class: "combo-katakana" },
	{ kana: "ギョ", romanji: "gyo", class: "combo-katakana" },

	{ kana: "ジャ", romanji: "jya", class: "combo-katakana" },
	{ kana: "ヂャ", romanji: "dya", class: "combo-katakana" },
	{ kana: "ビャ", romanji: "bya", class: "combo-katakana" },
	{ kana: "ピャ", romanji: "pya", class: "combo-katakana" },

	{ kana: "ジュ", romanji: "jyu", class: "combo-katakana" },
	{ kana: "ヂュ", romanji: "dyu", class: "combo-katakana" },
	{ kana: "ビュ", romanji: "byu", class: "combo-katakana" },
	{ kana: "ピュ", romanji: "pyu", class: "combo-katakana" },

	{ kana: "ジョ", romanji: "jyo", class: "combo-katakana" },
	{ kana: "ヂョ", romanji: "dyo", class: "combo-katakana" },
	{ kana: "ビュ", romanji: "byo", class: "combo-katakana" },
	{ kana: "ピョ", romanji: "pyo", class: "combo-katakana" },
];