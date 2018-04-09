const express = require('express');
const path    = require('path');
const { Client } = require('pg');
const db = require('../db');
const encrypt = require('../encryption');
const dbURL = "postgres://postgres:lucassilva!@localhost:5432/auctionsim"

const router  = express.Router();
var pF = path.resolve(__dirname, "../../pages");

const client = new Client({
  connectionString: dbURL
})
client.connect()

router.get('/', (req, resp) => {
  if(req.session.user) {
    resp.render('main.hbs', {
      loggedIn:true
    });
  }
  resp.render('main.hbs');
});

router.get('/u', (req, resp) => {
  if(req.session.user) {
    resp.render('tmp.hbs')
  }
  resp.render('tmp.hbs');
});

router.get('/register', (req, resp) => {
  resp.render('register.hbs');
});

router.get('/newitem', (req, resp) => {
  resp.render('newitem.hbs');
});

router.get('/about', (req, resp) => {
  resp.render('about.hbs')
});

///////////////////////////////////////////
router.post('/u/register', (req, resp) => {
  console.log("register user")
  encrypt.hash(req.body.password).then((hash) => {
    client.query("INSERT INTO users (email, password) VALUES ($1, $2) RETURNING user_id", [req.body.email, hash], (err, res) => {
      console.log(err, res)
      client.end()
    })
  }).catch((err)=> {
      console.log(err)
      return false;
  });
});

router.post('/u/login', (req, resp) => {
  console.log("login user")
  client.query("SELECT email, password from users where email=$1", [req.body.email], (err, res) => {
    console.log(err, res)
    encrypt.validate(req.body.password, res.rows[0].password).then((hash) => {
      req.session.user=req.body.email
      resp.send(true);
    }).catch((err)=> {
        console.log(err)
        return false;
    });
    client.end()
  })

});

router.post('/l/register', (req, resp) => {
  console.log("register item")
  client.query("INSERT INTO listings (item, min_price, description) VALUES ($1, $2, $3) RETURNING listing_id", [req.body.item, req.body.price, req.body.desc], (err, res) => {
    console.log(err, res)
    resp.send(true)
    client.end()
  })
});

router.post('/l/getAll', (req, resp) => {
  console.log("Attempt to retrive listings");
  client.query("SELECT item, description from listings", (err, res) => {
    console.log(err, res)
    resp.send(res.rows)
    client.end()
  })
});

router.post('/l/bid', (req, resp) => {
  resp.send(true);
});

module.exports = router;
