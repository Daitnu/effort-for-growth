const Koa = require('koa');
const Router = require('koa-router');
const dotenv = require('dotenv');
const api = require('./api');

dotenv.config();
const { PORT } = process.env;
const app = new Koa();
const router = new Router();

router.use(api.routes());

app.use(router.routes());

app.listen(PORT, () => console.log('start'));
