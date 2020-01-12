import * as accountService from "../../services/account";

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
    user: (_, { no }) => users[no],
    users: () => users
  },
  Mutation: {
    login: (_, { id, pw }) => {
      try {
        accountService.login({ id, pw });
      } catch (error) {
        return error;
      }
      return {
        no: 1,
        id,
        pw
      };
    }
  }
};

export default resolvers;
