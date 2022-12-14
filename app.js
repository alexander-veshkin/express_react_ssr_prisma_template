const express = require('express');
const { sequelize } = require('./db/models');
require('dotenv').config();

const app = express();

app.listen(process.env.PORT, async () => {
  console.log(`Server started: http://localhost:${process.env.PORT}/`);

  try {
    await sequelize.authenticate();
    console.log('Соединение с базой установлено!');
  } catch (err) {
    console.log(err, 'Error!');
  }
});
