import { fileLoader, mergeResolvers } from "merge-graphql-schemas";
import path from "path";

const resolverFiles = fileLoader(path.resolve(__dirname, "./**/*.resolvers.*"));
const resolvers = mergeResolvers(resolverFiles);

export { resolvers };
