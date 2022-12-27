const session = require('express-session');

require('dotenv').config();

const serverConfig = (app) => {
  const express = require('express');
  const morgan = require('morgan');
  const path = require('path');

  const sessionConfig = require('./sessionConfig');

  app.use(morgan('dev'));
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  const cookieParser = require('cookie-parser');
  app.use(cookieParser());
  app.use(session(sessionConfig));
  
};

module.exports = serverConfig;
