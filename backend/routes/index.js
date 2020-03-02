var express = require('express');
var router = express.Router();
var userModel = require("../Models/Users")
var gameModel = require("../Models/Games")
var wishModel = require("../Models/Wishs")
var plateformModel = require("../Models/Plateforms")
var teamModel = require("../Models/Teams")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// ______________ ADD GAME ______________ (ok)
router.post('/plateform', async function(req, res, next) {
  console.log("req body",req.body);
  
  var newPlateform = new plateformModel ({
    plateform:   req.body.plateform,
    img:         req.body.img,
    website:     req.body.website,
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

// ______________ PLATEFORMS ______________
router.post('/addgame', async function(req, res, next) {
  var result = false
  console.log("req body",req.body);
  
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


module.exports = router;