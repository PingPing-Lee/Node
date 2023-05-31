// console.log('start');
// console.log('end', lib);

// lib.additional = 'test'

const playerAction = process.argv[process.argv.length - 1];

const lib = require('./lib.js')

let count = 0;
process.stdin.on('data', e => {
    const playerAction = e.toString().trim();
    const result = lib(playerAction);
    console.log(result);

    if(result === -1) {
        count++;
    }

    if(count >= 3) {
        console.log('不玩了');
        process.exit();
    }
})



