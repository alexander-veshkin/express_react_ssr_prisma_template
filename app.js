const express = require('express');
const { sequelize } = require('./db/models');
const session = require('express-session');

require('@babel/register');

//routes
const Router = require('./routes/render/routes');
const searchRoute = require('./routes/render/searchRoute');
const mainRoute = require('./routes/render/mainRoute');
const addPostRoute = require('./routes/render/addPostRoute');
const allPostsRoute = require('./routes/render/allPostsRoute');
const lastPostRoute = require('./routes/render/lastPostRoute');

//конфиг
const serverConfig = require('./config/serverConfig');

const app = express();
const { PORT } = process.env;

//применить конфигурацию сервера
serverConfig(app);

//api routes
const postApi = require('./routes/api/postsApi');
const registrationApi = require('./routes/api/registrationApi');

//routes handlers
app.use('/', mainRoute);
app.use('/form', Router);
app.use('/addPost', addPostRoute);
app.use('/lastPost', lastPostRoute);
app.use('/search', searchRoute);
app.use('/api/posts', postApi);
app.use('/api/reg', registrationApi);
app.use('/allPosts', allPostsRoute);

app.listen(PORT, async () => {
  console.log(`Server started: http://localhost:${PORT}/`);
  try {
    await sequelize.authenticate();
    console.log('Соединение с базой установлено!');
  } catch (err) {
    console.log(err, 'Error!');
  }
});
