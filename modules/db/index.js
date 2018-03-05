const { Pool } = require('pg');
const fs       = require('fs');
const config   = require('../../config-files/db-config.json');

const pool = new Pool(config);

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
