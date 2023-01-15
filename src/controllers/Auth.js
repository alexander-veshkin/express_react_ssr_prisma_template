const render = require('../lib/render');
const Layout = require('../views/Layout/Layout');
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const LoginForm = async (req, res) => {
  render(Layout, { loginForm: true }, res);
};

const Login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  await prisma.user
    .findUnique({
      where: {
        email: email,
      },
    })
    .then((i) => console.log(i));
};

const Register = (req, res) => {
  render(Layout, { registerForm: true }, res);
};

module.exports = { LoginForm, Login, Register };
