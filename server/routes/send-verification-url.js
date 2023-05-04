const express = require('express');
const router = express.Router();
const sendVerificationEmail = require('./email');

router.post('/', async (req, res) => {
    const  email  = req.body.email;
    await sendVerificationEmail(email);
    res.json({ message: 'Verification email sent' });
  });

  module.exports = router;