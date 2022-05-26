import { Request, Response } from 'express';
import service from '../services/login';

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await service.login(email, password);
  return res.status(200).json({ sucess: true, data: user, message: 'user found' });
};

export default login;
