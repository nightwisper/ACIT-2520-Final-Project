const express = require('express');
const path    = require('path');

const router  = express.Router();
var pF = path.resolve(__dirname, "../../pages");

router.get('/', (req, resp) => {
  resp.sendFile(pF + '/html/index.html');
})

router.post('/listings/getListings', (req, resp) => {
  console.log("Attempt to retrive listings");
})

module.exports = router;
