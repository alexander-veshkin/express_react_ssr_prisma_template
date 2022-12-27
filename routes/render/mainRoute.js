const express = require('express');
const router = express.Router();

const render = require('../../lib/render');
const Layout = require('../../views/Layout');

// root
router.get('/', (req, res) => {
  res.cookie('test', 42);
  render(Layout, { myTitle: 'Blog', doctType: true }, res);
});

//test routes
router.get('/cookie', (req, res) => {
  res.cookie('cookieKey', 'hello)))', {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: false,
  });
  res.send('test');
});

router.get('/get', (req, res) => {
  res.json({ ttt: 'ttt' });
});

router.get('/count', (req, res) => {
  req.session.count++;
  req.session.userId = 5;
  res.json(req.session);
});

router.get('/clear', (req, res) => {
  req.session.destroy((err) => {
    res.clearCookie('user_sid');
    res.clearCookie('test');
    res.clearCookie('cookieKey');
    res.send(err);
  });
});

module.exports = router;
