var express = require('express');
var router = express.Router();

/* GET cocochild. */
router.get('/', function(req, res) {
  res.render('cocochild');
});

router.get('/result', function(req, res) {
  res.render('result');
});

module.exports = router;
