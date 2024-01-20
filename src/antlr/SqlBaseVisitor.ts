// Generated from c:/Users/Pondsi/Desktop/sandbox/antlr-sql-csv/src/antlr/SqlBase.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { SingleStatementContext } from "./SqlBaseParser.js";
import { StatementDefaultContext } from "./SqlBaseParser.js";
import { QueryContext } from "./SqlBaseParser.js";
import { QueryNoWithContext } from "./SqlBaseParser.js";
import { QueryTermDefaultContext } from "./SqlBaseParser.js";
import { QueryPrimaryDefaultContext } from "./SqlBaseParser.js";
import { QuerySpecificationContext } from "./SqlBaseParser.js";
import { SelectSingleContext } from "./SqlBaseParser.js";
import { RelationDefaultContext } from "./SqlBaseParser.js";
import { ExpressionContext } from "./SqlBaseParser.js";
import { PredicatedContext } from "./SqlBaseParser.js";
import { ValueExpressionDefaultContext } from "./SqlBaseParser.js";
import { ColumnReferenceContext } from "./SqlBaseParser.js";
import { SampledRelationContext } from "./SqlBaseParser.js";
import { AliasedRelationContext } from "./SqlBaseParser.js";
import { TableNameContext } from "./SqlBaseParser.js";
import { QualifiedNameContext } from "./SqlBaseParser.js";
import { UnquotedIdentifierContext } from "./SqlBaseParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SqlBaseParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class SqlBaseVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `SqlBaseParser.singleStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleStatement?: (ctx: SingleStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `statementDefault`
     * labeled alternative in `SqlBaseParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatementDefault?: (ctx: StatementDefaultContext) => Result;
    /**
     * Visit a parse tree produced by `SqlBaseParser.query`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuery?: (ctx: QueryContext) => Result;
    /**
     * Visit a parse tree produced by `SqlBaseParser.queryNoWith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryNoWith?: (ctx: QueryNoWithContext) => Result;
    /**
     * Visit a parse tree produced by the `queryTermDefault`
     * labeled alternative in `SqlBaseParser.queryTerm`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryTermDefault?: (ctx: QueryTermDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `queryPrimaryDefault`
     * labeled alternative in `SqlBaseParser.queryPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => Result;
    /**
     * Visit a parse tree produced by `SqlBaseParser.querySpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuerySpecification?: (ctx: QuerySpecificationContext) => Result;
    /**
     * Visit a parse tree produced by the `selectSingle`
     * labeled alternative in `SqlBaseParser.selectItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectSingle?: (ctx: SelectSingleContext) => Result;
    /**
     * Visit a parse tree produced by the `relationDefault`
     * labeled alternative in `SqlBaseParser.relation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelationDefault?: (ctx: RelationDefaultContext) => Result;
    /**
     * Visit a parse tree produced by `SqlBaseParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `predicated`
     * labeled alternative in `SqlBaseParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicated?: (ctx: PredicatedContext) => Result;
    /**
     * Visit a parse tree produced by the `valueExpressionDefault`
     * labeled alternative in `SqlBaseParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `columnReference`
     * labeled alternative in `SqlBaseParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnReference?: (ctx: ColumnReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `SqlBaseParser.sampledRelation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSampledRelation?: (ctx: SampledRelationContext) => Result;
    /**
     * Visit a parse tree produced by `SqlBaseParser.aliasedRelation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAliasedRelation?: (ctx: AliasedRelationContext) => Result;
    /**
     * Visit a parse tree produced by the `tableName`
     * labeled alternative in `SqlBaseParser.relationPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableName?: (ctx: TableNameContext) => Result;
    /**
     * Visit a parse tree produced by `SqlBaseParser.qualifiedName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedName?: (ctx: QualifiedNameContext) => Result;
    /**
     * Visit a parse tree produced by the `unquotedIdentifier`
     * labeled alternative in `SqlBaseParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => Result;
}

