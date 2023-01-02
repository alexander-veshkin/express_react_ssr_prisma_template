const checkAdmin = (req, res, next) => {
  return req.session.userName === 'admin' ? next() : res.redirect('/');
};

const sessionLog = (req, res, next) => {
  console.log('req.session=>>>', req.session);
  next();
};

const checkLoggedIn = (req, res, next) => {
  req.session.userName ? next() : res.redirect('/');
};

module.exports = { checkAdmin, sessionLog, checkLoggedIn };
