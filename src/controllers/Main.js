const express = require('express');
const router = express.Router();
const render = require('../lib/render');
const MainView = require('../views/Main');

const Main = (req, res) => {
  const { user, name } = req.session;
  render(MainView, {user, name}, res);
};

module.exports = { Main };

