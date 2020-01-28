import validator from "validator";
import { ErrorField } from "../exception";

const checkIdLength = id => validator.isLength(id, { min: 6, max: 16 });
const checkPwLength = pw => validator.isLength(pw, { min: 8, max: 16 });

export const checkLoginParams = ({ id, pw }): boolean => {
  if (!checkIdLength(id)) {
    throw new ErrorField("id", id, "id의 길이가 부적합 합니다.");
  }

  if (!checkPwLength(pw)) {
    throw new ErrorField("pw", pw, "pw의 길이가 부적합 합니다.");
  }
  return true;
};
