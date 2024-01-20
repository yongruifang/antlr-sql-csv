package com.example;

import java.io.*;
import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.ParserRuleContext;

import com.example.antlr4.SqlBaseLexer;
import com.example.antlr4.SqlBaseParser;
import com.example.tree.basic.Node;
import com.example.visit.AstVisitor;

class App {
    public static void main(String[] args) throws IOException {
        /*
         * System.out.print(">> "); // 打印提示符
         * InputStream input = System.in; // 标准输入流
         * BufferedReader reader = new BufferedReader(new InputStreamReader(input));
         * String sql = reader.readLine(); // 读取一行输入
         */
        String sql = "SELECT City, State FROM cities";
        // 解析输入的sql语句
        // 1. 生成语法树
        SqlBaseLexer lexer = new SqlBaseLexer(CharStreams.fromString(sql));
        CommonTokenStream tokenStream = new CommonTokenStream(lexer);
        SqlBaseParser parser = new SqlBaseParser(tokenStream);
        ParserRuleContext tree = parser.singleStatement();
        System.out.println("语法树: " + tree.toStringTree(parser));
        // 2. @TODO: 遍历语法树，自定义访问者
        AstVisitor eval = new AstVisitor();
        Node node = eval.visit(tree);
        System.out.println("返回: " + node);
        // @TODO: 执行sql语句
        System.out.println("执行sql语句: " + sql);
    }

    private static void handleQuery() throws IOException {
        // @TODO: 获取待查询的表名和字段名称
        // @TODO: 基于表名确定数据文件
        // @TODO: 读取数据文件
        // @TODO: 输出数据
    }
}