const express = require('express');
const router = express.Router();

const render = require('../../lib/render');
const allPosts = require('../../views/AllPosts');

const { Post } = require('../../db/models');

router.get('/', async (req, res) => {
  const props = await Post.findAll({ raw: true });

  render(allPosts, { props }, res);
});

module.exports = router;
