import * as accountService from "../../services/account";
import { ILogin, ISignUp, IResponseSignup } from "../../@types/account";

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

// TODO : try catch를 wrap으로 감싸기.. 혹은 더 이쁜방법 찾기
const resolvers = {
  Query: {
    user: (_, { no }) => users[no],
    users: () => users
  },
  Mutation: {
    login: async (_, { id, pw }: ILogin): Promise<ILogin> => {
      try {
        const values = await accountService.login({ id, pw });
        return values;
      } catch (error) {
        return error;
      }
    },

    signUp: async (_, { id, pw, name }: ISignUp) => {
      try {
        const values = await accountService.signUp({ id, pw, name });
        delete values.pw;
        return values;
      } catch (error) {
        return error;
      }
    }
  }
};

export default resolvers;
