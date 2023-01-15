const express = require('express');

// const { checkLoggedIn } = require('./src/lib/middleware');
require('@babel/register');

//routes
const Main = require('./src/routes/main.routes');
const Auth = require('./src/routes/auth.routes');
const Logout = require('./src/routes/logout.routes');

const { checkUser } = require('./src/lib/middleware');
const { start, serverConfig } = require('./config/serverConfig');

const app = express();

serverConfig(app);

//routes handlers
app.use('/', Main);
app.use('/login', checkUser, Auth);
app.use('/', Logout);
// app.use('/register', Register);

start(app);
