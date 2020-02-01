import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import path from "path";

const typeDefFiles = fileLoader(path.resolve(__dirname, "."));
const typeDefs = mergeTypes(typeDefFiles);

export { typeDefs };
