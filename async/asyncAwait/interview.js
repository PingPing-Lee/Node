(async function(){
    try {
        await Promise.all([interview(1), interview(2)])
    }catch (e) {
        return console.log('cry at ' + e.round);
    }
    console.log('smile');
})()

function interview(round) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                const error = new Error('failed');
                error.round = round;
                reject(error);

            } else {
                resolve('success');
            }
        }, 500)
    })
}