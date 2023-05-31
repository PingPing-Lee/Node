const eventEmitter = require('events').EventEmitter;

// 建议 把抛事件的模块封装起来
// 强调抛事件这种模式更适合底层模块往外传递信息
class Times extends eventEmitter {
    constructor() {
        super();
        setInterval(() => {
            this.emit('newLesson', { tips: '上新了', price: Math.random() * 100 })
        }, 3000)
    }
}

const t = new Times();

t.on('newLesson', (data) => {
    if(data.price < 60) {
        console.log('buy it', data.price);
    }
})