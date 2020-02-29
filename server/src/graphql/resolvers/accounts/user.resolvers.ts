import * as accountCtrl from "./controller";
import { Iresolvers } from "../../../@types/resolvers";

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

const resolvers: Iresolvers = {
  Query: {
    user: (_, { no }) => users[no],
    users: () => users
  },
  Mutation: {
    login: accountCtrl.login,
    signUp: accountCtrl.signUp
  }
};

export default resolvers;
