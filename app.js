const express = require('express');

// const { checkLoggedIn } = require('./src/lib/middleware');
require('@babel/register');

//routes
const Main = require('./src/routes/main.routes');
const { Login, Register } = require('./src/routes/auth.routes');

//конфиг
const { start, serverConfig } = require('./config/serverConfig');

const app = express();

serverConfig(app);

//routes handlers
app.use('/', Main);
app.use('/', Login);
app.use('/', Register);

start(app);
