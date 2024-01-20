package com.example;

import java.io.*;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.ParserRuleContext;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVRecord;

import com.example.antlr4.SqlBaseLexer;
import com.example.antlr4.SqlBaseParser;
import com.example.tree.basic.Node;
import com.example.tree.detail.QuerySpecification;
import com.example.tree.detail.Identifier;
import com.example.visit.AstVisitor;
import com.google.common.collect.Lists;

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
        // 2. 遍历语法树，自定义访问者
        AstVisitor eval = new AstVisitor();
        QuerySpecification node = (QuerySpecification) eval.visit(tree);
        // 执行sql语句
        System.out.println("执行sql语句: " + sql);
        handleQuery(node);
    }

    private static void handleQuery(QuerySpecification node) throws IOException {
        // @TODO: 获取待查询的表名和字段名称
        String tableName = node.getRelations().get(0).getValue();
        List<Identifier> queryFileds = node.getSelectItems();
        System.out.println("tableName: " + tableName);
        System.out.println("queryFileds: " + queryFileds);
        // @TODO: 基于表名确定数据文件
        String fileLoc = "data/" + tableName + ".csv";
        // @TODO: 从csv文件中读取指定字段的数据
        Reader in = new FileReader(fileLoc);
        // 通过CSVFormat.RFC4180创建一个csv格式化对象
        Iterable<CSVRecord> records = CSVFormat.RFC4180.builder().setHeader().setSkipHeaderRecord(true).build()
                .parse(in);
        // 通过records.forEach迭代器遍历records中的数据
        int width = 30;
        String format = queryFileds.stream().map(s -> "%-" + width + "s").collect(Collectors.joining("|"));
        System.out.println("|" + String.format(format, queryFileds.toArray()) + "|");
        // 表头
        int flagCnt = width * queryFileds.size() + queryFileds.size();
        String rowDelimiter = String.join("", Collections.nCopies(flagCnt, "-"));
        System.out.println(rowDelimiter);
        // 定义二维数组
        List<List<String>> table = Lists.newArrayList();
        for (CSVRecord record : records) {
            List<String> row = Lists.newArrayList();
            for (Identifier field : queryFileds) {
                row.add(record.get(field.getValue()));
            }
            table.add(row);
        }
        // 打印表格
        for (List<String> row : table) {
            System.out.println("|" + String.format(format, row.toArray()) + "|");
        }
    }
}