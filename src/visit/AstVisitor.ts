import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SqlBaseVisitor } from '../antlr';
import { ColumnReferenceContext } from '../antlr/SqlBaseParser';


export class AstVisitor extends AbstractParseTreeVisitor<object> implements SqlBaseVisitor<object>{
    protected defaultResult(): object {
        return {
            type: 'defaultResult'
        };
    }
    // 自底向上，从unquotedIdentifier开始
    visitUnquotedIdentifier(ctx: any) {
        return {
            type: 'Identifier',
            name: ctx.text
        }
    }
    // querySpecification
    visitQuerySpecification(ctx: any) {
        // 分出selectItem组成的数组和relation组成的数组
        const selectItems = ctx.selectItem();
        const relations = ctx.relation();
        // 从selectItem中获取identifier
        const selectList = selectItems.map((selectItem: any) => {
            return this.visit(selectItem);
        });
        // √ console.log('selectList', selectList)
        // 从relation中获取identifier
        const fromClause = relations.map((relation: any) => {
            return this.visit(relation);
        });
        // √ console.log('fromClause', fromClause)
        return {
            type: 'QuerySpecification',
            queryFileds: selectList,
            tables: fromClause
        }
    }
    visitSingleStatement(ctx: any) {
        // console.log('single-statement', ctx.text)
        // console.table(ctx.children)
        const obj = super.visit(ctx.children[0]); // important
        // console.log('single-statement', obj)
        return obj;
    }
    visitStatement(ctx: any) {
        return super.visitChildren(ctx);
    }
    visitStatementDefault(ctx: any) {
        // console.log('statement-default', ctx.text)
        const obj = super.visitChildren(ctx);
        // console.log('statement-default', obj)
        return obj;
    }
    visitQuery(ctx: any) {
        const obj = super.visitChildren(ctx);
        //√ console.log('query', obj)
        return obj;
    }
    visitQueryNoWith(ctx: any) {
        const obj = super.visitChildren(ctx);
        // console.log('query-no-with', obj)
        return obj;
    }
    visitQueryTerm(ctx: any) {
        return super.visitChildren(ctx);
    }
    visitQueryTermDefault(ctx: any) {
        return super.visitChildren(ctx);
    }
    visitQueryPrimary(ctx: any) {
        return super.visitChildren(ctx);
    }
    visitQueryPrimaryDefault(ctx: any) {
        const obj = super.visitChildren(ctx);
        // √ console.log('query-primary-default', obj)
        return obj;
    }
    visitSelectItem(ctx: any) {
        return super.visitChildren(ctx);
    }
    visitSelectSingle(ctx: any) {
        return super.visitChildren(ctx);
    }
    visitExpression(ctx: any) {
        return super.visitChildren(ctx);
    }
    visitBooleanExpression(ctx: any) {
        return super.visitChildren(ctx);
    }
    visitPredicated(ctx: any) {
        return super.visitChildren(ctx);
    }
    visitValueExpression(ctx: any) {
        return super.visitChildren(ctx);
    }
    visitValueExpressionDefault(ctx: any) {
        const obj = super.visitChildren(ctx);
        // console.log('value-expression-default', obj)
        // console.table(obj)
        return obj;
    }
    visitPrimaryExpression(ctx: any) {
        return super.visitChildren(ctx);
    }
    visitColumnReference(ctx: any) {
        const obj = super.visitChildren(ctx);
        // console.log('column-reference children', obj)
        // console.table(obj)
        return obj;
    }
    visitIdentifier(ctx: any) {
        return super.visitChildren(ctx);
    }
    visitRelation(ctx: any) {
        return super.visitChildren(ctx);
    }
    visitRelationDefault(ctx: any) {
        return super.visitChildren(ctx);
    }
    visitSampledRelation(ctx: any) {
        return super.visitChildren(ctx);
    }
    visitAliasedRelation(ctx: any) {
        return super.visitChildren(ctx);
    }
    visitRelationPrimary(ctx: any) {
        return super.visitChildren(ctx);
    }
    visitTableName(ctx: any) {
        return super.visitChildren(ctx);
    }
    visitQualifiedName(ctx: any) {
        return super.visitChildren(ctx);
    }
}