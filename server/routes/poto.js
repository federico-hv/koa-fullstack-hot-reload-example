var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', route);


function route(req, res, next) {
  res.send('SHITTT THIS WORKS');
}

module.exports = router;
