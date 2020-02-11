import dotenv from "dotenv";
dotenv.config();

import Koa from "koa";
import cors from "@koa/cors";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-koa";

const { PORT, NODE_ENV } = process.env;
const PRODUCTION = "production";
const isNotProductionMode = PRODUCTION !== NODE_ENV;
const app = new Koa();
app.use(cors());

const startServer = async () => {
  await createConnection();
  const { typeDefs, resolvers, formatError } = await import("./graphql");
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError,
    debug: isNotProductionMode
  });
  console.log("graphql server start");

  server.applyMiddleware({ app });
  app.listen({ port: PORT });
  console.log(`🚀 Server ready at ${server.graphqlPath}`);
};

startServer();
