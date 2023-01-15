const express = require('express');
const router = express.Router();
const render = require('../lib/render');
const MainView = require('../views/Main');

const Main = (req, res) => {
  const { user } = req.session;
  render(MainView, {user: user}, res);
};

module.exports = { Main };

