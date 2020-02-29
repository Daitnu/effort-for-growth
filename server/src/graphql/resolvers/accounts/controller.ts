import { ILogin, ISignUp, IResponseSignup } from "../../../@types/account";
import * as accountService from "./service";
import {
  checkLoginParams,
  checkSignUpParams
} from "../../../libraries/validator/accounts";

export const login = async (_, { id, pw }: ILogin): Promise<ILogin> => {
  checkLoginParams({ id, pw });
  const token = await accountService.login({ id, pw });
  return token;
};

export const signUp = async (_, { id, pw, name }: ISignUp) => {
  checkSignUpParams({ id, pw, name });
  const values: IResponseSignup = await accountService.signUp({ id, pw, name });
  return values;
};
