const bcrypt = require('bcrypt');

module.exports = {
  hash:(password) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 5).then((hash) => {
          resolve(hash);
        }, (err) => {
          reject(err);
        });
    });
  },
  validate:(password, hash) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, hash).then((res) => {
        resolve(res);
      }, (err => {
        reject(err);
      }));
    })
  }
}
