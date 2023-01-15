const render = require('../lib/render');
const Layout = require('../views/Layout/Layout');
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const Register = (req, res) => {
  render(Layout, { registerForm: true }, res);
};

module.exports = { Register };
