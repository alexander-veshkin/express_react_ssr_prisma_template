const express = require('express');
const { sequelize, Post } = require('./db/models');
require('dotenv').config();
const Router  = require('./routes/routes');
const morgan = require('morgan');

require('@babel/register');
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const { PORT } = process.env;

app.use('/', Router);

app.use('/form', Router);

app.use('/addPost', Router);

app.listen(PORT, async () => {
  console.log(`Server started: http://localhost:${PORT}/`);
  try {
    await sequelize.authenticate();
    console.log('Соединение с базой установлено!');
  } catch (err) {
    console.log(err, 'Error!');
  }
});

