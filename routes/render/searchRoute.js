const express = require('express');
const router = express.Router();

const render = require('../../lib/render');
const Search = require('../../views/Search');

const { Post } = require('../../db/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const operatorsAliases = {
  $like: Op.like,
  $not: Op.not,
};

//search
router.get('/', async (req, res) => {
    render(Search, {}, res);
    const props = await Post.findAll({
      where: { title: { [Op.like]: `%${req.query.SearchInput}%` } },
    });
  });

module.exports = router;
