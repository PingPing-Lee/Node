const net = require('net');

// 创建socket
const socket = new net.Socket({});

// 连接服务器
socket.connect({
    host: '127.0.0.1',
    port: 4000
});

const lessonIds = [
    "136797",
    "136798",
    "136799",
    "136800",
    "136801",
    "136803",
    "136804",
    "136806",
    "136807",
    "136808",
    "136809",
    "141994",
    "143517",
    "143557",
    "143564",
    "143644",
    "146470",
    "146569",
    "146582"
]

let buffer = Buffer.alloc(4);
let lessonId = Math.floor(Math.random() * lessonIds.length);

const socketWrite = (id) => {
    //  定义 buffer 长度
    buffer = Buffer.alloc(4);
    // 随机写入 lessonId
    buffer.writeInt32BE(lessonIds[id]);
    // 把 buffer 数据写入 socket 服务器
    socket.write(buffer);
}

socketWrite(lessonId)

socket.on('data', (buffer) => {
    console.log(lessonId, buffer.toString())

    // 接收到数据之后，按照半双工通信的逻辑，马上开始下一次请求
    id = Math.floor(Math.random() * lessonIds.length);
    socketWrite(id)
})


