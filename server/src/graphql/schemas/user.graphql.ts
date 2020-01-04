import { gql } from "apollo-server-koa";

export const typeDefs = gql`
  type User {
    no: Int
    id: String
    pw: String
  }

  type Query {
    user: User
    users: [User]
  }
`;
