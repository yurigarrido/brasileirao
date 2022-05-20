import { Request, Response } from 'express';

const login = async (req: Request, res: Response) => {

  return res.status(200).json({ message: 'ok' });
};

export default login;

