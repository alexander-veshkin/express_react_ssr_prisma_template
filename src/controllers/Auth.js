const render = require('../lib/render');
const Layout = require('../views/Layout/Layout');

const Login = (req, res) => {
  render(Layout, { loginForm: true }, res);
};

const Register = (req, res) => {
  render(Layout, { registerForm: true }, res);
};

module.exports = { Login, Register };
