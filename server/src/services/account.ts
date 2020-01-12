import bcrypt from "bcryptjs";
import { getRepository } from "typeorm";
import { User } from "../entity";

interface ILogin {
  id: string;
  pw: string;
}

// TODO : VALIDATION
export const login = async ({ id, pw }: ILogin): Promise<Boolean> => {
  const userRepo = getRepository(User);
  const user = await userRepo.findOne({ id });
  if (!user) {
    throw "존재하지 않는 유저입니다";
  }

  const { pw: hashedPw } = user;
  const isSamePassword: boolean = await bcrypt.compare(pw, hashedPw);
  if (!isSamePassword) {
    throw "비밀번호 일치안함.";
  }

  return true;
};

// const salt = await bcrypt.genSalt(10);
// const hashed = await bcrypt.hash(pw, salt);
