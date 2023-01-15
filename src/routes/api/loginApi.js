const express = require('express');
const router = express.Router();
const { User } = require('../../../db/models');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

//api/login
router.route('/').post(async (req, res) => {
  const { login, pass } = req.body;

  //check payload not empty
  if (!login || !pass) { return res.status(400).json({ errr: 'Login or password cannot be empty' }) }

  const user = await User.findOne({ where: { login }, raw: true }) 

  //check user at DB exist
  if (!user) { return res.status(400).json({ errr: 'Wrong login or password' }) }

  //check pass
  const passCheck = await bcrypt.compare(pass, user.password);

  if (passCheck) {
    req.session.userid = user.id
    req.session.userName = user.login
    res.status(200).json({ msg: "Logged in", login: user.login, userid: user.id })
  } else {
    res.status(400).json({ errr: 'Wrong login or password' })
  }
});

module.exports = router;
