import { REGISTER_FIELDS } from '../../@types/validator-field-names';

export const ERROR = {
  REGISTER: {
    LENGTH: {
      [REGISTER_FIELDS.ID]: '아이디의 길이가 부적합 합니다.',
      [REGISTER_FIELDS.PW]: '비밀번호의 길이가 부적합 합니다.',
      [REGISTER_FIELDS.NAME]: '이름의 길이가 부적합 합니다.',
      [REGISTER_FIELDS.PW_CONFIRM]: '비밀번호의 길이가 부적합 합니다.',
    },
    EQUAL: {
      [REGISTER_FIELDS.PW_CONFIRM]: '비밀번호와 일치하지 않습니다.',
    },
  },
};
