import { Router } from 'express';

import login from '../controllers/login';
import middleware from '../middlewares/login';

const loginRouter = Router();

loginRouter.post('/',
  middleware.email,
  middleware.password,
  login);


export default loginRouter;
