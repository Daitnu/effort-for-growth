const Koa = require('koa');
const dotenv = require('dotenv');

dotenv.config();
const { PORT } = process.env;
const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(PORT, () => console.log('start'));
