import * as jwt from "jsonwebtoken";

const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env;

export const generateAccessToken = (fields): String => {
  const now = Date.now() / 1000;
  const accessToken = jwt.sign({ foo: "bar" }, ACCESS_TOKEN_SECRET, {
    algorithm: "RS256",
    iss: "dainit",
    iat: now,
    exp: "30m"
  });

  return accessToken;
};

export const generateRefreshToken = (fields): String => {
  const now = Date.now() / 1000;
  const refreshToken = jwt.sign({ foo: "bar" }, REFRESH_TOKEN_SECRET, {
    algorithm: "RS256",
    iss: "dainit",
    iat: now,
    exp: "30d"
  });
  return refreshToken;
};

export const verifyToken = async (token, secretKey) => {
  let decode;
  try {
    decode = await jwt.verify(token, secretKey);
  } catch (err) {
    throw err;
  }
  return decode;
};

export const parseTokenFromHeader = ({ header }) => {
  const authorization = header["Authorization"];
  if (!authorization) {
    throw "토큰이 없누..";
  }

  const [tokenType, token] = authorization.split(" ");
  if (tokenType !== "Bearer") {
    throw "토큰이 없누";
  }
  return token;
};
