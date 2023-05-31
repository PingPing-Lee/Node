// console.log('lib lib');

// exports.hello = 'world'

// exports.add = function(a,b) {
//     return a+b;
// }

// exports.obj = { key: 'value'};

// setTimeout(() => {
//     console.log(exports)
// }, 2000)

module.exports = function (playerAction) {
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
        return 0;
    } else if(
        (playerAction === 'rock' && computerAction === 'scissor') ||
        (playerAction === 'scissor' && computerAction === 'paper') ||
        (playerAction === 'paper' && computerAction === 'rock')
    ) {
        console.log('你赢了');
        return -1;

    } else {
        console.log('你输了');
        return 1;

    }
}
