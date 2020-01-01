interface error {
  status: number;
  message: string;
}

const handleErrorStatus = ({ status, message }: error): string => {
  let returnValue: string = '';

  if (status === 401) {
    returnValue = '401 error';
  } else if (status >= 400 && status < 500) {
    returnValue = 'user error';
  } else if (status >= 500) {
    returnValue = 'server error';
  }

  return returnValue;
};

export default handleErrorStatus;
