// require http 内置模块
var http = require('http');
// fs 文件模块
const fs = require('fs');

// 创建一个能够进行http服务的程序实例
http.createServer(function (request, response) {
    // console.log(request)
    if (request.url == '/favicon.ico') {
        response.writeHead(200);
        response.end();
        return;
    }
    console.log(request.url)
    response.writeHead(200, {'Content-Type': 'text/plain'});
    fs.createReadStream(__dirname + '/1.html').pipe(response)
    // response.end('Hello World');
}).listen(3000); // listen 监听 3000 端口

console.log('Server running at http://127.0.0.1:3000/');