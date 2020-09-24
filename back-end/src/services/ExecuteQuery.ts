import mysql from 'mysql';

interface IQuery {
  author: string;
  query: string;
}

function executeQuery({ author, query }: IQuery, conn: mysql.Connection): void {
  // create connection with DB
  console.log('💠 DB Connected');

  // execute statement from post
  conn.query(query, (err, result) => {
    if (err) {
      conn.query(
        'INSERT INTO query_tracker (name, query, error) VALUES (?, ?, 0)',
        [author, query],
      );

      return err.sqlMessage;
    }

    conn.query(
      'INSERT INTO query_tracker (name, query, error) VALUES (?, ?, 1)',
      [author, query],
    );

    return result.message;
  });
}

export default executeQuery;
