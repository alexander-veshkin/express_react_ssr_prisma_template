const express = require('express');
const router = express.Router();
const render = require('../lib/render');
const Layout = require('../views/Layout/Layout');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router
  .get('/', async (req, res) => {
    render(Layout, { loginForm: true }, res);
  })
  .post('/', async (req, res) => {
    const { email, password } = req.body;

    const user = await prisma.user.findFirst({ where: { email: 'a@a.ru' } });

    if (password === user.password) {
      req.session.user = user.id;
      req.session.email = user.email;
      res.redirect('/');
    }

    await prisma.$disconnect;
  });

// router.get('/register', Register);

module.exports = router;
