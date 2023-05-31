(function(){
    const result = async function(){
        try {
            var content = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject(new Error('8'))
                }, 500)
            })
        }catch (e) {
            console.log('error', e)
        }
        console.log(content);
        return 4;
    }()
    setTimeout(() => {
        console.log(result)
    }, 800)
})()