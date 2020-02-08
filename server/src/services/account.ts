import bcrypt from "bcryptjs";
import { getRepository } from "typeorm";
import { User } from "../entity";
import { ILogin, ISignUp } from "../@types/account";
import { ValidationError } from "apollo-server";

const userRepo = getRepository(User);

export const login = async ({ id, pw }: ILogin): Promise<ILogin> => {
  const user: ILogin = await userRepo.findOne({ id });
  if (!user) {
    throw new ValidationError(
      "가입하지 않은 아이디이거나, 잘못된 비밀번호입니다."
    );
  }

  const { pw: hashedPw } = user;
  const isEqualPassword: boolean = await bcrypt.compare(pw, hashedPw);
  if (!isEqualPassword) {
    throw new ValidationError(
      "가입하지 않은 아이디이거나, 잘못된 비밀번호입니다."
    );
  }

  //TODO : JWT 토큰 발급

  return user;
};

export const signUp = async ({ id, pw, name }: ISignUp): Promise<ISignUp> => {
  const salt = await bcrypt.genSalt(10);
  const hashedPw = await bcrypt.hash(pw, salt);
  const newUser = new User();
  newUser.id = id;
  newUser.pw = hashedPw;
  newUser.name = name;

  return await userRepo.save(newUser);
};
