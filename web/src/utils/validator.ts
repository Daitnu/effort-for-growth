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

export const CHECK_TYPE = {
  ID: 'id',
  PW: 'pw',
  NAME: 'name',
};

export const checkLength = (type: string, val: string): boolean => {
  return validate[type].min <= val.length && val.length <= validate[type].max;
};
