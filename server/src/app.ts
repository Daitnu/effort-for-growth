import dotenv from "dotenv";
dotenv.config();

import Koa from "koa";
import "reflect-metadata";
import { createConnection } from "typeorm";

import server from "./graphql";

const { PORT } = process.env;
const app = new Koa();

server.applyMiddleware({ app });

createConnection().then(() => {
  console.log("db connection");
  app.listen({ port: PORT }, () =>
    console.log(`🚀 Server ready at ${server.graphqlPath}`)
  );
});
