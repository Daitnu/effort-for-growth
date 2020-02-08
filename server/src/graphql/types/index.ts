import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import path from "path";

const typeDefFiles: any[] = fileLoader(path.resolve(__dirname, "."));
const typeDefs: string = mergeTypes(typeDefFiles);

export { typeDefs };
