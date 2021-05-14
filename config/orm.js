// Import MySQL connection.

const connection = require('./connection.js');

const orm = {
  all: function (table, cb) {
    connection.query(`SELECT * FROM ${table}`, (err,result) => {
      if (err) throw err;
      cb(result);
    })
  },


insertOne(reqBody, name, cb) {
  connection.query('INSERT INTO ?? SET burger_name = ?', [reqBody, name], (err, result) => {
    if (err) throw err;
    cb(result);
  })
},

updateOne(id, cb) {
  connection.query(`UPDATE burgers SET devoured = 1 WHERE id = ?`, [id], (err, result) => {
    if (err) throw err;
    cb(result)
  })
}

}

module.exports = orm;
