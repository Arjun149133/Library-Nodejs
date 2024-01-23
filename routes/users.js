const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title:"you are so cool "});
});

module.exports = router;
