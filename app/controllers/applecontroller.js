var exports = module.exports = {}

var Apple = require("../models/apple.js");

exports.getApples = function (req,res){
  console.log("getApples");
};

exports.addApple = function (req,res){
  var apple = Apple.build({
    type : 'macintosh',
    color : 'red'
  });
};
