import bcrypt from "bcryptjs";
import { getRepository } from "typeorm";
import { User } from "../entity";

interface ILogin {
  id: string;
  pw: string;
}

export const login = async ({ id, pw }: ILogin): Promise<Boolean> => {
  console.log(`id는 ${id}`);

  if (pw !== "가나다") {
    return false;
  }

  return true;
};
