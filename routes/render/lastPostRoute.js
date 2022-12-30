const express = require('express');
const router = express.Router();

const render = require('../../lib/render');
const allPosts = require('../../views/AllPosts');

const { Post } = require('../../db/models');

router.get('/', async (req, res) => {
  let props = await Post.findAll({
    limit: 1,
    order: [['date', 'DESC']],
    raw: true,
  });
  render(allPosts, { myTitle: 'Blog', props, userid: req.session.userid, username: req.session.userName }, res);
});

module.exports = router;