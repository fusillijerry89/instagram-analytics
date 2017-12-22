var appleController = require('../controllers/applecontroller.js');

module.exports = function (app,passport) {

  app.get('/apples', appleController.getApples);

  app.post('/apples', appleController.addApple);

}
