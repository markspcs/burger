const mysql = require('mysql');

var connection;
//The below for JAWSDB_URL is what I've seen for heroku to work. Testing it. https://blog.edna.tech/2018/08/10/connecting-eat-da-burger-to-jawsdb-on-heroku/
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test',
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