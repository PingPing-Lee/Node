const app = new (require('koa'));
const mount = require('koa-mount');
const serveStatic = require('koa-static');

const ReactDOMServer = require('react-dom/server');
require("@babel/register")({
    presets: ['@babel/preset-react']
})

const getData = require('./get-data')
const getApp = require('./app.jsx')
const template = require('./template')(__dirname + '/index.htm')

app.use(mount('/static', serveStatic(__dirname + '/source')))

app.use(mount('/data', async (ctx) => {
    ctx.body = await getData(+(ctx.query.sort || 0), +(ctx.query.filt || 0));
}));

app.use(async (ctx) => {
    ctx.status = 200;
    const filtType = +(ctx.query.filt || 0)
    const sortType = +(ctx.query.sort || 0);
    const reactData = await getData(sortType, filtType);

    const reactString = ReactDOMServer.renderToString(
        getApp(reactData)
    )
    console.log(reactString, 'reactString');

    ctx.body = template({
        reactString,
        reactData,
        filtType,
        sortType
    })
})

app.listen(3000)
// module.exports = app;