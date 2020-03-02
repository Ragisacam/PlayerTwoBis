var mongoose = require("./Connection")

var gameSchema = mongoose.Schema({
  plateforme:   String,
  name:         String,
  cover:        String,
  background:   String,
  description:  String,
  website:      String,
  rating :      Number,
  category:     String
  });

  var gameModel = mongoose.model('games', gameSchema);

  module.exports= gameModel;