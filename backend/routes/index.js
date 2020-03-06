var express = require('express');
var router = express.Router();
var userModel = require("../Models/Users")
var gameModel = require("../Models/Games")
var wishModel = require("../Models/Wishs")
var plateformModel = require("../Models/Plateforms")
var teamModel = require("../Models/Teams")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('/ScreenHome', { title: 'Express' });
});
// ______________ PLATEFORMS ______________ (ok)
//ajout de plateform (use postman)
router.post('/plateform', async function(req, res, next) {
  // console.log("req body plateform ",req.body);
  var newPlateform = new plateformModel ({
    plateform:   req.body.plateform,
    img:         req.body.img,
    service:     req.body.service,
  });
  
  newPlateform.save(function(error, plateform){
    if (error){
      console.log("err",error);
      res.json({error})
    } else if (plateform){
      console.log(plateform);
      res.json({plateform})
    }
  });
});

//envoi Plateform au front
router.get('/plateform', async function(req, res, next) {
  var plateform = await plateformModel.find()
  res.json(plateform)
});

//chercher quel service/image correspond à la plateforme sélectionné en front 
router.post('/service', async function(req, res, next) {
  var findPlateform = await plateformModel.findOne({plateform: req.body.plateformSelect})
  //puis le renvoyé au front
  res.json(findPlateform)
});


// ______________ ADD GAME ______________
router.post('/addgame', async function(req, res, next) {
  console.log("req body addgame",req.body);
  
  var newGame = new gameModel ({
    plateforme:   req.body.plateforme,
    name:         req.body.name,
    cover:        req.body.cover,
    background:   req.body.background,
    description:  req.body.description,
    website:      req.body.website,
    rating :      req.body.rating,
    category:     req.body.category
  });
  
  newGame.save(function(error, game){
    if (error){
      console.log("err",error);
      res.json({error})
    } else if (game){
      console.log(game);
      res.json({game})
    }
  });
});

// ______________ TEAMS ______________
router.post('/addteam', async function(req, res, next) {
  console.log("req body addteam",req.body);
  
  var newTeam = new teamModel ({
    idGame:       req.body.idGame,
    idWish:       req.body.idWish,
    name:         req.body.name,
    avatar:       req.body.avatar,
    philosophie:  req.body.philosophie,
    description:  req.body.description,
    admin:        req.body.admin,
    sousadmin:    req.body.sousadmin,
    regular :     req.body.regular,
    actu:         req.body.actu,
  });
  
  newTeam.save(function(error, team){
    if (error){
      console.log("err",error);
      res.json({error})
    } else if (team){
      console.log(team);
      res.json({team})
    }
  });
});

// ______________ WISHS ______________
router.post('/addwish', async function(req, res, next) {
  console.log("req body wish ",req.body);
  
  var newWish = new wishModel ({
    plateforme:     req.body.plateforme,
    mode:           req.body.mode,
    age:            req.body.age,
    disponibility:  req.body.disponibility,
    sexe:           req.body.sexe,
    langue:         req.body.langue,
    team :          req.body.team,
    idGame:         req.body.idGame
  });
  
  newWish.save(function(error, wish){
    if (error){
      console.log("err",error);
      res.json({error, result: false})
    } else if (wish){
      console.log(wish);
      res.json({wish, result: true})
    }
  });
});


module.exports = router;