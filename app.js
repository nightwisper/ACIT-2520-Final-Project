console.log(Date.now());

// SYS VAR //
var PORT = 8080 || process.env.PORT;

// External Library Imports //
const express = require('express');
const path = require('path');

// Custom Library Imports //
const router = require('./lib/router');

var app = express();

var src = path.resolve(__dirname, "pages/bundle");

app.use('/src', express.static(src))

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}.`);
});
