const express = require('express');
const router = express.Router();

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    res.clearCookie('user_sid');
    res.redirect('/');
  });
});

module.exports = router;
