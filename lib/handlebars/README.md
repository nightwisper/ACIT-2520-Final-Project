# Encryption
---
Module for executing HBS helper registration.

### Dependencies
* HBS

### File Structure
```fs
handlebars
|___ index.js  // module's entry point
|___ README.md // this file
|___ generalHelpers.js   // Helper modules
```

### Implementation
```js
const hbs = require('./lib/handlebars');

app.set('view engine', 'hbs');
```
