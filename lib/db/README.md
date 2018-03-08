# DB
---
Module for executing PostgreSQL database queries.

### Dependencies
* PostgreSQL
* pg

### File Structure
```fs
db
|___ config.js // used for setting initial configuration.
|___ index.js  // module's entry point
|___ README.md // this file
|___ test.js   // application tests
```
### Configuration
In order to create a configuration file run the following command:
```sh
npm run config-db
```
This will prompt you through the required configuration settings.

### Implementation
```js
const db = require('db');

db.query('SELECT NOW()').then((results) => {
  console.log(results);
}, (err) => {
  console.log(err);
})
```

### Testing
To run tests for this module alone run:
```sh
npm run test-db
```

For a bundle of all tests run:
```sh
npm test
```
