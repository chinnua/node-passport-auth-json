var express = require('express');
var router = express.Router();
var auth = require('../auth.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  if (req.user) {
    res.redirect('user/home', 302);
  } else {
    res.render('index', {
      Error: req.flash('error')
    });
  }
});

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

router.post('/logon',
  auth.authenticate('login', {
    successRedirect: '/users/home',
    failureRedirect: '/',
    failureFlash: true
  })
);

module.exports = router;