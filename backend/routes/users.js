var express = require('express');
var router = express.Router();
var userModel = require("../Models/Users")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// _____________________ SIGN IN (inscription) _____________________
router.get('/adduser', function(req, res, next) {
  res.json('sign in OK');
});


// _____________________ SIGN UP (connexion) _____________________
router.get('/connection', function(req, res, next) {
  res.json('sign UP OK');
});

// _____________________ LOG OUT (déconnexion) _____________________
router.get('/logout', function(req, res, next) {
  res.json('logout OK');
});


module.exports = router;
