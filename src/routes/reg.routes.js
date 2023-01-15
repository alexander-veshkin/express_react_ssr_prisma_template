const express = require('express');
const router = express.Router();
const render = require('../lib/render');
const Layout = require('../views/Layout/Layout');
const MainView = require('../views/Main');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router
  .get('/', async (req, res) => {
    render(Layout, { registerForm: true }, res);
  })
  .post('/', async (req, res) => {
    const { email, name, password, password_repeat } = req.body;
    let createdAt = new Date();

    if (!email || !name || !password || !password_repeat) {
      let msg = 'all fields are rquired';
      render(Layout, { registerForm: true, err: msg }, res);
      return false;
    }

    if (password !== password_repeat) {
      let msg = 'password not match';
      render(Layout, { registerForm: true, err: msg }, res);
      return false;
    }

    const user = null;

    try {
      user = await prisma.user.findFirst({ where: { email } });
    } catch (e) {
      console.log(e);
    } 

    if (user) {
      let msg = 'user already exist';
      render(Layout, { registerForm: true, err: msg }, res);
      return false;
    }

    try {
      const user = await prisma.user.create({
        data: {
          email,
          name,
          password,
          createdAt,
          role: 'BASIC',
        },
      });
      req.session.user = user.id;
      req.session.name = user.name;
      render(MainView, { user: user.id, name: user.name }, res);
    } catch (e) {
      console.log(e);
    } finally {
      prisma.$disconnect;
    }
  });

module.exports = router;
