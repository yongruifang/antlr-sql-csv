package com.example.parser;

import com.example.antlr4.SqlBaseBaseVisitor;
import com.example.antlr4.SqlBaseParser;
import com.example.tree.basic.Node;
import com.example.tree.detail.Identifier;

public class AstVisitor extends SqlBaseBaseVisitor<Node> {
    @Override
    public Node visitSingleStatement(SqlBaseParser.SingleStatementContext ctx) {
        return visit(ctx.statement());
    }

    @Override
    public Node visitUnquotedIdentifier(SqlBaseParser.UnquotedIdentifierContext ctx) {
        return new Identifier(ctx.getText(), false);
    }
}
