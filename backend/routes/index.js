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
  console.log("reqbody addgame",req.body);

  var serviceListUserCopy = []
  var gameListUserCopy = []

  var userLog= await userModel.findById(req.body.userId )
  console.log("userlog id" ,userLog); 
  if (userLog){
    var serviceListUserCopy = userLog.service;
    var gameListUserCopy = userLog.idGame
  }  
console.log("gameListUserCopy if userLog", gameListUserCopy);

var gameExist = await gameModel.findOne({plateforme: req.body.plateform, name: req.body.name})
  console.log(gameExist);
  
  //____ plateform & game ____
  //vérifier si champs vide plateform et name sont vide
  if(req.body.plateform==""||req.body.name==""){
    res.json(" plateform OU game vide")
  
  // //si pas de champs vide, ajouter un jeux dans DBA si n'existe pas
  } else if (!gameExist) {
    
    var newGame = new gameModel ({ 
    plateforme:   req.body.plateform,
    name:         req.body.name,
    cover:        req.body.cover,
  });
  newGame.save(async function(error, game){
    if (error){
      console.log("err",error);
      res.json({error})
    
  //   // si bien ajouter, attacher idgame au User
    } else if (game){
      gameListUserCopy.push(game._id)
      var addGameToUser = await userModel.updateOne( {_id:req.body.userId}, {
        idGame: gameListUserCopy
      })
      var result = true
      res.json({game, result})
    }
  });
  // //si le jeux existe déjà en DBA
  }else{
    var idGameUserExist = false

  //   //vérifier si jeux existe déjà chez l'User
    for(let i=0; i<gameListUserCopy.length; i++){
      if (gameListUserCopy[i].equals(gameExist._id) /*pas de = car des ID*/ ){
        idGameUserExist = true
      } 
    }

  //   //si non, on attache l'id à l'utilisateur
    if(idGameUserExist == false){
      gameListUserCopy.push(gameExist._id)
        var addGameToUser = await userModel.updateOne( {_id:req.body.userId}, {
        idGame: gameListUserCopy
        })
        console.log("addGameToUser ",addGameToUser);
        var result= true
        res.json(result)
    }
    
  };

  //____ Service & Tag ____
  console.log("service - tag ",req.body.service," - " ,req.body.tag );
  
  var serviceUserExist = false

  //vérifier si user à déjà un service ataché
  console.log("serviceListUserCopy[0].service", serviceListUserCopy);
  
  for(let i=0; i<serviceListUserCopy.length; i++){
        if (serviceListUserCopy[i].service == req.body.service){
          serviceUserExist = true
        }
      }
      for(let i=0; i<serviceListUserCopy.length; i++){
        if (serviceListUserCopy[i].tag == req.body.tag){
          tagUserExist = true
        }
      }

  console.log("serviceUserExist ",serviceUserExist);
  console.log("tagUserExist ", tagUserExist);
  //vérifier si champs vide
  if(req.body.service=="..." || req.body.tag==""){
    console.log("serviceListUserCopy champs vide",serviceListUserCopy);
    res.json({error: " SERVICE ou TAG vide"})

  //si pas de champs vide, ajouter un service+tag dans DBA si n'existe pas
  } else if (!serviceUserExist) {
    serviceListUserCopy.push({service:req.body.service, tag: req.body.tag})
    var addServiceToUser = await userModel.updateOne( {_id:req.body.userId}, {
    service: serviceListUserCopy
    })
    console.log("addServiceToUser", addServiceToUser);
    res.json({result: true})
  } else if (tagUserExist && serviceUserExist){
    result = true
    res.json(result)
  }   else { 
    res.json({result: false}, {error: 'déjà un identifiant service'})
  } 

});


// ______________ TEAMS ______________
// router.post('/addteam', async function(req, res, next) {
//   console.log("req body addteam",req.body);
  
//   var newTeam = new teamModel ({
//     idGame:       req.body.idGame,
//     idWish:       req.body.idWish,
//     name:         req.body.name,
//     avatar:       req.body.avatar,
//     philosophie:  req.body.philosophie,
//     description:  req.body.description,
//     admin:        req.body.admin,
//     sousadmin:    req.body.sousadmin,
//     regular :     req.body.regular,
//     actu:         req.body.actu,
//   });
  
//   newTeam.save(function(error, team){
//     if (error){
//       console.log("err",error);
//       res.json({error})
//     } else if (team){
//       console.log(team);
//       res.json({team})
//     }
//   });
// });

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