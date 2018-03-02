const { Pool } = require('pg');
const config = require('./config.js');

const pool = new Pool();


module.exports = {
  query: (sql, params) => {
    return new Promise((resolve, reject) => {
      pool.query(sql, params, (err, resp) => {
        if(err){
          reject(err);
        }
        resolve(resp.rows);
      })
    })
  }
}
