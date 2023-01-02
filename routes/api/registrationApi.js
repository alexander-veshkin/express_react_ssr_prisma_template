const express = require('express');
const router = express.Router();
const { User } = require('../../db/models');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

//api/reg
router.route('/').post(async (req, res) => {
  const { loginReg, nameReg, passReg, passRepeat } = req.body;
  let date = new Date();

  const checkUser = await User.findOne({
    where: { login: loginReg }, attributes: ['id'],
    raw: true,
  });

  if (checkUser) {
    return res.status(400).json({ errr: 'Пользователь уже существует' });
  }

  if (passReg !== passRepeat) {
    return res.status(400).json({ errr: 'Пароли не совпадают' });
  }

  //CREATE USER
  if (loginReg && nameReg && passReg && passRepeat) {
  //HASH PW
    const hash = await bcrypt.hash(passReg, 10);

    User.create({
      name: nameReg,
      login: loginReg,
      password: hash,
      date: date,
    })
      .then( (newUser) => {
        //create session
        req.session.userid = newUser.id;
        req.session.userName = newUser.name;
        res.json({ newUserId: newUser.id, newUserLogin: newUser.login });
      })
      .catch((error) => res.status(403).json({ message: error.message }));
  } else {
    return res.status(400).json({ errr: 'Необходимо заполнить все поля' });
  }
});

module.exports = router;
