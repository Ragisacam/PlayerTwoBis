var express = require('express');
var router = express.Router();

var uid2 = require("uid2");
var SHA256 = require("crypto-js/sha256");
var encBase64 = require("crypto-js/enc-base64");

var userModel = require("../Models/Users");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// _____________________ SIGN UP (inscription) _____________________
router.post('/adduser', async function(req, res, next) {

  var error = []
  var result = false
  var saveUser = null
  var token = null

  const pseudoExists = await userModel.findOne({
    pseudo: req.body.pseudoFromFront
  })

  if(pseudoExists != null){
    error.push('Pseudo déjà présent')
  }

  const emailExists = await userModel.findOne({
    mail: req.body.mailFromFront
  })

  if(emailExists != null){
    error.push('Email déjà présent')
  }

  if(req.body.pseudoFromFront == ''
  || req.body.mailFromFront == ''
  || req.body.passwordFromFront == ''
  ){
    error.push('Champs vides')
  }

  if(error.length == 0){

    var salt = uid2(32)
    var newUser = new userModel({
      pseudo:       req.body.pseudoFromFront,
      password :    SHA256(req.body.passwordFromFront+salt).toString(encBase64),
      mail:         req.body.mailFromFront,
      birthday:     req.body.birthdayFromFront,
      CP:           req.body.cpFromFront,
      sexe:         req.body.sexeFromFront,
      langue:       req.body.langueFromFront,
      salt :        salt,
      token:        uid2(32)
    })

    const saveUser = await newUser.save()

    if(saveUser){
      result = true
      token = saveUser.token
    }
  }
  
  res.json({result, saveUser, error, token});
});


// _____________________ SIGN IN (connexion) _____________________
router.post('/connection', async function(req, res, next) {

  var error = []
  var result = false
  var pseudoExists = null
  var emailExists = null
  var token = null

  if(req.body.pseudoFromFront == ''
  || req.body.mailFromFront == ''
  || req.body.passwordFromFront == ''
  ){
    error.push('Champs vides')
  }



  if(error.length == 0){
      const pseudoExists = await userModel.findOne({
      pseudo:      req.body.pseudoFromFront,
    })
      const emailExists = await userModel.findOne({
      mail:        req.body.mailFromFront,
    })



    if(pseudoExists){
      const passwordEncryptFromPseudo = SHA256(req.body.passwordFromFront + pseudoExists.salt).toString(encBase64)
      if(passwordEncryptFromPseudo == pseudoExists.password){
        result = true
        token = pseudoExists.token
      } else {
        result = false
        error.push('Mot de passe incorrect')
      }
    } else if(emailExists){
      const passwordEncryptFromEmail = SHA256(req.body.passwordFromFront + emailExists.salt).toString(encBase64)
      if(passwordEncryptFromEmail == emailExists.password){
        result = true
        token = emailExists.token
      } else {
        result = false
        error.push('Mot de passe incorrect')
      }
    } else {
      error.push("Email ou pseudo invalide")
    }
  }
  
  res.json({result, pseudoExists, emailExists, error, token});
});






// _____________________ LOG OUT (déconnexion) _____________________
router.get('/logout', function(req, res, next) {
  res.json('logout OK');
});


module.exports = router;
