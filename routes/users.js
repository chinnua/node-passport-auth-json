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

router.get('/upload', ensureLoggedIn, function (req, res, next) {
  res.render('users/upload');
});

router.post('/upload', ensureLoggedIn, function (req, res, next) {
  console.dir(req.file);
  res.send(req.file);
});

router.get('/getcalendardata', ensureLoggedIn, function (req, res, next) {
  var calData = '[{"title":"All Day Event","start":"2018-06-01"},{"title":"Long Event","start":"2018-06-07","end":"2018-06-10"},{"id":999,"title":"Repeating Event","start":"2018-06-09T16:00:00+00:00"},{"id":999,"title":"Repeating Event","start":"2018-06-16T16:00:00+00:00"},{"title":"Conference","start":"2018-06-18","end":"2018-06-20"},{"title":"Meeting","start":"2018-06-19T10:30:00+00:00","end":"2018-06-19T12:30:00+00:00"},{"title":"Lunch","start":"2018-06-19T12:00:00+00:00"},{"title":"Birthday Party","start":"2018-06-20T07:00:00+00:00"},{"url":"http:\/\/google.com\/","title":"Click for Google","start":"2018-06-28"}]';
  res.send(calData);
});

module.exports = router;