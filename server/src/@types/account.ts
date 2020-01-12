export interface ILogin {
  no?: number;
  id: string;
  pw: string;
}

export interface ISignUp extends ILogin {
  name: string;
}

export interface IResponseSignup {
  no: number;
  id: string;
  name: string;
}
