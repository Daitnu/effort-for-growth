import Koa from "koa";
import Router from "koa-router";
import dotenv from "dotenv";
import api from "./api";

dotenv.config();
const { PORT } = process.env;
const app = new Koa();
const router = new Router();

router.use(api.routes());

app.use(router.routes());

app.listen(PORT, () => console.log("start"));
