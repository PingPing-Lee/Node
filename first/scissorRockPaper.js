// console.log('hello world');

// console.log(Date);
// console.log(Math);

// console.log(setTimeout);
// console.log(setInterval);
// //  没有 requestAnimationFrame，由setImmediate 代替
// // console.log(requestAnimationFrame);
// console.log(setImmediate);

// console.log(__filename);
// console.log(__dirname);

const playerAction = process.argv[process.argv.length - 1];

const random = Math.random() * 3;
if(random < 1) {
    var computerAction = 'rock'
} else if(random > 2) {
    var computerAction = 'scissor'
} else {
    var computerAction = 'paper'
}
console.log(`我出了${computerAction}`);
if (playerAction === computerAction) {
    console.log('平局了');
} else if(
    (playerAction === 'rock' && computerAction === 'scissor') ||
    (playerAction === 'scissor' && computerAction === 'paper') ||
    (playerAction === 'paper' && computerAction === 'rock')
) {
    console.log('你赢了');
} else {
    console.log('你输了');
}






