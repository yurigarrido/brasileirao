import * as express from 'express';
import 'dotenv/config'
import login from './routers/login'

const app = express();

const accessControl: express.RequestHandler = (_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
  res.header('Access-Control-Allow-Headers', '*');
  next();
};
app.use(accessControl);

app.use('/login', login)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`escutando na porta ${PORT}`)
});
