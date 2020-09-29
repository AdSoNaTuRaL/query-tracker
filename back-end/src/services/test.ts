import mysql from 'mysql';

interface IQuery {
  author: string;
  query: string;
}

interface ICallback {
  (message: string | undefined, affected?: number, changed?: number): void;
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
  callback: ICallback,
): void {
  // execute statement from post
  conn.query(query, (err, results) => {
    if (err) {
      insertQuery({ author, query }, 0, conn);
      return callback(err.sqlMessage);
    }
    insertQuery({ author, query }, 1, conn);
    return callback(results.message, results.affectedRows, results.changedRows);
  });
}

export default executeQuery;
