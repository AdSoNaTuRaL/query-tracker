import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import config from './config/db';
import teste from './services/teste';
// import routes from './routes';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (_, res) => {
  return res.json({ message: 'Hello World' });
});

app.post('/query', async (req, res) => {
  const { author, query } = req.body;

  try {
    if (author && query) {
      const connection = mysql.createConnection(config);

      const result = teste({ author, query }, connection);

      console.log('Resultado endpoint is: ', result);
      return res.json(result);
    }
    return res.status(400).json({ error: 'Parametros incorretos' });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

app.listen(3333, () => {
  console.log('🚀 Server runing');
});
