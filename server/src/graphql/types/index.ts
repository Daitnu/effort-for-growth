import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import path from "path";

const typeDefFiles: any[] = fileLoader(
  path.resolve(__dirname, "./**/*.graphql")
);
const typeDefs: string = mergeTypes(typeDefFiles);

export { typeDefs };
