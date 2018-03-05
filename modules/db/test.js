const db = require('./index.js');

db.query('SELECT NOW()').then((result) => {
  console.log("Connection test passed.");
}, (err) => {
  console.log("Connection test failed:\n\n" + err);
});

setInterval(()=>{
  process.exit()
}, 50);
