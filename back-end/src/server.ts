import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import { v4 } from 'uuidv4';
import config from './config/db';
import ExecuteQuery from './services/ExecuteQuery';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (_, res) => {
  return res.json({ message: 'Hello World' });
});

// eslint-disable-next-line consistent-return
app.post('/query', (req, res) => {
  const { author, query } = req.body;

  if (author && query) {
    const connection = mysql.createConnection(config);

    ExecuteQuery(
      { author, query },
      connection,
      (error, message, affected, changed) => {
        return res.json({
          id: v4(),
          error,
          mensaje: message,
          affectedRows: affected,
          changedRows: changed,
        });
      },
    );
  } else {
    return res.status(400).json({ error: 'Invalid parameters' });
  }
});

app.listen(3333, () => {
  console.log('🚀 Server runing');
});
