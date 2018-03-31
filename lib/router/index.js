const express = require('express');
const path    = require('path');

const router  = express.Router();
var pF = path.resolve(__dirname, "../../pages");

router.get('/', (req, resp) => {
  resp.render('main.hbs');
});

router.get('/register', (req, resp) => {
  resp.render('register.hbs');
});

router.get('/newitem', (req, resp) => {
  resp.render('newitem.hbs');
});

router.get('/about', (req, resp) => {
  resp.render('about.hbs');
});

router.post('/listings/getListings', (req, resp) => {
  console.log("Attempt to retrive listings");
  resp.send(true);
});

module.exports = router;
