import validator from "validator";
import { ErrorField } from "../exception";
import { ValidationError, UserInputError } from "apollo-server";
import { ERROR } from "../exception/constant";

const checkIdLength = id => validator.isLength(id, { min: 6, max: 16 });
const checkPwLength = pw => validator.isLength(pw, { min: 8, max: 16 });
const checkNameLength = name => validator.isLength(name, { min: 2, max: 16 });

const checkIdAndPw = ({ id, pw }, errorFields) => {
  if (!checkIdLength(id)) {
    const errorField = new ErrorField("id", id, ERROR.INVALID_ID_LENGTH);
    errorFields.push(errorField);
  }

  if (!checkPwLength(pw)) {
    const errorField = new ErrorField("pw", pw, ERROR.INVALID_PW_LENGTH);
    errorFields.push(errorField);
  }
};

export const checkLoginParams = ({ id, pw }): boolean => {
  const errorFields = [];
  checkIdAndPw({ id, pw }, errorFields);

  if (errorFields.length) {
    throw new ValidationError(ERROR.ACCOUNT.INVALID_ID_OR_PW);
  }

  return true;
};

export const checkSignUpParams = ({ id, pw, name }): boolean => {
  const errorFields = [];
  checkIdAndPw({ id, pw }, errorFields);

  if (!checkNameLength(name)) {
    const errorField = new ErrorField("name", name, ERROR.INVALID_NAME_LENGTH);
    errorFields.push(errorField);
  }

  if (errorFields.length) {
    throw new UserInputError(ERROR.INVALID_INPUT_VALUE, { errorFields });
  }

  return true;
};
