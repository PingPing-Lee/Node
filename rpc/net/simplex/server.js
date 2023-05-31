const net = require('net');

const server = net.createServer((socket)=> {
    // socket.write 写入
    // 读取
    socket.on('data', function(buffer) {
        console.log(buffer, buffer.toString())
    })
});

server.listen(4000);