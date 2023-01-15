const express = require('express');
const router = express.Router();

const render = require('../../lib/render');
const Search = require('../../views/Search');

const { Post } = require('../../../db/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const operatorsAliases = {
  $like: Op.like,
  $not: Op.not,
};

//search
router.get('/', async (req, res) => {
    render(Search, {userid: req.session.userid, username: req.session.userName}, res);
  });

  router.get('/:id', (req, res) => {
    console.log(req.params);
    console.log(req.params.id);
    console.log('<<<<<<');
    res.send('test');
  });

module.exports = router;
