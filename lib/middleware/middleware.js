// const checkAdmin = (req, res, next) => {
//   res.redirect('/');
// };

// function checkAdmin(req, res, next) {
//   req.session.userName === 'admin' ? next() : res.redirect('/');
// }

// module.exports = checkAdmin;

module.exports = function checkAdmin(req, res, next) {
  req.session.userName === 'admin' ? next() : res.redirect('/');
};
