const glob = require('glob');

//  阻塞 I/O
// var result = null;
// console.time('glob');
// result = glob.sync(__dirname  + '/**/*');
// console.timeEnd('glob');
// console.log('result', result)

var result = null;
console.log(glob);
console.time('glob');
glob(__dirname  + '/**/*', function(err,res) {
    result = res;
    console.log('get result');
})

console.timeEnd('glob');
console.log(1+1+2)
