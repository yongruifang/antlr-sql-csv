import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { SqlBaseLexer, SqlBaseParser, SqlBaseVisitor } from './antlr';



const charStream = CharStreams.fromString('SELECT city, state FROM cities');
const lexer = new SqlBaseLexer(charStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new SqlBaseParser(tokenStream);

// Parse the input, from the 'singleStatement' rule as the beginning
const tree = parser.singleStatement();
// print the parse tree in LISP format
console.log(tree.toStringTree(parser.ruleNames));