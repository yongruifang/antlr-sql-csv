// Generated from c:/Users/Pondsi/Desktop/sandbox/antlr-sql-csv/demo/src/main/java/com/example/antlr4/SqlBase.g4 by ANTLR 4.13.1
package com.example.antlr4;
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class SqlBaseLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, SELECT=3, FROM=4, IDENTIFIER=5, WS=6, UNRECOGNIZED=7;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "SELECT", "FROM", "DIGIT", "LETTER", "IDENTIFIER", "WS", 
			"UNRECOGNIZED"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "','", "'.'", "'SELECT'", "'FROM'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, "SELECT", "FROM", "IDENTIFIER", "WS", "UNRECOGNIZED"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public SqlBaseLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "SqlBase.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0007=\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0001\u0000\u0001\u0000\u0001\u0001\u0001"+
		"\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0003\u0005\'\b\u0005\u0001"+
		"\u0006\u0001\u0006\u0003\u0006+\b\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0005\u00060\b\u0006\n\u0006\f\u00063\t\u0006\u0001\u0007\u0004"+
		"\u00076\b\u0007\u000b\u0007\f\u00077\u0001\u0007\u0001\u0007\u0001\b\u0001"+
		"\b\u0000\u0000\t\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0000"+
		"\u000b\u0000\r\u0005\u000f\u0006\u0011\u0007\u0001\u0000\u0004\u0001\u0000"+
		"09\u0002\u0000AZaz\u0003\u0000::@@__\u0003\u0000\t\n\r\r  ?\u0000\u0001"+
		"\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005"+
		"\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\r\u0001"+
		"\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001"+
		"\u0000\u0000\u0000\u0001\u0013\u0001\u0000\u0000\u0000\u0003\u0015\u0001"+
		"\u0000\u0000\u0000\u0005\u0017\u0001\u0000\u0000\u0000\u0007\u001e\u0001"+
		"\u0000\u0000\u0000\t#\u0001\u0000\u0000\u0000\u000b&\u0001\u0000\u0000"+
		"\u0000\r*\u0001\u0000\u0000\u0000\u000f5\u0001\u0000\u0000\u0000\u0011"+
		";\u0001\u0000\u0000\u0000\u0013\u0014\u0005,\u0000\u0000\u0014\u0002\u0001"+
		"\u0000\u0000\u0000\u0015\u0016\u0005.\u0000\u0000\u0016\u0004\u0001\u0000"+
		"\u0000\u0000\u0017\u0018\u0005S\u0000\u0000\u0018\u0019\u0005E\u0000\u0000"+
		"\u0019\u001a\u0005L\u0000\u0000\u001a\u001b\u0005E\u0000\u0000\u001b\u001c"+
		"\u0005C\u0000\u0000\u001c\u001d\u0005T\u0000\u0000\u001d\u0006\u0001\u0000"+
		"\u0000\u0000\u001e\u001f\u0005F\u0000\u0000\u001f \u0005R\u0000\u0000"+
		" !\u0005O\u0000\u0000!\"\u0005M\u0000\u0000\"\b\u0001\u0000\u0000\u0000"+
		"#$\u0007\u0000\u0000\u0000$\n\u0001\u0000\u0000\u0000%\'\u0007\u0001\u0000"+
		"\u0000&%\u0001\u0000\u0000\u0000\'\f\u0001\u0000\u0000\u0000(+\u0003\u000b"+
		"\u0005\u0000)+\u0005_\u0000\u0000*(\u0001\u0000\u0000\u0000*)\u0001\u0000"+
		"\u0000\u0000+1\u0001\u0000\u0000\u0000,0\u0003\u000b\u0005\u0000-0\u0003"+
		"\t\u0004\u0000.0\u0007\u0002\u0000\u0000/,\u0001\u0000\u0000\u0000/-\u0001"+
		"\u0000\u0000\u0000/.\u0001\u0000\u0000\u000003\u0001\u0000\u0000\u0000"+
		"1/\u0001\u0000\u0000\u000012\u0001\u0000\u0000\u00002\u000e\u0001\u0000"+
		"\u0000\u000031\u0001\u0000\u0000\u000046\u0007\u0003\u0000\u000054\u0001"+
		"\u0000\u0000\u000067\u0001\u0000\u0000\u000075\u0001\u0000\u0000\u0000"+
		"78\u0001\u0000\u0000\u000089\u0001\u0000\u0000\u00009:\u0006\u0007\u0000"+
		"\u0000:\u0010\u0001\u0000\u0000\u0000;<\t\u0000\u0000\u0000<\u0012\u0001"+
		"\u0000\u0000\u0000\u0006\u0000&*/17\u0001\u0000\u0001\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}