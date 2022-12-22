const express = require('express');
const router = express.Router();

const render = require('../../lib/render');
const Layout = require('../../views/Layout');

// root
router.get('/', (req, res) => {
  res.cookie('test', 42);
  render(Layout, { myTitle: 'Blog', doctType: true }, res);
});

module.exports = router;
