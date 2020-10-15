const Koa = require('koa');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
// const bodyParser = require('koa-bodyparser')
const koaBody = require('koa-body'); // 支持上传多个文件
const logger = require('koa-logger');

const app = new Koa();
const {database, port, host} = require('./src/config');

const sessionMysqlConfig = {
    user: database.USERNAME,
    password: database.PASSWORD,
    database: database.DATABASE,
    host: database.HOST,
};

app.use(
    session({
        key: 'USER_SID',
        store: new MysqlStore(sessionMysqlConfig),
    })
);

// 为了能拿到 form data 中的数据， 使用 koa-body 代替 koa-bodyparser
// app.use(bodyParser())
app.use(koaBody());

app.use(logger());

app.use(require('./src/route/learn').routes())

app.listen(port, () => {
    console.log(`http://${host}:${port}`);
});
