console.log(Date.now());

// SYS VAR //
var PORT = 8001 || process.env.PORT;

// External Library Imports //
const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require("body-parser");

// Custom Library Imports //
const router = require('./lib/router');
const hbs = require('./lib/handlebars');

var app = express();

var src = path.resolve(__dirname, "pages_script");

app.set('view engine', 'hbs');
console.log(src);
app.use('/src', express.static(src));

app.use(bodyParser.urlencoded({extended:false}));

app.use(session({
  secret: 'Keyboard Cat',
  resave: true,
  saveUninitialized: true
}));

app.use(function(req, res, next) {
  res.locals.session = req.session;
  console.log(res.locals.session);
  next();
});

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}.`);
});
