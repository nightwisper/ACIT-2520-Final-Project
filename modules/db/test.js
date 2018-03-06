/*
 * test.js
 *
 * Runs module tests.
 *
 * @Author: Lucas Silva
 */

const fs = require('fs');
var passed = 0;
var errors = 0;

// Checks if config file exists and runs tests
fs.access('./config-files/db-config.json', (err) => {
  if(err){
    console.log("Config file doesn't exist. Run: \n\t npm run config-db\n\n");
    console.log("No tests passed.")
    process.exit();
  }

  console.log("Config file exists");
  const db = require('./index.js');
  passed += 1;

  // Tests if connection was successful
  db.query('SELECT NOW()').then((result) => {
    console.log("Connection test passed.");
    passed +=1;
  }, (err) => {
    console.log("Connection test failed:\n\n" + err);
    errors +=1;
  });

  // Tests if able to read from table users
  db.query('select * from users').then((result) => {
    console.log('Read from table users was successful.');
    passed +=1;
  }, (err) => {
    console.log('Error reading from table users:\n' + err + '\n');
    errors +=1;
  });

  // Tests if able to read from table listings
  db.query('select * from listins').then((result) => {
    console.log('Read from table listins was successful.');
    passed +=1;
  }, (err) => {
    console.log('Error reading from table listins:\n' + err);
    errors +=1;
  });
});

// Node process hangs after running the tests this exits it so the test.sh script can proceed to the next test.
setInterval(()=>{
  console.log(`\n${passed} tests passed. ${errors} errors.\n`);
  process.exit();
}, 100);
