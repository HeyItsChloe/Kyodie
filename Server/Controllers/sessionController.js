const model = require('../Models/kyodieModels.js');
const sessionController = {};

/**
* isLoggedIn - find the appropriate session for this request in the database, then
* verify whether or not the session is still valid.
*/
sessionController.isLoggedIn = (req, res, next) => {
  // documents in the sessions collection will expire due to the schema expire setting
  model.Session.findOne({ cookieId: req.cookies.ssid }, (err, session) => {
    if (err) {
      // database error
      return next('Error in sessionController.isLoggedIn: ' + JSON.stringify(err));
    } else if (!session) {
      // no session found
      console.log('Please Log In');
    } else {
      // session found
      console.log('auth  session', session)
      res.locals.auth = session.cookieId
      return next();
    }
  })
};

/**
* startSession - create and save a new Session into the database.
*/
sessionController.startSession = (req, res, next) => {
    console.log('in session controller res.locals', res.locals.auth)

  model.Session.create({ cookieId: res.locals.auth._id }, (err, session) => {
    if (err) return next('Error in sessionController.startSession: ' + JSON.stringify(err));
    else return next();
  });
};

module.exports = sessionController;
