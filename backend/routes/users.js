var express = require('express');
var router = express.Router();
var userModel = require("../Models/Users")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// _____________________ SIGN UP (inscription) _____________________
router.post('/adduser', async function(req, res, next) {

  var error = []
  var result = false
  var saveUser = null

  const data = await userModel.findOne({
    mail: req.body.mailFromFront
  })

  if(data != null){
    error.push('email déjà présent')
  }

  if(req.body.pseudoFromFront == ''
  || req.body.mailFromFront == ''
  || req.body.passwordFromFront == ''
  ){
    error.push('champs vides')
  }

  //REVOIR COURS CLEFS ETRANGERES ET SSDOC (playerTwo blacklist idGame idWish)
  //18min
  if(error.length == 0){
    var newUser = new userModel({
      pseudo:       req.body.pseudoFromFront,
      password :    req.body.passwordFromFront,
      mail:         req.body.mailFromFront,
      birthday:     req.body.birthdayFromFront,
      CP:           req.body.cpFromFront,
      sexe:         req.body.sexeFromFront,
      langue:       req.body.langueFromFront

      // salt:         req.body.saltFromFront,
      // token :       req.body.tokenFromFront,
      // description:  req.body.descriptionFromFront,
      // avatar :      req.body.avatarFromFront,
      // service:      req.body.serviceFromFront,
      // battletag:    req.body.battletagFromFront,
      // playerTwo :   [{type: mongoose.Schema.Types.ObjectId, ref:"users"}],
      // blacklist:    [{type: mongoose.Schema.Types.ObjectId, ref: "users"}],
      // idGame :      [{type: mongoose.Schema.Types.ObjectId, ref: "games"}],
      // idWish:       {type: mongoose.Schema.Types.ObjectId, ref: "wishs"},
    })

    const saveUser = await newUser.save()

    if(saveUser){
      result = true
    }
  }
  
  res.json({result, saveUser, error});
});


// _____________________ SIGN IN (connexion) _____________________
router.get('/connection', function(req, res, next) {
  res.json('sign UP OK');
});

// _____________________ LOG OUT (déconnexion) _____________________
router.get('/logout', function(req, res, next) {
  res.json('logout OK');
});


module.exports = router;
