const encrypt = require('./index.js');
var passed = 0;
var errors = 0;

var pass = 'sumPassword';
var test = '';

console.log(`Test password: ${pass}\n`);

// test password hashing
encrypt.hash(pass).then((hash) => {
  console.log(`Password hashing successful:\n\n\t${hash}`)
  test += hash;
  passed += 1;
}, (err) => {
  console.log(`Password hashing failed:\n\n${err}`);
  errors += 1;
});

// These next 2 tests need to be on a delay due to the processing time required for hashing the password.

setInterval(()=>{
  // Test compare with generated hash. Expected TRUE
  encrypt.validate(pass, test).then((res) => {
    if(res){
      console.log(`Compare to hash passed.\n Result: ${res}`);
      passed += 1;
      return true;
    }
    console.log(`Compare to hash failed.\n Result: ${res}`);
    errors += 1;
  }, (err) => {
    console.log(`Could not compare password to hash.\n\n${err}`);
    errors += 1;
  });

  // Test compare with random string. Expected FALSE
  encrypt.validate(pass, 'test').then((res) => {
    if(res){
      console.log(`Compare to random string failed.\n Result: ${res}`);
      errors += 1;
      return false;
    }
    console.log(`Compare to random string passed.\n Result: ${res}`);
    passed += 1;
  }, (err) => {
    console.log(`Could not compare password to random string.\n\n${err}`);
    errors += 1;
  });
}, 500);

// Node process hangs after running the tests this exits it so the test.sh script can proceed to the next test.
setInterval(()=>{
  console.log(`\n${passed} tests passed. ${errors} errors.\n`);
  process.exit();
}, 1000);
