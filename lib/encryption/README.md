# Encryption
---
Module for executing Bcrypt encryption and validation.

### Dependencies
* bcrypt

### File Structure
```fs
encryption
|___ index.js  // module's entry point
|___ README.md // this file
|___ test.js   // application tests
```

### Implementation
```js
const encrypt = require('/module/encrypt');

encrypt.hash(password).then((results) => {
  console.log(results);
}, (err) => {
  console.log(err);
})

encrypt.validate(password, hash).then((results) => {
  console.log(results);
}, (err) => {
  console.log(err);
})
```

### Testing
To run tests for this module alone run:
```sh
npm run test-encrypt
```

For a bundle of all tests run:
```sh
npm test
```
