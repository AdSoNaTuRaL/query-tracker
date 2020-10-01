import mysql from 'mysql';

interface IQuery {
  author: string;
  query: string;
}

interface IQuery2 {
  author: string;
  text: string;
}

interface ICallback {
  (
    error: number,
    message: string | undefined,
    affected?: number,
    changed?: number,
  ): void;
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

// function executeQuery(
//   { author, query }: IQuery,
//   conn: mysql.Connection,
//   callback: ICallback,
// ): void {
//   // execute statement from post
//   conn.query(query, (err, results) => {
//     if (err) {
//       insertQuery({ author, query }, 1, conn);
//       return callback(1, err.sqlMessage);
//     }
//     insertQuery({ author, query }, 0, conn);
//     return callback(
//       0,
//       'Query lanzada con sucesso',
//       results.affectedRows,
//       results.changedRows,
//     );
//   });
// }

function executeQuery(
  { author, text }: IQuery2,
  conn: mysql.Connection,
  callback: ICallback,
): void {
  // execute statement from post
  const querys = text.split(';');
  let errorQuery = false;

  querys.forEach(query => {
    if (query) {
      conn.query(query, (err, results) => {
        if (err) {
          insertQuery({ author, query }, 1, conn);
          errorQuery = true;
          // return callback(1, err.sqlMessage);
        } else {
          insertQuery({ author, query }, 0, conn);
          // return callback(
          //   0,:
          //   'Query lanzada con sucesso',
          //   results.affectedRows,
          //   results.changedRows,
          // );
        }
      });
    } else {
      // Do something
    }
  });
  console.log(errorQuery);
}

export default executeQuery;
