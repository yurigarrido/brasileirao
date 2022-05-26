import { verify, sign, SignOptions } from 'jsonwebtoken';

import { readFileSync } from 'fs';

import IUser from '../../interfaces/user';

const FILE_SECRET_KEY = 'jwt.key';

const SECRET_KEY = readFileSync(FILE_SECRET_KEY, { encoding: 'utf-8' });

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (user: IUser) => {
  const token = sign(user, SECRET_KEY, jwtConfig as SignOptions);
  return token;
};

const verifyToken = (token: string) => {
  const dataUser = verify(token, SECRET_KEY);
  return dataUser;
};

const auth = { createToken, verifyToken };
export default auth;
