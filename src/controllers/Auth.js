const render = require('../lib/render');
const Layout = require('../views/Layout/Layout');

const Login = (req, res) => {
  console.log('222222')

  render(Layout, {loginForm: true}, res);
};

const Register = (req, res) => {
  console.log('1111111')
  render(Layout, {registerForm: true}, res);
};

module.exports = { Login, Register };
