// (function() {
//     var promise = new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             resolve();
//         }, 500);
//     })
    
//     console.log(1, promise)
    
//     setTimeout(() => {
//         console.log(2, promise)
//     }, 800);
// })()

/**
 * promise的状态转换以及通过then/catch获取内容
 */
const promise = new Promise((resolve, reject) => {
    setTimeout(function () {
        reject(new Error(4))
    }, 500)
})

promise
    .then(function (result) {
        console.log(result)
    })
    .catch(function (err) {
        return 1
    })


setTimeout(() => {
    console.log(promise);
}, 800)