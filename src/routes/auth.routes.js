const express = require('express');
const router = express.Router();

const { LoginForm, Login, Register } = require('../controllers/Auth');

router.get('/login', LoginForm);
router.post('/login', Login);
router.get('/register', Register);

// module.exports = router;
module.exports = { LoginForm, Login, Register  };
