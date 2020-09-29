import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import config from './config/db';
import test from './services/test';
// import routes from './routes';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (_, res) => {
  return res.json({ message: 'Hello World' });
});

app.post('/query', (req, res) => {
  const { author, query } = req.body;

  try {
    if (author && query) {
      const connection = mysql.createConnection(config);

      test({ author, query }, connection, result => {
        return res.json(result);
      });
    } else {
      return res.status(400).json({ error: 'Invalid parameters' });
    }
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

app.listen(3333, () => {
  console.log('🚀 Server runing');
});
