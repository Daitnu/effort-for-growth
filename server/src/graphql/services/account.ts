import bcrypt from "bcryptjs";
import { getRepository } from "typeorm";
import { User } from "../../entity";
import { ILogin, ISignUp, IResponseSignup } from "../../@types/account";
import { ValidationError } from "apollo-server";
import { ERROR } from "../../libraries/exception/constant";

const userRepo = getRepository(User);

export const login = async ({ id, pw }: ILogin): Promise<ILogin> => {
  const user: ILogin = await userRepo.findOne({ id });
  if (!user) {
    throw new ValidationError(ERROR.ACCOUNT.INVALID_ID_OR_PW);
  }

  const { pw: hashedPw } = user;
  const isEqualPassword: boolean = await bcrypt.compare(pw, hashedPw);
  if (!isEqualPassword) {
    throw new ValidationError(ERROR.ACCOUNT.INVALID_ID_OR_PW);
  }

  //TODO : JWT 토큰 발급

  return user;
};

export const signUp = async ({
  id,
  pw,
  name
}: ISignUp): Promise<IResponseSignup> => {
  const duplicatedUser: ILogin = await userRepo.findOne({ id });
  if (duplicatedUser) {
    throw new ValidationError(ERROR.ACCOUNT.DUPLICATED);
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPw = await bcrypt.hash(pw, salt);
  const user = new User();
  user.id = id;
  user.pw = hashedPw;
  user.name = name;

  const newUser: User = await userRepo.save(user);
  delete newUser.pw;
  return newUser;
};
