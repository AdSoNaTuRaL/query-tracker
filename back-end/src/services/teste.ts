import mysql from 'mysql';

interface IQuery {
  author: string;
  query: string;
}

function insertQuery(
  { author, query }: IQuery,
  error: number,
  conn: mysql.Connection,
): void {
  conn.query(
    'INSERT INTO query_tracker (name, query, error) VALUES (?, ?, ?)',
    [author, query, error],
  );
}

function executeQuery(
  { author, query }: IQuery,
  conn: mysql.Connection,
): string {
  let message: string | undefined = '';
  // create connection with DB
  console.log('💠 DB Connected');

  // execute statement from post
  conn.query(query, (err, result) => {
    if (err) {
      insertQuery({ author, query }, 0, conn);

      message = err.sqlMessage;
      console.log('sql message error is :', err.sqlMessage);
    } else {
      insertQuery({ author, query }, 1, conn);
      message = result.message;
      console.log('sql message success is :', result.message);
    }
  });

  return message;
}

export default executeQuery;
