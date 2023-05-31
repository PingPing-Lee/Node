//  nodejs 中🈶️很多大量的 非阻塞I/O，这些 非阻塞I/O 的程序运行结果是需要回调函数来获取的
// 这种通过回调函数来编程的方式就称为 异步编程 


function interview(callback) {
    setTimeout(() => {
        if (Math.random() > 0.2) {
            callback(null, 'success')

        } else {
            // throw new Error('fail');
            callback(new Error('fail'))
        }
    }, 500)
}

interview(function (err, res) {
    if (err) {
        console.log('cry at 1')
        return;
    }
    interview(function (err, res) {
        if (err) {
            console.log('cry at 2')
            return;
        }
        interview(function (err, res) {
            if (err) {
                console.log('cry at 3')
                return;
            }
            console.log('smile')
        })
    })
})

// 事件循环 是使 nodejs 实现非阻塞 I/O 的关键部分，是非阻塞 IO的基础，
// 非阻塞IO 和 event loop 都是 LIBUV 这个 c++ 库所提供的能力
// 处理事件的循环，当事件完成时把数据回调出去
