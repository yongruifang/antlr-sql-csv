package com.example.visit;

import java.util.List;
import static java.util.stream.Collectors.toList;

import org.antlr.v4.runtime.ParserRuleContext;

import com.example.antlr4.SqlBaseBaseVisitor;
import com.example.antlr4.SqlBaseParser;
import com.example.antlr4.SqlBaseParser.RelationContext;
import com.example.antlr4.SqlBaseParser.SelectItemContext;
import com.example.tree.basic.Node;
import com.example.tree.detail.Identifier;
import com.example.tree.detail.QuerySpecification;

public class AstVisitor extends SqlBaseBaseVisitor<Node> {
    @Override
    public Node visitSingleStatement(SqlBaseParser.SingleStatementContext ctx) {
        return visit(ctx.statement());
    }

    @Override
    public Node visitUnquotedIdentifier(SqlBaseParser.UnquotedIdentifierContext ctx) {
        return new Identifier(ctx.getText(), false);
    }

    @Override
    public Node visitQuerySpecification(SqlBaseParser.QuerySpecificationContext ctx) {
        // ctx.children 分为 selectItem组 和 relation组
        List<SelectItemContext> selectItemsCtx = ctx.selectItem();
        List<RelationContext> relationCtx = ctx.relation();
        // 1. 处理 selectItem组
        List<Identifier> selectItems = visitChildren(selectItemsCtx, Identifier.class);
        // 2. 处理 relation组
        List<Identifier> relations = visitChildren(relationCtx, Identifier.class);
        // 3. 组合成一个Node
        QuerySpecification querySpecification = new QuerySpecification(selectItems, relations);
        return querySpecification;
    }

    // 自己实现一个visit方法，用于遍历节点的同类子节点
    private <T> List<T> visitChildren(List<? extends ParserRuleContext> ctxs, Class<T> clazz) {
        return ctxs.stream().map(this::visit).filter(clazz::isInstance).map(clazz::cast).collect(toList());
    }
}
