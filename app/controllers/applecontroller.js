var exports = module.exports = {}

var Apple = require("../models/apple.js");

exports.getApples = function (req,res){
  console.log("getApples");
};

exports.addApple = function (req,res){
  // How do I add an apple to the db?
  var apple = Apple.build({
    type : 'macintosh',
    color : 'red'
  });
};
