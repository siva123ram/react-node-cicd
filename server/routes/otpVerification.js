const express = require('express');
const router = express.Router();
var variables = require('./sendOTP');









router.post('/', (req, res) => {
    const {  otp } = req.body;
    const stored =variables.variable;
    console.log("otp sent is"+ stored);
    if (otp == stored) { // Verify OTP (convert to string if necessary)
      res.send('OTP verified successfully!');
    } else {
      res.status(400).send('Invalid OTP');
    }
  });

  module.exports = router;