const db = require('../db');
const encrypt = require('../encryption');

module.exports = {
  loginUser: (email, password) => {
    console.log()
    db.query(`SELECT password FROM users WHERE email=$1`, [email]).then((results) => {
      if(results.rows[0]){
        encrypt.validate(password, results.rows[0]).then((results) => {
          if(results){
            session.logged = true;
            location.reload();
          }
        });
      } else {
        alert("User does not exist")
      }

    }).catch((err) => {
      console.log(err);
    });
  }
}
