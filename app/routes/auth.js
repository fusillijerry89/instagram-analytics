var authController = require('../controllers/authcontroller.js');

module.exports = function (app, passport) {

  app.get('/signup', authController.signup);

  app.get('/signin', authController.signin);

  app.post('/signin', passport.authenticate('local-signin', {
      successRedirect: '/dashboard',
      failureRedirect: '/signin'}
  ));

  app.post('/signup', passport.authenticate('local-signup', {
      successRedirect: '/dashboard',
      failureRedirect: '/signup'}
  ));

  app.get('/dashboard', isLoggedIn, authController.dashboard);

  app.post('/dashboard', isLoggedIn, function (req, res, next) {
      console.log(req.query);
  });

  app.get('/logout', authController.logout);

  app.put('/spyon', function (req, res, next) {
      var json = {
        account : req.user.email,
        spyingon : req.query.user
      };

      // Make a PUT request to Sascha
      xhttp.open('PUT', 'SASCHA_ENDPOINT', true);
  		xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  		xhttp.send("account=" + json.account + "&spyingon=" + json.spyingon);

      // sends http://SASCHA_ENDPOINT/account=myemail@gmail.com&spyingon=justinbieber
  });

  function isLoggedIn(req, res, next) {
      if ( req.isAuthenticated() ) {
          return next();
      }

      res.redirect('/signin');
  }
}
