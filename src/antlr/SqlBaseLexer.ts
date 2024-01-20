// Generated from c:/Users/Pondsi/Desktop/sandbox/antlr-sql-csv/src/antlr/SqlBase.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class SqlBaseLexer extends antlr.Lexer {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly SELECT = 3;
    public static readonly FROM = 4;
    public static readonly IDENTIFIER = 5;
    public static readonly WS = 6;
    public static readonly UNRECOGNIZED = 7;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "','", "'.'", "'SELECT'", "'FROM'"
    ];

    public static readonly symbolicNames = [
        null, null, null, "SELECT", "FROM", "IDENTIFIER", "WS", "UNRECOGNIZED"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "T__0", "T__1", "SELECT", "FROM", "DIGIT", "LETTER", "IDENTIFIER", 
        "WS", "UNRECOGNIZED",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, SqlBaseLexer._ATN, SqlBaseLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "SqlBase.g4"; }

    public get literalNames(): (string | null)[] { return SqlBaseLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return SqlBaseLexer.symbolicNames; }
    public get ruleNames(): string[] { return SqlBaseLexer.ruleNames; }

    public get serializedATN(): number[] { return SqlBaseLexer._serializedATN; }

    public get channelNames(): string[] { return SqlBaseLexer.channelNames; }

    public get modeNames(): string[] { return SqlBaseLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,7,61,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,
        6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,5,3,5,39,8,5,1,6,1,6,3,6,43,8,6,
        1,6,1,6,1,6,5,6,48,8,6,10,6,12,6,51,9,6,1,7,4,7,54,8,7,11,7,12,7,
        55,1,7,1,7,1,8,1,8,0,0,9,1,1,3,2,5,3,7,4,9,0,11,0,13,5,15,6,17,7,
        1,0,4,1,0,48,57,2,0,65,90,97,122,3,0,58,58,64,64,95,95,3,0,9,10,
        13,13,32,32,63,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,
        13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,1,19,1,0,0,0,3,21,1,0,0,0,5,
        23,1,0,0,0,7,30,1,0,0,0,9,35,1,0,0,0,11,38,1,0,0,0,13,42,1,0,0,0,
        15,53,1,0,0,0,17,59,1,0,0,0,19,20,5,44,0,0,20,2,1,0,0,0,21,22,5,
        46,0,0,22,4,1,0,0,0,23,24,5,83,0,0,24,25,5,69,0,0,25,26,5,76,0,0,
        26,27,5,69,0,0,27,28,5,67,0,0,28,29,5,84,0,0,29,6,1,0,0,0,30,31,
        5,70,0,0,31,32,5,82,0,0,32,33,5,79,0,0,33,34,5,77,0,0,34,8,1,0,0,
        0,35,36,7,0,0,0,36,10,1,0,0,0,37,39,7,1,0,0,38,37,1,0,0,0,39,12,
        1,0,0,0,40,43,3,11,5,0,41,43,5,95,0,0,42,40,1,0,0,0,42,41,1,0,0,
        0,43,49,1,0,0,0,44,48,3,11,5,0,45,48,3,9,4,0,46,48,7,2,0,0,47,44,
        1,0,0,0,47,45,1,0,0,0,47,46,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,
        49,50,1,0,0,0,50,14,1,0,0,0,51,49,1,0,0,0,52,54,7,3,0,0,53,52,1,
        0,0,0,54,55,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,57,1,0,0,0,57,
        58,6,7,0,0,58,16,1,0,0,0,59,60,9,0,0,0,60,18,1,0,0,0,6,0,38,42,47,
        49,55,1,0,1,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!SqlBaseLexer.__ATN) {
            SqlBaseLexer.__ATN = new antlr.ATNDeserializer().deserialize(SqlBaseLexer._serializedATN);
        }

        return SqlBaseLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(SqlBaseLexer.literalNames, SqlBaseLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return SqlBaseLexer.vocabulary;
    }

    private static readonly decisionsToDFA = SqlBaseLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}