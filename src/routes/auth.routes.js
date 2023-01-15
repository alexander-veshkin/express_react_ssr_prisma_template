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

    prisma.user
      .findFirst({ where: { email: email } })
      .then((user) => {
        if (user && password === user.password) {
          req.session.user = user.id;
          
          res.redirect('/');
        } else {
          let msg = 'wrong user or password';
          render(Layout, { loginForm: true, err: msg }, res);
        }
      })
      .catch((e) => console.log(e))
      .finally(async () => await prisma.$disconnect);
  });

module.exports = router;
