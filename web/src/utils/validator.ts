import { ErrorField } from '../utils/error/error-field';
import { ERROR } from '../utils/error/constant';

const [ID_MIN, ID_MAX] = [6, 16];
const [PW_MIN, PW_MAX] = [8, 16];
const [NAME_MIN, NAME_MAX] = [2, 16];

const validate = {
  id: {
    min: ID_MIN,
    max: ID_MAX,
  },
  pw: {
    min: PW_MIN,
    max: PW_MAX,
  },
  pwConfiem: {
    min: PW_MIN,
    max: PW_MAX,
  },
  name: {
    min: NAME_MIN,
    max: NAME_MAX,
  },
};

export interface ICheckParams {
  type: string;
  val: string;
}

interface IValidationResult {
  error: ErrorField;
}

export const checkFieldLength = ({ type, val }: ICheckParams): IValidationResult => {
  const MIN_CHECK = validate[type].min <= val.length;
  const MAX_CHECK = validate[type].max >= val.length;

  if (!MIN_CHECK) {
    return { error: new ErrorField(type, val, ERROR.REGISTER.LENGTH[type]) };
  }
  if (!MAX_CHECK) {
    return { error: new ErrorField(type, val, ERROR.REGISTER.LENGTH[type]) };
  }
  return { error: null };
};

/**
 * @param arr ICheckParams[] - length must be 2
 * @param arr[0] { type: string, val: string } - not confirm field. ex) pw
 * @param arr[1] { type: string, val: string } - confirm field. ex) pwConfirm
 */
export const confirmValidation = (arr: ICheckParams[]): IValidationResult => {
  if (arr.length !== 2) {
    return; // 개발자의 mistake >W<
  }

  if (arr[0].val === arr[1].val && arr[0].val !== '' && arr[1].val !== '') {
    return { error: null };
  }
  return { error: new ErrorField(arr[1].type, arr[1].val, ERROR.REGISTER.EQUAL[arr[1].type]) };
};

export const inputValidation = (vals: ICheckParams[]): IValidationResult[] => {
  const validateResult: IValidationResult[] = vals.map(({ type, val }) =>
    checkFieldLength({ type, val }),
  );
  return validateResult;
};
