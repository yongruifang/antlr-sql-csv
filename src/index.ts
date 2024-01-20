import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { SqlBaseLexer, SqlBaseParser } from './antlr';
import { AstVisitor } from './visit/AstVisitor';
import path from 'path';
import csv from 'csvtojson';



const charStream = CharStreams.fromString('SELECT city, state FROM cities');
const lexer = new SqlBaseLexer(charStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new SqlBaseParser(tokenStream);

// Parse the input, from the 'singleStatement' rule as the beginning
const tree = parser.singleStatement();
// print the parse tree in LISP format
console.log(tree.toStringTree(parser.ruleNames));
// Create the visitor
const visitor = new AstVisitor();
// Use the visitor entry point
const ast = visitor.visit(tree);
// console.table(ast);
// 查询的csv文件路径
const csvPath = path.resolve(__dirname, '../data/');
// 查询的字段从ast的queryFileds中获取
const queryFileds = (ast as any).queryFileds.map((field: any) => field.name);
// 查询的表从ast的tables中获取
const tables = (ast as any).tables.map((table: any) => table.name);
// 补全csv文件的路径
const csvFiles = tables.map((table: any) => {
    return path.resolve(csvPath, `${table}.csv`);
});
// console.log('queryFileds', queryFileds)
// console.log('tables', tables)
// 读取第一个csv文件
csv()
    .fromFile(csvFiles[0])
    .then((jsonObj) => {
        // 打印数组切片，只打印前1条
        // console.log(jsonObj.slice(0, 1));
        // jsonObj的属性转换成大写
        jsonObj = jsonObj.map((item: any) => {
            const obj: any = {};
            for (const key in item) {
                obj[key.toUpperCase()] = item[key];
            }
            return obj;
        });
        // 根据查询的字段，过滤出需要的字段(大小写不敏感)
        const result = jsonObj.map((item: any) => {
            const obj: any = {};
            queryFileds.forEach((field: any) => {
                obj[field] = item[field.toUpperCase()];
            });
            return obj;
        });
        // 打印过滤后的结果
        // console.log(result.slice(0, 1));
        // 格式化输出
        console.table(result);
    })


