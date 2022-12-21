const express = require('express');
const { sequelize } = require('./db/models');
const app = express();

//libs
require('dotenv').config();
require('@babel/register');

//midlware
const morgan = require('morgan');
app.use(morgan('dev'));
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
const Router = require('./routes/render/routes');
const postApi = require('./routes/api/postsApi');

//routes handlers
app.use('/', Router);
app.use('/form', Router);
app.use('/addPost', Router);
app.use('/Search', Router);
app.use('/api/posts', postApi);

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
