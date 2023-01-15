const express = require('express');
const router = express.Router();
const { sequelize } = require('../../../db/models');
const { QueryTypes } = require('sequelize');

const render = require('../../lib/render');
const allPosts = require('../../views/AllPosts');

const { Post } = require('../../../db/models');

router.get('/', async (req, res) => {
  const props = await sequelize.query(
    `SELECT p.id, name, body, title, date FROM "Posts" as p JOIN "Users" as u ON p.user_id = u.id`,
    {
      type: QueryTypes.SELECT,
    }
  );

  render(allPosts, { props, userid: req.session.userid }, res);
});

router.get('/:id/test', async (req, res) => {
  console.log(req.params.id);
  res.send(req.params.id);
});

module.exports = router;
