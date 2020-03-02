var mongoose = require("mongoose")

var wishSchema = mongoose.Schema({
  plateforme:     String,
  mode:           String,
  age:            String,
  disponibility:  String,
  sexe:           String,
  langue:         String,
  team :          String,
  idwish :        [{type: mongoose.Schema.Types.ObjectId, ref: "wishs"}],
  });

  var wishModel = mongoose.model('wishs', wishSchema);

  module.exports= wishModel