const session = require('express-session');
const sessionConfig = require('./sessionConfig');
const cookieParser = require('cookie-parser');
const { sessionLog } = require('../src/lib/middleware');

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
  });
};

module.exports = { serverConfig, start };
