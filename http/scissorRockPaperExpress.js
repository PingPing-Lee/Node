// require http 内置模块
var http = require('http');
// fs 文件模块
const fs = require('fs');
const game = require('./game');

const express = require('express');

// 玩家胜利次数，如果超过3，则后续往该服务器的请求都返回500
var playerWinCount = 0
// 玩家的上一次游戏动作
let playerLastAction = null;
// 玩家连续出同一个动作的次数
let sameCount = 0;

const app = express();

// 通过app.get设定 /favicon.ico 路径的路由
// .get 代表请求 method 是 get，所以这里可以用 post、delete 等。这个能力很适合用于创建 rest 服务
app.get('/favicon.ico', function(request,response) {
    // response.writeHead(200);
    // response.end();

    // 一句 status(200) 代替 writeHead(200); end();
    response.status(200);
    response.send();
    return;
})

// 设定 /game 路径的路由
// 使用 next 把处理逻辑分多断
app.get('/game', 
    function (request, response, next) {
        // 如果统计的玩家胜利次数超过3
        // 或者玩家出现过作弊的情况（sameCount=9代表玩家有过作弊行为）
        if (playerWinCount >= 3 || sameCount == 9) {
            // response.writeHead(500);
            // response.end('我再也不和你玩了！');
            response.status(500);
            response.send('我再也不和你玩了！');
            return
        }
        next();
        console.log(response.playerWon)
        if(response.playerWon) {
            playerWinCount++;
        } 
    },
    function(request,response, next) {
        // const parseUrl = url.parse(request.url)
        // const query = querystring.parse(parseUrl.query);
        // express自动帮我们把query处理好挂在request上
        const query = request.query;
        const playerAction = query.action;

        // 当玩家操作与上次相同，则连续相同操作统计次数+1，否则统计清零
        if(playerLastAction && playerLastAction === playerAction) {
            sameCount++;
        } else{
            sameCount = 0;
        }
        // 当玩家操作连续三次相同，则视为玩家作弊，把sameCount置为9代表有过作弊行为
        if (sameCount >= 3) {
            // response.writeHead(400);
            // response.end('你一直出同一种拳，你作弊！');
            response.status(400);
            response.send('你一直出同一种拳，你作弊！');
            sameCount = 9;
            return 
        }
        playerLastAction = playerAction;

        response.playerAction = playerAction;

        next()
    },
    function (request, response, next) {
        // console.log(game(playerAction));

        // 执行游戏逻辑
        const gameResult = game(response.playerAction);
        response.status(200);

        // 根据不同的游戏结果返回不同的说明
        if (gameResult == 0) {
            response.send('平局！');

        } else if (gameResult == 1) {
            response.send('你赢了！');
            // 玩家胜利次数统计+1
            // playerWon++;
            response.playerWon = true;
        } else {
            response.send('你输了！');
        }
    },
)

// send接口会判断你传入的值的类型，文本的话则会处理为text/html
// Buffer的话则会处理为下载
app.get('/', function(request,response) {
    response.send(fs.readFileSync(__dirname+'/1.html', 'utf-8'))
    // response.writeHead(200);
    // fs.createReadStream(__dirname + '/1.html').pipe(response)
})


app.listen(3000)
