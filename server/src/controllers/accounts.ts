import { ILogin, ISignUp, IResponseSignup } from "../@types/account";
import * as accountService from "../services/account";
import {
  checkLoginParams,
  checkSignUpParams
} from "../libraries/validator/accounts";

const login = async (_, { id, pw }: ILogin, { usage }): Promise<ILogin> => {
  console.log(usage);
  checkLoginParams({ id, pw });
  const token = await accountService.login({ id, pw });
  return token;
};

const signUp = async (_, { id, pw, name }: ISignUp) => {
  checkSignUpParams({ id, pw, name });
  const values: IResponseSignup = await accountService.signUp({ id, pw, name });
  return values;
};

export const Accounts = { login, signUp };
