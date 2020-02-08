import { ILogin, ISignUp, IResponseSignup } from "../@types/account";
import * as accountService from "../services/account";
import { checkLoginParams } from "../libraries/validator/accounts";

const login = async (_, { id, pw }: ILogin): Promise<ILogin> => {
  checkLoginParams({ id, pw });
  const token = await accountService.login({ id, pw });
  return token;
};

const signUp = async (_, { id, pw, name }: ISignUp) => {
  try {
    const values = await accountService.signUp({ id, pw, name });
    delete values.pw;
    return values;
  } catch (error) {
    return error;
  }
};

export const Accounts = { login, signUp };
