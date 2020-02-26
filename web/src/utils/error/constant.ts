import { REGISTER_FIELDS } from '../../@types/validator-field-names';

export const ERROR = {
  REGISTER: {
    LENGTH: {
      [REGISTER_FIELDS.ID]: 'id의 길이가 부적합 합니다.',
      [REGISTER_FIELDS.PW]: 'pw의 길이가 부적합 합니다.',
      [REGISTER_FIELDS.NAME]: 'name의 길이가 부적합 합니다.',
    },
  },
};
