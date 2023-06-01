const fs = require('fs');
const koa = require('koa');
const mount = require('koa-mount');
const static = require('koa-static');
const graphqlHTTP = require('koa-graphql');

const schema = require('./schema');

const app = new koa();

// app.use(
//     graphqlHTTP({
//         schema: require('./schema')
//     })
// )

app.use(
    // 给 koa-graphql 传一个 graphql 的协议文件，就会自动帮你生成graphql-api
    mount('/api', graphqlHTTP({
        schema,
    }))
)

app.use(
    mount('/static', static(`${__dirname}/source/static`))
)

app.use(
    mount('/', async ctx => {
        ctx.status = 200;
        ctx.body = fs.readFileSync(`${__dirname}/source/index.html`, 'utf-8')
    })
)

app.listen(3000)