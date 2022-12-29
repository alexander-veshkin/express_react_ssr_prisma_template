const express = require('express');
const router = express.Router();

const render = require('../../lib/render');
const allPosts = require('../../views/AllPosts');

const { Post } = require('../../db/models');

router.get('/', async (req, res) => {
  const props = await Post.findAll({ raw: true });

  render(allPosts, { props, userid: req.session.userid, username: req.session.userName }, res);
});

router.get('/:id/test', async (req, res) => {
  console.log(req.params.id);
  res.send(req.params.id);
});

module.exports = router;
