// SYS VAR //
var PORT = 8080 || process.env.PORT;

// External Library Imports //
const express = require('express');
const path = require('path');

// Custom Library Imports //
const router = require('./modules/router');

var app = express();

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}.`);
})
