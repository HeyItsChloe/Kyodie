const cookieController = {};

/**
* setCookie - set a cookie with a random number
*/
cookieController.setCookie = (req, res, next) => {
  res.cookie('secret', Math.floor(Math.random()*100).toString());
  return next();
}

/**
* setSSIDCookie - store the user id in a cookie
*/
cookieController.setSSIDCookie = (req, res, next) => {
    console.log('in cookie controller res.locals', res.locals.auth)

  res.cookie('ssid', res.locals.auth._id, { httpOnly: true });
  return next();
}

module.exports = cookieController;
