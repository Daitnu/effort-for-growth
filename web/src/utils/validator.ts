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
  fieldName: string;
  val: string;
}

interface IValidationResult {
  error: ErrorField;
}

export const checkFieldLength = ({ fieldName, val }: ICheckParams): IValidationResult => {
  const MIN_CHECK = validate[fieldName].min <= val.length || val !== '';
  const MAX_CHECK = validate[fieldName].max >= val.length;

  if (!MIN_CHECK) {
    return { error: new ErrorField(fieldName, val, ERROR.REGISTER.LENGTH[fieldName]) };
  }
  if (!MAX_CHECK) {
    return { error: new ErrorField(fieldName, val, ERROR.REGISTER.LENGTH[fieldName]) };
  }
  return { error: null };
};

export const inputValidation = (vals: ICheckParams[]): IValidationResult[] => {
  const validateResult: IValidationResult[] = vals.map(({ fieldName, val }) =>
    checkFieldLength({ fieldName, val }),
  );
  return validateResult;
};
