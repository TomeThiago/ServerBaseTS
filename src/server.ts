import express from 'express';
import dotenv from 'dotenv';

import routes from './routes';
import './database';

dotenv.config();
const app = express();

app.disable("x-powered-by");
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});