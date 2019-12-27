const Router = require("koa-router");

const api = new Router();

api.get("/", (ctx, next) => {
  ctx.body = "INDEX PAGE";
});

api.get("/test", (ctx, next) => {
  ctx.body = "GET test route";
});

export default api;
