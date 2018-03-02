// SYS VAR //
var PORT = 8080 || process.env.PORT;

// External Library Imports //
const express = require('express');
const path = require('path');
var app = express();

// Static Paths //

var pF = path.resolve(__dirname, "pages");

app.use('/public', express.static(pF));

// Custom Module Imports //

const db = require('./modules/db');

// MiddleWare

app.get('/', (req, resp) => {
  resp.sendFile(pF + '/index.html');
})

app.post('/listings/getListings', (req, resp) => {
  console.log("Attempt to retrive listings");
})
app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}.`);
})
