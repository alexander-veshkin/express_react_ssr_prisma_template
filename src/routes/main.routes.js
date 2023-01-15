const express = require('express');
const router = express.Router();

const { Main } = require('../controllers/Main');

router.get('/', Main);

module.exports = router;
