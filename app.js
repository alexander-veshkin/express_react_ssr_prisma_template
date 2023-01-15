const express = require('express');
const router = express.Router();
const { sequelize } = require('./db/models');
const { QueryTypes } = require('sequelize');
const session = require('express-session');
const { checkLoggedIn } = require('./src/lib/middleware');

require('@babel/register');

//routes
const Router = require('./src/routes/render/routes');
const searchRoute = require('./src/routes/render/searchRoute');
const mainRoute = require('./src/routes/render/mainRoute');
const addPostRoute = require('./src/routes/render/addPostRoute');
const allPostsRoute = require('./src/routes/render/allPostsRoute');
const lastPostRoute = require('./src/routes/render/lastPostRoute');

//конфиг
const serverConfig = require('./config/serverConfig');

const app = express();
const { PORT } = process.env;

//применить конфигурацию сервера
serverConfig(app);

//middlewares

//api routes
const postApi = require('./src/routes/api/postsApi');
const registrationApi = require('./src/routes/api/registrationApi');
const loginApi = require('./src/routes/api/loginApi');

//routes handlers
app.use('/', mainRoute);
app.use('/form', checkLoggedIn, Router);
app.use('/addPost', checkLoggedIn, addPostRoute);
app.use('/lastPost', checkLoggedIn, lastPostRoute);
app.use('/search', checkLoggedIn, searchRoute);
app.use('/api/posts', postApi);
app.use('/api/reg', registrationApi);
app.use('/api/login', loginApi);
app.use('/allPosts', checkLoggedIn, allPostsRoute);

app.listen(PORT, async () => {
  console.log(`Server started: http://localhost:${PORT}/`);
  try {
    await sequelize.authenticate();
    console.log('Соединение с базой установлено!');
  } catch (err) {
    console.log(err, 'Error!');
  }
});
