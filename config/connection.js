// Set up MySQL connection.
const mysql = require('mysql');

let connection;

// if(process.env.PASSWORD){
//   connection = mysql.createConnnection(process.env.PASSWORD);
// } else {

// const connection = mysql.createConnection({
  
//     host: 'localhost',  
//     port: 3306,
//     user: 'root',      
//     password: process.env.PASSWORD,
//     database: 'burgers_db',
//     insecureAuth : true
 
  
// });
// };

connection = mysql.createConnection({
  
  host: 'localhost',  
  port: 3306,
  user: 'root',      
  password: "@!!i311C@$h*",
  database: 'burgers_db',
  insecureAuth : true
});
// Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;
