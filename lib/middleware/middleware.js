const checkAdmin = (req, res, next) => {
  req.session.userName === 'admin' ? next() : res.redirect('/');
}

const sesionLog = (req, res, next) => {
  console.log('req.session=>>>', req.session);
  next();
};

module.exports = sesionLog, checkAdmin
