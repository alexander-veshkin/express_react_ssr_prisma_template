const express = require('express');
const router = express.Router();

const render = require('../../lib/render');
const addPost = require('../../views/addPost');

const { Post } = require('../../../db/models');

router.get('/', (req, res) => {
  let error = { addPost: false, posterName: false, title: false };

  render(
    addPost,
    {
      placeHolerInput: 'Type name',
      textAreaValue: 'Some post',
      placeHolertitle: 'Some title',
      error,
      myTitle: 'Blog',
      userid: req.session.userid,
      username: req.session.userName,
    },
    res
  );
});

router.post('/', async (req, res) => {
  let error = { addPost: false, posterName: false, title: false };

  if (req.body.addPost === '') error.addPost = true;
  if (req.body.posterName === '') error.posterName = true;
  if (req.body.title === '') error.title = true;

  render(
    addPost,
    {
      placeHolerInput: 'Type name',
      textAreaValue: 'ВВЕДИТЕ ПОСТ!',
      placeHolertitle: 'Some title',
      error,
      userid: req.session.userid,
      username: req.session.userName,
    },
    res
  );

  if (!Object.values(error).includes(true)) {
    await Post.create({
      body: req.body.addPost,
      title: req.body.title,
      date: new Date(),
      user_id: req.session.userid,
    });
  }
});

module.exports = router;
