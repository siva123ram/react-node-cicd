require('dotenv').config();
const express = require('express');
const router = express.Router();
const twilio = require('twilio');



const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const appPasscode = process.env.APP_PASSCODE;

const client = new twilio(accountSid, authToken);



const generateOtp = () => Math.floor(100000 + Math.random() * 900000);

let storedOtp = null; // For simplicity, storing OTP in memory

router.post('/', (req, res) => {
  const { passcode, phoneNumber } = req.body;

  if (passcode !== appPasscode) {
    return res.status(403).send('Forbidden: Incorrect passcode');
  }

  const otp = generateOtp();
  storedOtp = otp; // Store OTP in memory, in a real app use a database
  console.log("your otp is " + storedOtp);
  module.exports.variable = storedOtp;
  client.messages.create({
    body: `Your OTP is ${otp}`,
    to: phoneNumber,
    from: fromPhoneNumber
  })
  .then((message) => {
    console.log(`OTP sent: ${message.sid}`);
    res.status(200).send(`OTP sent to ${phoneNumber}`);
    
  })
  .catch((error) => {
    console.error('Error sending OTP:', error);
    res.status(500).send('Internal Server Error: Unable to send OTP');
  });
});

module.exports = router;