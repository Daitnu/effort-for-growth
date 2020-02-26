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

export interface ICheckLengthParams {
  type: string;
  val: string;
}

interface IValidationResult {
  result: boolean;
  error?: ErrorField;
}

export const checkFieldLength = ({ type, val }: ICheckLengthParams): IValidationResult => {
  const MIN_CHECK = validate[type].min <= val.length;
  if (!MIN_CHECK) {
    return { result: false, error: new ErrorField(type, val, ERROR.REGISTER.LENGTH[type]) };
  }
  const MAX_CHECK = validate[type].max >= val.length;
  if (!MAX_CHECK) {
    return { result: false, error: new ErrorField(type, val, ERROR.REGISTER.LENGTH[type]) };
  }
  return { result: true };
};

export const inputValidation = (values: Array<ICheckLengthParams>) => {
  const validateResult: IValidationResult[] = values.map(({ type, val }) =>
    checkFieldLength({ type, val }),
  );
  return validateResult;
};
