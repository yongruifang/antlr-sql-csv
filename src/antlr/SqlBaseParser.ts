// Generated from c:/Users/Pondsi/Desktop/sandbox/antlr-sql-csv/src/antlr/SqlBase.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { SqlBaseVisitor } from "./SqlBaseVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class SqlBaseParser extends antlr.Parser {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly SELECT = 3;
    public static readonly FROM = 4;
    public static readonly IDENTIFIER = 5;
    public static readonly WS = 6;
    public static readonly UNRECOGNIZED = 7;
    public static readonly DELIMITER = 8;
    public static readonly RULE_singleStatement = 0;
    public static readonly RULE_statement = 1;
    public static readonly RULE_query = 2;
    public static readonly RULE_queryNoWith = 3;
    public static readonly RULE_queryTerm = 4;
    public static readonly RULE_queryPrimary = 5;
    public static readonly RULE_querySpecification = 6;
    public static readonly RULE_selectItem = 7;
    public static readonly RULE_relation = 8;
    public static readonly RULE_expression = 9;
    public static readonly RULE_booleanExpression = 10;
    public static readonly RULE_valueExpression = 11;
    public static readonly RULE_primaryExpression = 12;
    public static readonly RULE_sampledRelation = 13;
    public static readonly RULE_aliasedRelation = 14;
    public static readonly RULE_relationPrimary = 15;
    public static readonly RULE_qualifiedName = 16;
    public static readonly RULE_identifier = 17;

    public static readonly literalNames = [
        null, "','", "'.'", "'SELECT'", "'FROM'"
    ];

    public static readonly symbolicNames = [
        null, null, null, "SELECT", "FROM", "IDENTIFIER", "WS", "UNRECOGNIZED", 
        "DELIMITER"
    ];
    public static readonly ruleNames = [
        "singleStatement", "statement", "query", "queryNoWith", "queryTerm", 
        "queryPrimary", "querySpecification", "selectItem", "relation", 
        "expression", "booleanExpression", "valueExpression", "primaryExpression", 
        "sampledRelation", "aliasedRelation", "relationPrimary", "qualifiedName", 
        "identifier",
    ];

    public get grammarFileName(): string { return "SqlBase.g4"; }
    public get literalNames(): (string | null)[] { return SqlBaseParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return SqlBaseParser.symbolicNames; }
    public get ruleNames(): string[] { return SqlBaseParser.ruleNames; }
    public get serializedATN(): number[] { return SqlBaseParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, SqlBaseParser._ATN, SqlBaseParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public singleStatement(): SingleStatementContext {
        let localContext = new SingleStatementContext(this.context, this.state);
        this.enterRule(localContext, 0, SqlBaseParser.RULE_singleStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 36;
            this.statement();
            this.state = 37;
            this.match(SqlBaseParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 2, SqlBaseParser.RULE_statement);
        try {
            localContext = new StatementDefaultContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 39;
            this.query();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public query(): QueryContext {
        let localContext = new QueryContext(this.context, this.state);
        this.enterRule(localContext, 4, SqlBaseParser.RULE_query);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 41;
            this.queryNoWith();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public queryNoWith(): QueryNoWithContext {
        let localContext = new QueryNoWithContext(this.context, this.state);
        this.enterRule(localContext, 6, SqlBaseParser.RULE_queryNoWith);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 43;
            this.queryTerm();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public queryTerm(): QueryTermContext {
        let localContext = new QueryTermContext(this.context, this.state);
        this.enterRule(localContext, 8, SqlBaseParser.RULE_queryTerm);
        try {
            localContext = new QueryTermDefaultContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 45;
            this.queryPrimary();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public queryPrimary(): QueryPrimaryContext {
        let localContext = new QueryPrimaryContext(this.context, this.state);
        this.enterRule(localContext, 10, SqlBaseParser.RULE_queryPrimary);
        try {
            localContext = new QueryPrimaryDefaultContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 47;
            this.querySpecification();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public querySpecification(): QuerySpecificationContext {
        let localContext = new QuerySpecificationContext(this.context, this.state);
        this.enterRule(localContext, 12, SqlBaseParser.RULE_querySpecification);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 49;
            this.match(SqlBaseParser.SELECT);
            this.state = 50;
            this.selectItem();
            this.state = 55;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 1) {
                {
                {
                this.state = 51;
                this.match(SqlBaseParser.T__0);
                this.state = 52;
                this.selectItem();
                }
                }
                this.state = 57;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 67;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 4) {
                {
                this.state = 58;
                this.match(SqlBaseParser.FROM);
                this.state = 59;
                this.relation();
                this.state = 64;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 1) {
                    {
                    {
                    this.state = 60;
                    this.match(SqlBaseParser.T__0);
                    this.state = 61;
                    this.relation();
                    }
                    }
                    this.state = 66;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public selectItem(): SelectItemContext {
        let localContext = new SelectItemContext(this.context, this.state);
        this.enterRule(localContext, 14, SqlBaseParser.RULE_selectItem);
        try {
            localContext = new SelectSingleContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 69;
            this.expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public relation(): RelationContext {
        let localContext = new RelationContext(this.context, this.state);
        this.enterRule(localContext, 16, SqlBaseParser.RULE_relation);
        try {
            localContext = new RelationDefaultContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 71;
            this.sampledRelation();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expression(): ExpressionContext {
        let localContext = new ExpressionContext(this.context, this.state);
        this.enterRule(localContext, 18, SqlBaseParser.RULE_expression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 73;
            this.booleanExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public booleanExpression(): BooleanExpressionContext {
        let localContext = new BooleanExpressionContext(this.context, this.state);
        this.enterRule(localContext, 20, SqlBaseParser.RULE_booleanExpression);
        try {
            localContext = new PredicatedContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 75;
            this.valueExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public valueExpression(): ValueExpressionContext {
        let localContext = new ValueExpressionContext(this.context, this.state);
        this.enterRule(localContext, 22, SqlBaseParser.RULE_valueExpression);
        try {
            localContext = new ValueExpressionDefaultContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 77;
            this.primaryExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public primaryExpression(): PrimaryExpressionContext {
        let localContext = new PrimaryExpressionContext(this.context, this.state);
        this.enterRule(localContext, 24, SqlBaseParser.RULE_primaryExpression);
        try {
            localContext = new ColumnReferenceContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 79;
            this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sampledRelation(): SampledRelationContext {
        let localContext = new SampledRelationContext(this.context, this.state);
        this.enterRule(localContext, 26, SqlBaseParser.RULE_sampledRelation);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 81;
            this.aliasedRelation();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public aliasedRelation(): AliasedRelationContext {
        let localContext = new AliasedRelationContext(this.context, this.state);
        this.enterRule(localContext, 28, SqlBaseParser.RULE_aliasedRelation);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 83;
            this.relationPrimary();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public relationPrimary(): RelationPrimaryContext {
        let localContext = new RelationPrimaryContext(this.context, this.state);
        this.enterRule(localContext, 30, SqlBaseParser.RULE_relationPrimary);
        try {
            localContext = new TableNameContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 85;
            this.qualifiedName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public qualifiedName(): QualifiedNameContext {
        let localContext = new QualifiedNameContext(this.context, this.state);
        this.enterRule(localContext, 32, SqlBaseParser.RULE_qualifiedName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 87;
            this.identifier();
            this.state = 92;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 2) {
                {
                {
                this.state = 88;
                this.match(SqlBaseParser.T__1);
                this.state = 89;
                this.identifier();
                }
                }
                this.state = 94;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identifier(): IdentifierContext {
        let localContext = new IdentifierContext(this.context, this.state);
        this.enterRule(localContext, 34, SqlBaseParser.RULE_identifier);
        try {
            localContext = new UnquotedIdentifierContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 95;
            this.match(SqlBaseParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public static readonly _serializedATN: number[] = [
        4,1,8,98,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,
        2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,1,0,1,0,1,1,1,1,1,2,
        1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,6,5,6,54,8,6,10,6,12,6,
        57,9,6,1,6,1,6,1,6,1,6,5,6,63,8,6,10,6,12,6,66,9,6,3,6,68,8,6,1,
        7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,
        14,1,14,1,15,1,15,1,16,1,16,1,16,5,16,91,8,16,10,16,12,16,94,9,16,
        1,17,1,17,1,17,0,0,18,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
        32,34,0,0,83,0,36,1,0,0,0,2,39,1,0,0,0,4,41,1,0,0,0,6,43,1,0,0,0,
        8,45,1,0,0,0,10,47,1,0,0,0,12,49,1,0,0,0,14,69,1,0,0,0,16,71,1,0,
        0,0,18,73,1,0,0,0,20,75,1,0,0,0,22,77,1,0,0,0,24,79,1,0,0,0,26,81,
        1,0,0,0,28,83,1,0,0,0,30,85,1,0,0,0,32,87,1,0,0,0,34,95,1,0,0,0,
        36,37,3,2,1,0,37,38,5,0,0,1,38,1,1,0,0,0,39,40,3,4,2,0,40,3,1,0,
        0,0,41,42,3,6,3,0,42,5,1,0,0,0,43,44,3,8,4,0,44,7,1,0,0,0,45,46,
        3,10,5,0,46,9,1,0,0,0,47,48,3,12,6,0,48,11,1,0,0,0,49,50,5,3,0,0,
        50,55,3,14,7,0,51,52,5,1,0,0,52,54,3,14,7,0,53,51,1,0,0,0,54,57,
        1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,67,1,0,0,0,57,55,1,0,0,0,
        58,59,5,4,0,0,59,64,3,16,8,0,60,61,5,1,0,0,61,63,3,16,8,0,62,60,
        1,0,0,0,63,66,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,68,1,0,0,0,
        66,64,1,0,0,0,67,58,1,0,0,0,67,68,1,0,0,0,68,13,1,0,0,0,69,70,3,
        18,9,0,70,15,1,0,0,0,71,72,3,26,13,0,72,17,1,0,0,0,73,74,3,20,10,
        0,74,19,1,0,0,0,75,76,3,22,11,0,76,21,1,0,0,0,77,78,3,24,12,0,78,
        23,1,0,0,0,79,80,3,34,17,0,80,25,1,0,0,0,81,82,3,28,14,0,82,27,1,
        0,0,0,83,84,3,30,15,0,84,29,1,0,0,0,85,86,3,32,16,0,86,31,1,0,0,
        0,87,92,3,34,17,0,88,89,5,2,0,0,89,91,3,34,17,0,90,88,1,0,0,0,91,
        94,1,0,0,0,92,90,1,0,0,0,92,93,1,0,0,0,93,33,1,0,0,0,94,92,1,0,0,
        0,95,96,5,5,0,0,96,35,1,0,0,0,4,55,64,67,92
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!SqlBaseParser.__ATN) {
            SqlBaseParser.__ATN = new antlr.ATNDeserializer().deserialize(SqlBaseParser._serializedATN);
        }

        return SqlBaseParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(SqlBaseParser.literalNames, SqlBaseParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return SqlBaseParser.vocabulary;
    }

    private static readonly decisionsToDFA = SqlBaseParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class SingleStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public statement(): StatementContext {
        return this.getRuleContext(0, StatementContext)!;
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(SqlBaseParser.EOF, 0)!;
    }
    public override get ruleIndex(): number {
        return SqlBaseParser.RULE_singleStatement;
    }
    public override accept<Result>(visitor: SqlBaseVisitor<Result>): Result | null {
        if (visitor.visitSingleStatement) {
            return visitor.visitSingleStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SqlBaseParser.RULE_statement;
    }
    public override copyFrom(ctx: StatementContext): void {
        super.copyFrom(ctx);
    }
}
export class StatementDefaultContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public query(): QueryContext {
        return this.getRuleContext(0, QueryContext)!;
    }
    public override accept<Result>(visitor: SqlBaseVisitor<Result>): Result | null {
        if (visitor.visitStatementDefault) {
            return visitor.visitStatementDefault(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QueryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public queryNoWith(): QueryNoWithContext {
        return this.getRuleContext(0, QueryNoWithContext)!;
    }
    public override get ruleIndex(): number {
        return SqlBaseParser.RULE_query;
    }
    public override accept<Result>(visitor: SqlBaseVisitor<Result>): Result | null {
        if (visitor.visitQuery) {
            return visitor.visitQuery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QueryNoWithContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public queryTerm(): QueryTermContext {
        return this.getRuleContext(0, QueryTermContext)!;
    }
    public override get ruleIndex(): number {
        return SqlBaseParser.RULE_queryNoWith;
    }
    public override accept<Result>(visitor: SqlBaseVisitor<Result>): Result | null {
        if (visitor.visitQueryNoWith) {
            return visitor.visitQueryNoWith(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QueryTermContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SqlBaseParser.RULE_queryTerm;
    }
    public override copyFrom(ctx: QueryTermContext): void {
        super.copyFrom(ctx);
    }
}
export class QueryTermDefaultContext extends QueryTermContext {
    public constructor(ctx: QueryTermContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public queryPrimary(): QueryPrimaryContext {
        return this.getRuleContext(0, QueryPrimaryContext)!;
    }
    public override accept<Result>(visitor: SqlBaseVisitor<Result>): Result | null {
        if (visitor.visitQueryTermDefault) {
            return visitor.visitQueryTermDefault(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QueryPrimaryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SqlBaseParser.RULE_queryPrimary;
    }
    public override copyFrom(ctx: QueryPrimaryContext): void {
        super.copyFrom(ctx);
    }
}
export class QueryPrimaryDefaultContext extends QueryPrimaryContext {
    public constructor(ctx: QueryPrimaryContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public querySpecification(): QuerySpecificationContext {
        return this.getRuleContext(0, QuerySpecificationContext)!;
    }
    public override accept<Result>(visitor: SqlBaseVisitor<Result>): Result | null {
        if (visitor.visitQueryPrimaryDefault) {
            return visitor.visitQueryPrimaryDefault(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QuerySpecificationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SELECT(): antlr.TerminalNode {
        return this.getToken(SqlBaseParser.SELECT, 0)!;
    }
    public selectItem(): SelectItemContext[];
    public selectItem(i: number): SelectItemContext | null;
    public selectItem(i?: number): SelectItemContext[] | SelectItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SelectItemContext);
        }

        return this.getRuleContext(i, SelectItemContext);
    }
    public FROM(): antlr.TerminalNode | null {
        return this.getToken(SqlBaseParser.FROM, 0);
    }
    public relation(): RelationContext[];
    public relation(i: number): RelationContext | null;
    public relation(i?: number): RelationContext[] | RelationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RelationContext);
        }

        return this.getRuleContext(i, RelationContext);
    }
    public override get ruleIndex(): number {
        return SqlBaseParser.RULE_querySpecification;
    }
    public override accept<Result>(visitor: SqlBaseVisitor<Result>): Result | null {
        if (visitor.visitQuerySpecification) {
            return visitor.visitQuerySpecification(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SelectItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SqlBaseParser.RULE_selectItem;
    }
    public override copyFrom(ctx: SelectItemContext): void {
        super.copyFrom(ctx);
    }
}
export class SelectSingleContext extends SelectItemContext {
    public constructor(ctx: SelectItemContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override accept<Result>(visitor: SqlBaseVisitor<Result>): Result | null {
        if (visitor.visitSelectSingle) {
            return visitor.visitSelectSingle(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RelationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SqlBaseParser.RULE_relation;
    }
    public override copyFrom(ctx: RelationContext): void {
        super.copyFrom(ctx);
    }
}
export class RelationDefaultContext extends RelationContext {
    public constructor(ctx: RelationContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public sampledRelation(): SampledRelationContext {
        return this.getRuleContext(0, SampledRelationContext)!;
    }
    public override accept<Result>(visitor: SqlBaseVisitor<Result>): Result | null {
        if (visitor.visitRelationDefault) {
            return visitor.visitRelationDefault(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getRuleContext(0, BooleanExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return SqlBaseParser.RULE_expression;
    }
    public override accept<Result>(visitor: SqlBaseVisitor<Result>): Result | null {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BooleanExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SqlBaseParser.RULE_booleanExpression;
    }
    public override copyFrom(ctx: BooleanExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class PredicatedContext extends BooleanExpressionContext {
    public constructor(ctx: BooleanExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public override accept<Result>(visitor: SqlBaseVisitor<Result>): Result | null {
        if (visitor.visitPredicated) {
            return visitor.visitPredicated(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ValueExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SqlBaseParser.RULE_valueExpression;
    }
    public override copyFrom(ctx: ValueExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class ValueExpressionDefaultContext extends ValueExpressionContext {
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public primaryExpression(): PrimaryExpressionContext {
        return this.getRuleContext(0, PrimaryExpressionContext)!;
    }
    public override accept<Result>(visitor: SqlBaseVisitor<Result>): Result | null {
        if (visitor.visitValueExpressionDefault) {
            return visitor.visitValueExpressionDefault(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrimaryExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SqlBaseParser.RULE_primaryExpression;
    }
    public override copyFrom(ctx: PrimaryExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class ColumnReferenceContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override accept<Result>(visitor: SqlBaseVisitor<Result>): Result | null {
        if (visitor.visitColumnReference) {
            return visitor.visitColumnReference(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SampledRelationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public aliasedRelation(): AliasedRelationContext {
        return this.getRuleContext(0, AliasedRelationContext)!;
    }
    public override get ruleIndex(): number {
        return SqlBaseParser.RULE_sampledRelation;
    }
    public override accept<Result>(visitor: SqlBaseVisitor<Result>): Result | null {
        if (visitor.visitSampledRelation) {
            return visitor.visitSampledRelation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AliasedRelationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public relationPrimary(): RelationPrimaryContext {
        return this.getRuleContext(0, RelationPrimaryContext)!;
    }
    public override get ruleIndex(): number {
        return SqlBaseParser.RULE_aliasedRelation;
    }
    public override accept<Result>(visitor: SqlBaseVisitor<Result>): Result | null {
        if (visitor.visitAliasedRelation) {
            return visitor.visitAliasedRelation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RelationPrimaryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SqlBaseParser.RULE_relationPrimary;
    }
    public override copyFrom(ctx: RelationPrimaryContext): void {
        super.copyFrom(ctx);
    }
}
export class TableNameContext extends RelationPrimaryContext {
    public constructor(ctx: RelationPrimaryContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public override accept<Result>(visitor: SqlBaseVisitor<Result>): Result | null {
        if (visitor.visitTableName) {
            return visitor.visitTableName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QualifiedNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public override get ruleIndex(): number {
        return SqlBaseParser.RULE_qualifiedName;
    }
    public override accept<Result>(visitor: SqlBaseVisitor<Result>): Result | null {
        if (visitor.visitQualifiedName) {
            return visitor.visitQualifiedName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SqlBaseParser.RULE_identifier;
    }
    public override copyFrom(ctx: IdentifierContext): void {
        super.copyFrom(ctx);
    }
}
export class UnquotedIdentifierContext extends IdentifierContext {
    public constructor(ctx: IdentifierContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(SqlBaseParser.IDENTIFIER, 0)!;
    }
    public override accept<Result>(visitor: SqlBaseVisitor<Result>): Result | null {
        if (visitor.visitUnquotedIdentifier) {
            return visitor.visitUnquotedIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
