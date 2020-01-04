import { ApolloServer, gql } from "apollo-server-koa";
import { typeDefs } from "./schemas/user.graphql";

const users = [
  {
    no: 1,
    id: "id1",
    pw: "pw1"
  },
  {
    no: 2,
    id: "id2",
    pw: "pw2"
  },
  {
    no: 3,
    id: "id3",
    pw: "pw3"
  }
];

const resolvers = {
  Query: {
    user: () => users[0],
    users: () => users
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
export default server;
