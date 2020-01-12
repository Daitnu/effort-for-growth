import bcrypt from "bcryptjs";
import { getRepository } from "typeorm";
import { User } from "../entity";
import { ILogin, ISignUp } from "../@types/account";

// TODO : VALIDATION
export const login = async ({ id, pw }: ILogin): Promise<ILogin> => {
  const userRepo = getRepository(User);
  const user: ILogin = await userRepo.findOne({ id });
  if (!user) {
    throw "존재하지 않는 유저입니다";
  }

  const { pw: hashedPw } = user;
  const isSamePassword: boolean = await bcrypt.compare(pw, hashedPw);
  if (!isSamePassword) {
    throw "비밀번호 일치안함.";
  }

  return user;
};

export const signUp = async ({ id, pw, name }: ISignUp): Promise<ISignUp> => {
  const userRepo = getRepository(User);
  const salt = await bcrypt.genSalt(10);
  const hashedPw = await bcrypt.hash(pw, salt);
  const newUser = new User();
  newUser.id = id;
  newUser.pw = hashedPw;
  newUser.name = name;

  return await userRepo.save(newUser);
};
