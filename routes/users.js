var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('users route primary route');
});


router.get('/List', function(req, res, next) {
  res.send('users lists accessed');
});

module.exports = router;
