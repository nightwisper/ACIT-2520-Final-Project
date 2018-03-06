/* index.js
 *
 * Creates a PostgreSQL database pool for handling queries.
 *
 * @Author: Lucas Silva
 */

// IMPORTS
const { Pool } = require('pg');

// config file
const config   = require('../../config-files/db-config.json');

// Creates pool with config details. If missing run npm run config-db.
const pool = new Pool(config);

module.exports = {
  query: (sql, params) => {
    return new Promise((resolve, reject) => {
      // Query execution.
      pool.query(sql, params, (err, resp) => {
        if(err){
          reject(err);
        }
        resolve(resp);
      })
    })
  }
}
