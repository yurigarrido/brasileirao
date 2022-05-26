import { Request, Response, NextFunction } from 'express';

const email = (req: Request, res:Response, next:NextFunction) => {
  const { email } = req.body;

  if(!email) return res.status(401).json({ sucess: false, data: {}, token: null, message: 'email is required' });
  next();
};

const password = (req: Request, res:Response, next:NextFunction) => {
  const { password } = req.body;

  if(!password) return res.status(401).json({ sucess: false, data: {}, token: null, message: 'password is required' });
  next();
};

export default {
  email,
  password,
};
