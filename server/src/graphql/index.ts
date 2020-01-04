import { ApolloServer } from "apollo-server-koa";
import { fileLoader, mergeTypes, mergeResolvers } from "merge-graphql-schemas";
import path from "path";

const typeDefFiles = fileLoader(path.resolve(__dirname, "./types"));
const typeDefs = mergeTypes(typeDefFiles);

const resolverFiles = fileLoader(path.resolve(__dirname, "./resolvers"));
const resolvers = mergeResolvers(resolverFiles);

const server = new ApolloServer({ typeDefs, resolvers });
export default server;
