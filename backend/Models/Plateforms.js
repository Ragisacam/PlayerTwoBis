var mongoose = require("mongoose")

var plateformSchema = mongoose.Schema({
  plateform:     String,
  img:           String,
  website:       String,
  service:       String,

  });

  var plateformModel = mongoose.model('plateforms', plateformSchema);

  module.exports= plateformModel