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
  name: {
    min: NAME_MIN,
    max: NAME_MAX,
  },
};

export interface ICheckLengthParams {
  type: string;
  val: string;
}

export const CHECK_TYPE = {
  ID: 'id',
  PW: 'pw',
  NAME: 'name',
};

export const checkLength = ({ type, val }: ICheckLengthParams): boolean => {
  const MIN_CHECK = validate[type].min <= val.length;
  const MAX_CHECK = validate[type].max >= val.length;
  const result: boolean = MIN_CHECK && MAX_CHECK;
  return result;
};

// TODO: value를 전부 받아와서 input validation을 수행할 함수 작성
