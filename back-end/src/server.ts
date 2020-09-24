import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import config from './config/db';
import executeQuery from './services/ExecuteQuery';
// import routes from './routes';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (_, res) => {
  return res.json({ message: 'Hello World' });
});

app.post('/query', (req, res) => {
  const { author, query } = req.body;

  if (author && query) {
    try {
      const connection = mysql.createConnection(config);

      const result = executeQuery({ author, query }, connection);
      console.log('Result is: ', result);

      // return res.json(result);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
});

app.listen(3333, () => {
  console.log('🚀 Server runing');
});
