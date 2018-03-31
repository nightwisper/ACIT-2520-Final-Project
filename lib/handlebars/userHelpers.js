const db = require('../db');
const encrypt = require('../encryption');

module.exports = {
  loginUser: (email, password) => {
    console.log(running)
    db.query(`SELECT password FROM users WHERE email=$1`, [email]).then((results) => {
      console.log(results)
      // encrypt.validate(password, results.row[0])
    });
  }
}
