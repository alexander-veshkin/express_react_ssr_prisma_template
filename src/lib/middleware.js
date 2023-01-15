const checkUser = (req, res, next) => {
  return !req.session.user ? next() : res.redirect('/');
};

const sessionLog = (req, res, next) => {
  console.log('req.session=>>>', req.session);
  next();
};

const checkLoggedIn = (req, res, next) => {
  req.session.userName ? next() : res.redirect('/');
};

module.exports = { checkUser, sessionLog, checkLoggedIn };
