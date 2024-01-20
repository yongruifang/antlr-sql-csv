// Generated from src/antlr/SqlBase.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class SqlBaseLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly SELECT = 3;
	public static readonly FROM = 4;
	public static readonly IDENTIFIER = 5;
	public static readonly WS = 6;
	public static readonly UNRECOGNIZED = 7;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "SELECT", "FROM", "DIGIT", "LETTER", "IDENTIFIER", "WS", 
		"UNRECOGNIZED",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "','", "'.'", "'SELECT'", "'FROM'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "SELECT", "FROM", "IDENTIFIER", "WS", 
		"UNRECOGNIZED",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SqlBaseLexer._LITERAL_NAMES, SqlBaseLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SqlBaseLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(SqlBaseLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "SqlBase.g4"; }

	// @Override
	public get ruleNames(): string[] { return SqlBaseLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return SqlBaseLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return SqlBaseLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return SqlBaseLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\t?\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x03\x03\x03" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x05\x07)\n\x07\x03\b" +
		"\x03\b\x05\b-\n\b\x03\b\x03\b\x03\b\x07\b2\n\b\f\b\x0E\b5\v\b\x03\t\x06" +
		"\t8\n\t\r\t\x0E\t9\x03\t\x03\t\x03\n\x03\n\x02\x02\x02\v\x03\x02\x03\x05" +
		"\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x02\r\x02\x02\x0F\x02\x07\x11\x02" +
		"\b\x13\x02\t\x03\x02\x06\x03\x022;\x04\x02C\\c|\x05\x02<<BBaa\x05\x02" +
		"\v\f\x0F\x0F\"\"\x02A\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02" +
		"\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02" +
		"\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x03\x15\x03\x02\x02\x02" +
		"\x05\x17\x03\x02\x02\x02\x07\x19\x03\x02\x02\x02\t \x03\x02\x02\x02\v" +
		"%\x03\x02\x02\x02\r(\x03\x02\x02\x02\x0F,\x03\x02\x02\x02\x117\x03\x02" +
		"\x02\x02\x13=\x03\x02\x02\x02\x15\x16\x07.\x02\x02\x16\x04\x03\x02\x02" +
		"\x02\x17\x18\x070\x02\x02\x18\x06\x03\x02\x02\x02\x19\x1A\x07U\x02\x02" +
		"\x1A\x1B\x07G\x02\x02\x1B\x1C\x07N\x02\x02\x1C\x1D\x07G\x02\x02\x1D\x1E" +
		"\x07E\x02\x02\x1E\x1F\x07V\x02\x02\x1F\b\x03\x02\x02\x02 !\x07H\x02\x02" +
		"!\"\x07T\x02\x02\"#\x07Q\x02\x02#$\x07O\x02\x02$\n\x03\x02\x02\x02%&\t" +
		"\x02\x02\x02&\f\x03\x02\x02\x02\')\t\x03\x02\x02(\'\x03\x02\x02\x02)\x0E" +
		"\x03\x02\x02\x02*-\x05\r\x07\x02+-\x07a\x02\x02,*\x03\x02\x02\x02,+\x03" +
		"\x02\x02\x02-3\x03\x02\x02\x02.2\x05\r\x07\x02/2\x05\v\x06\x0202\t\x04" +
		"\x02\x021.\x03\x02\x02\x021/\x03\x02\x02\x0210\x03\x02\x02\x0225\x03\x02" +
		"\x02\x0231\x03\x02\x02\x0234\x03\x02\x02\x024\x10\x03\x02\x02\x0253\x03" +
		"\x02\x02\x0268\t\x05\x02\x0276\x03\x02\x02\x0289\x03\x02\x02\x0297\x03" +
		"\x02\x02\x029:\x03\x02\x02\x02:;\x03\x02\x02\x02;<\b\t\x02\x02<\x12\x03" +
		"\x02\x02\x02=>\v\x02\x02\x02>\x14\x03\x02\x02\x02\b\x02(,139\x03\x02\x03" +
		"\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SqlBaseLexer.__ATN) {
			SqlBaseLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SqlBaseLexer._serializedATN));
		}

		return SqlBaseLexer.__ATN;
	}

}

