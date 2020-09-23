import express, { response } from 'express';
import mysql from 'mysql';
import cors from 'cors';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(cors());

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '45894589',
// });

// connection.connect(error => {
//   if (error) throw error;
//   console.log('Connected');
// });

app.get('/', (_, res) => {
  return res.json({ message: 'Hello World' });
});

app.post('/query', req => {
  const { author, query } = req.body;

  console.log({ author, query });
});

app.listen(3333, () => {
  console.log('=> server runing');
});
