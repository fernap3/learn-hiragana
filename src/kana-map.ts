type KanaClass = "hiragana" | "dakuten" | "combo-hiragana";

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

	{ kana: "が", romanji: "ga", class: "dakuten" },
	{ kana: "ぎ", romanji: "gi", class: "dakuten" },
	{ kana: "ぐ", romanji: "gu", class: "dakuten" },
	{ kana: "げ", romanji: "ge", class: "dakuten" },
	{ kana: "ご", romanji: "go", class: "dakuten" },

	{ kana: "ざ", romanji: "za", class: "dakuten" },
	{ kana: "じ", romanji: "ji", class: "dakuten" },
	{ kana: "ず", romanji: "zu", class: "dakuten" },
	{ kana: "ぜ", romanji: "ze", class: "dakuten" },
	{ kana: "ぞ", romanji: "zo", class: "dakuten" },

	{ kana: "だ", romanji: "da", class: "dakuten" },
	{ kana: "ぢ", romanji: "di", class: "dakuten" },
	{ kana: "づ", romanji: "du", class: "dakuten" },
	{ kana: "で", romanji: "de", class: "dakuten" },
	{ kana: "ど", romanji: "do", class: "dakuten" },

	{ kana: "ば", romanji: "ba", class: "dakuten" },
	{ kana: "び", romanji: "bi", class: "dakuten" },
	{ kana: "ぶ", romanji: "bu", class: "dakuten" },
	{ kana: "べ", romanji: "be", class: "dakuten" },
	{ kana: "ぼ", romanji: "bo", class: "dakuten" },
	
	{ kana: "ぱ", romanji: "pa", class: "dakuten" },
	{ kana: "ぴ", romanji: "pi", class: "dakuten" },
	{ kana: "ぷ", romanji: "pu", class: "dakuten" },
	{ kana: "ぺ", romanji: "pe", class: "dakuten" },
	{ kana: "ぽ", romanji: "po", class: "dakuten" },

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
];