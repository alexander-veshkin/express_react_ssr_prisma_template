module.exports = function checkAdmin(req, res, next) {
  req.session.userName === 'admin' ? next() : res.redirect('/');
};
