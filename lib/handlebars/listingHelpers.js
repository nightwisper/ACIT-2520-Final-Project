const db = require('../db');

module.exports = {
  getListings: () => {
    db.query("SELECT * FROM listings;").then((results)=>{
      return results.rows
    }).catch((err)=> {
      console.log(err);
    });
  }
}
