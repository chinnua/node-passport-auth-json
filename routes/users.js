var express = require('express');
var router = express.Router();
var auth = require('../auth.js');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn('/');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/home', ensureLoggedIn, function (req, res, next) {
  res.render('users/userhome', {
    UserData: req.user
  });
});

module.exports = router;