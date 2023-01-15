const session = require('express-session');
const sessionConfig = require('./sessionConfig');
const cookieParser = require('cookie-parser');
const { sessionLog } = require('../src/lib/middleware');
const { sequelize } = require('../db/models');

require('dotenv').config();

const serverConfig = (app) => {
  const express = require('express');
  const morgan = require('morgan');
  const path = require('path');

  app.use(morgan('dev'));
  app.use(express.static(path.join(__dirname, '../src/public')));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use(cookieParser());
  app.use(session(sessionConfig));

  app.use(sessionLog);
};

const start = (app) => {
  const { PORT } = process.env;

  app.listen(PORT, async () => {
    console.log(`Server started: http://localhost:${PORT}/`);
    try {
      await sequelize.authenticate();
      console.log('Соединение с базой установлено!');
    } catch (err) {
      console.log(err, 'Error!');
    }
  });
};

module.exports = { serverConfig, start };
