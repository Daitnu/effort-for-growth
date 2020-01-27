import { ILogin, ISignUp, IResponseSignup } from "../@types/account";
import * as accountService from "../services/account";
import {
  UserInputError,
  SyntaxError,
  ApolloError,
  ValidationError
} from "apollo-server";
import { ErrorField, ErrorResponse, ERROR_CODE } from "../libraries/exception";

const login = async (_, { id, pw }: ILogin): Promise<ILogin> => {
  if (id.length < 100) {
    const errorResponse = new ErrorResponse(ERROR_CODE.INVALID_INPUT_VALUE);
    const errorCode = errorResponse.getErrorCode();

    throw new UserInputError(errorCode.getMessage(), {
      code: errorCode.getCode(),
      status: errorCode.getStatus()
    });
  }

  try {
    const values = await accountService.login({ id, pw });
    return values;
  } catch (error) {
    return error;
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
