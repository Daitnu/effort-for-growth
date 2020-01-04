import Koa from "koa";
import Router from "koa-router";
import dotenv from "dotenv";
import server from "./graphql";
import api from "./api";

dotenv.config();

const { PORT } = process.env;
const app = new Koa();
const router = new Router();

server.applyMiddleware({ app });

router.use(api.routes());
app.use(router.routes());

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at ${server.graphqlPath}`)
);
