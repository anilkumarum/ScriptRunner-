export const CharCode = {
	Tab: "\t",
	LineBreak: "\n",
	Space: " ",
	Asterisk: "*",
	Backtick: "`",
	Colon: ":",
	Comma: ";",
	Dot: ".",
	Dollar: "$",
	SingleQuote: "'",
	DoubleQuote: '"',
	BackSlash: "\\",
	Slash: "/",
	OpeningParentheses: "(",
	ClosingParentheses: ")",
	OpeningCurlyBracket: "{",
	ClosingCurlyBracket: "}",
	OpeningSqrBracket: "[",
	ClosingSqrBracket: "]",
};

export const ReservedWords = new Set([
	"async",
	"await",
	"break",
	"case",
	"catch",
	"class",
	"const",
	"constructor",
	"continue",
	"debugger",
	"default",
	"delete",
	"do",
	"else",
	"export",
	"extends",
	"false",
	"finally",
	"for",
	"function",
	"from",
	"if",
	"import",
	"in",
	"instanceof",
	"let",
	"new",
	"null",
	"return",
	"super",
	"switch",
	"throw",
	"true",
	"try",
	"typeof",
	"var",
	"void",
	"while",
	"with",
]);

export const globalKeys = new Set([
	"addEventListener",
	"alert",
	"atob",
	"blur",
	"btoa",
	"captureEvents",
	"clearInterval",
	"clearTimeout",
	"close",
	"confirm",
	"fetch",
	"fetchLater",
	"focus",
	"find",
	"getComputedStyle",
	"getSelection",
	"moveBy",
	"moveTo",
	"open",
	"prompt",
	"postMessage",
	"print",
	"resizeBy",
	"resizeTo",
	"requestIdleCallback",
	"requestAnimationFrame",
	"scrollTo",
	"scrollBy",
	"stop",
	"setTimeout",
	"setTimeout",
	"structuredClone",
	"showDirectoryPicker",
	"showOpenFilePicker",
]);

export const globalObjNames = new Set([
	"chrome",
	"cookieStore",
	"customElements",
	"document",
	"frameElement",
	"globalThis",
	"history",
	"innerWidth",
	"innerHeight",
	"menubar",
	"navigation",
	"navigator",
	"localStorage",
	"location",
	"origin",
	"outerHeight",
	"outerWidth",
	"screenLeft",
	"screenTop",
	"screenX",
	"screenY",
	"screen",
	"self",
	"sessionStorage",
	"this",
	"toolbar",
	"top",
	"visualViewport",
	"window",
]);

export const operators = new Set([
	"%",
	"^",
	"&",
	"*",
	"-",
	"+",
	"=",
	"=",
	"=",
	"|",
	"||",
	"&&",
	"??",
	"||=",
	"&&=",
	"??=",
	"?",
	"+=",
	"-=",
	"*=",
	"/+",
	"%=",
	"**=",
	"<<=",
	">>=",
	">>>=",
	"&=",
	"^=",
	"|=",
]);

export const ClassNames = {
	ImmutableVar: "immutable-var",
	Comment: "comment",
	FuncName: "func-name",
	GlobalKey: "global-key",
	ObjName: "obj-name",
	PropChain: "prop-chain",
	PropKey: "prop-key",
	Operator: "operator",
	Reserved: "reserved",
	String: "string",
	MutableVar: "mutable-var",
};

export const State = {
	InPropChain: "prop-key",
	InFuncParam: "mutable-var",
};

export const CssClasses = {
	[ClassNames.Reserved]: ReservedWords,
	[ClassNames.Operator]: operators,
	[ClassNames.GlobalKey]: globalKeys,
	[ClassNames.ObjName]: globalObjNames,
};

export const PrevWordClasses = {
	let: ClassNames.MutableVar,
	var: ClassNames.MutableVar,
	import: ClassNames.MutableVar,
	class: ClassNames.ImmutableVar,
	const: ClassNames.ImmutableVar,
};

export const TwinChars = {
	"(": ")",
	"{": "}",
	"[": "]",
	"<": ">",
	"'": "'",
	'"': '"',
	"`": "`",
};

export const Keys = {
	ArrowUp: "ArrowUp",
	ArrowDown: "ArrowDown",
	Backspace: "Backspace",
	Delete: "Delete",
	KeyB: "KeyB",
	KeyS: "KeyS",
	KeyT: "KeyT",
	Slash: "Slash",
};
