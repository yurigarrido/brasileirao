import { Request, Response, NextFunction } from 'express';
import User from '../models/users';

const email = (req: Request, res:Response, next:NextFunction) => {
  const { email } = req.body;

  if(!email) return res.status(401).json({ sucess: false, data: {}, token: null, message: 'email is required' });

  next();
};

const password = async (req: Request, res:Response, next:NextFunction) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email }, raw: true });

  if(!password) return res.status(401).json({ sucess: false, data: {}, token: null, message: 'password is required' });
  if(!user) return res.status(401).json({ sucess: false, data: {}, token: null, message: 'user not exist' });
  if(user.password !== password) return res.status(401).json({ sucess: false, data: {}, token: null, message: 'not authorized' });

  next();
};

export default {
  email,
  password,
};
