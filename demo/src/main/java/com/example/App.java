package com.example;

import java.io.*;

class App {
    public static void main(String[] args) throws IOException {
        System.out.print(">> "); // 打印提示符
        InputStream input = System.in; // 标准输入流
        BufferedReader reader = new BufferedReader(new InputStreamReader(input));
        String sql = reader.readLine(); // 读取一行输入
        // @TODO: 解析输入的sql语句
        System.out.println("解析sql语句: " + sql);
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