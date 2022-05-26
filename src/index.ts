const express = require('express');
require('dotenv').config();

import loginRouter from './routers/login';


const app = express();
app.use(express.json());

app.use('/login', loginRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`escutando na porta ${PORT}`);
});
