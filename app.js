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
const searchRoute = require('./routes/render/searchRoute');
const mainRoute = require('./routes/render/mainRoute');
const addPostRoute = require('./routes/render/addPostRoute');
const allPostsRoute = require('./routes/render/allPostsRoute');
const lastPostRoute = require('./routes/render/lastPostRoute');


//api routes
const postApi = require('./routes/api/postsApi');

//routes handlers
app.use('/', mainRoute);
app.use('/form', Router);
app.use('/addPost', addPostRoute);
app.use('/lastPost', lastPostRoute);
app.use('/search', searchRoute);
app.use('/api/posts', postApi);
app.use('/allPosts', allPostsRoute);

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
