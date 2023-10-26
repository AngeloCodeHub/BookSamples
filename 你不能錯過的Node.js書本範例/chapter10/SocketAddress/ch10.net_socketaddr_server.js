/**
 * Created by king on 15-5-20.
 *
 * ch10.net_socketaddr_server.js
 */
console.info("------   net socket.address()   ------");
console.info();
var net = require('net');   // TODO: 引入網路(Net)模組
var HOST = '127.0.0.1';     // TODO: 定義服務器位址
var PORT = 6677;            // TODO: 定義端口號
/**
 * 建立 TCP服務器
 */
var server = net.createServer();
/**
 * 監聽"listening"事件
 */
server.on('listening', function() {
    console.log('Server is listening on port', PORT);
    console.info();
});
/**
 * 監聽"connection"事件
 */
server.on('connection', function(socket) {
    console.log('Server has a new connection');
    console.info();
    console.info(socket.address());
    console.info();
    console.info(socket.localAddress);
    console.info();
    console.info(socket.localPort);
    console.info();
    server.close();
});
/**
 * 監聽"close"事件
 */
server.on('close', function() {
    console.log('Server is now closed');
    console.info();
});
/**
 * 監聽"error"事件
 */
server.on('error', function(err) {
    console.log('Error occurred:', err.message);
    console.info();
});
/**
 * 使用server.listen()監聽服務器端口
 */
server.listen(PORT, HOST);