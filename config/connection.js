var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cbr954rr',
    database: 'burger_db',
  });
}

connection.connect((err) => {
  if (err) {
    console.error(`error in connection.js connection.connect: ${err}` );
    return;
  }
  console.log(`connection id ${connection.threadId}`);
});

module.exports = connection;