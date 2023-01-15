const express = require('express');
const router = express.Router();

const { Login, Register } = require('../controllers/Auth');

router.get('/login', Login);
router.get('/register', Register);

module.exports = router;
module.exports = { Login, Register };
