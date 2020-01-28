import { ILogin, ISignUp, IResponseSignup } from "../@types/account";
import * as accountService from "../services/account";
import {
  UserInputError,
  SyntaxError,
  ApolloError,
  ValidationError
} from "apollo-server";
import { checkLoginParams } from "../libraries/validator/accounts";

const login = async (_, { id, pw }: ILogin): Promise<ILogin> => {
  try {
    checkLoginParams({ id, pw });
  } catch (error) {
    throw new ValidationError(error);
  }

  try {
    const values = await accountService.login({ id, pw });
    return values;
  } catch (error) {
    throw new ApolloError(error);
  }
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
