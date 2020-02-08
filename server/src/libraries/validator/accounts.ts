import validator from "validator";
import { ErrorField } from "../exception";

const checkIdLength = id => validator.isLength(id, { min: 6, max: 16 });
const checkPwLength = pw => validator.isLength(pw, { min: 8, max: 16 });

export const checkLoginParams = ({ id, pw }): boolean => {
  const errorFields = [];

  if (!checkIdLength(id)) {
    const errorField = new ErrorField("id", id, "id의 길이가 부적합 합니다.");
    errorFields.push(errorField);
  }

  if (!checkPwLength(pw)) {
    const errorField = new ErrorField("pw", pw, "pw의 길이가 부적합 합니다.");
    errorFields.push(errorField);
  }

  if (errorFields.length) {
    throw errorFields;
  }

  return true;
};
