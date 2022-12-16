const express = require('express');
const { sequelize, Post } = require('./db/models');
require('dotenv').config();
const render = require('./lib/render');
const Layout = require('./views/Layout');
const Form = require('./views/Form');

require('@babel/register');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//разрешить достуап к папке public
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const { PORT } = process.env;

app.get('/', (req, res) => {
  render(Layout, { myTitle: 'Url shortener' }, res, (docType = true));
});

app.get('/form', (req, res) => {
  let error = { addPost: false, posterName: false, title: false };

  render(
    Form,
    {
      placeHolerInput: 'Type name',
      textAreaValue: 'Some post',
      placeHolertitle: 'Some title',
      error,
    },
    res,
    (docType = false)
  );
});

app.post('/addPost', (req, res) => {
  let error = { addPost: false, posterName: false, title: false };

  if (req.body.addPost === '') error.addPost = true;
  if (req.body.posterName === '') error.posterName = true;
  if (req.body.title === '') error.title = true;

    render(
      Form,
      {
        placeHolerInput: 'Type name',
        textAreaValue: 'ВВЕДИТЕ ПОСТ!',
        placeHolertitle: 'Some title',
        error,
      },
      res,
      (docType = false)
    );

  if (!Object.values(error).includes(true)) {
    Post.create({
      body: req.body.addPost,
      name: req.body.posterName,
      title: req.body.title,
      date: new Date(),
    });
    res.redirect('/');
  }
});

app.listen(PORT, async () => {
  console.log(`Server started: http://localhost:${PORT}/`);
  try {
    await sequelize.authenticate();
    console.log('Соединение с базой установлено!');
  } catch (err) {
    console.log(err, 'Error!');
  }
});
