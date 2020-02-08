import { fileLoader, mergeResolvers } from "merge-graphql-schemas";
import path from "path";

const resolverFiles: any[] = fileLoader(
  path.resolve(__dirname, "./**/*.resolvers.*")
);
const resolvers: any = mergeResolvers(resolverFiles);

export { resolvers };
