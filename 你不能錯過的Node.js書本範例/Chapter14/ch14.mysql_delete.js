/**
 * Created by king on 15-6-25.
 *
 * ch14.mysql_delete.js
 */
console.info("------   mysql delete()   ------");
console.info();
var http = require("http"); // TODO: 引入HTTP模組
var mysql = require('/usr/local/lib/node_modules/mysql');   // TODO: 引入mysql模組
console.log("Now start HTTP server on port 6868...");
console.info();
/**
 * 建立資料庫連接
 */
var connection = mysql.createConnection({
    host: "localhost",  // TODO: 主機位址
    user: "root",       // TODO: 資料庫用戶名
    password: "root",   // TODO: 資料庫密碼
    database: "nodejs", // TODO: 資料庫名稱
    port: 3306          // TODO: 端口號
});
/**
 * 建立HTTP服務器
 */
http.createServer(function (req, res) {
    /**
     * 資料庫刪除 DELETE 操作
     */
    connection.query('delete from userinfo where id=7;', function (errordelete, resdelete) {
        if (errordelete) console.log(errordelete);
        console.log("DELETE Return ==> ");
        console.log(resdelete);
        /**
         * 資料庫查詢 SELECT 操作
         */
        connection.query('select * from userinfo;', function (errorselect, rows, fields) {
            res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
            res.write("<h3>測試 Node.js - MySQL 資料庫刪除操作!</h3><br/>");
            res.end(JSON.stringify(rows));
        });
    });
}).listen(6868);    // TODO: 監聽6868端口號