// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Replace these values with your email configuration and secret key
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

const secretKey = 'yourSecretKey';

// In a real application, you'd store user emails and reset tokens securely in a database
const resetTokens = {};

app.post('/api/forgot-password', (req, res) => {
  const { email } = req.body;

  // Generate a random reset token
  const resetToken = jwt.sign({ email }, secretKey, { expiresIn: '1h' });

  // Save the reset token (in-memory, for simplicity; in production, use a database)
  resetTokens[email] = resetToken;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Password Reset',
    text: `Click the following link to reset your password: http://localhost:3001/reset-password?token=${resetToken}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Password reset email sent successfully');
    }
  });
});

app.post('/api/reset-password', (req, res) => {
  const { email, token, newPassword } = req.body;

  // Check if the token is valid
  if (resetTokens[email] === token) {
    // Reset the password (you should update the password in your database here)
    // For simplicity, we're just logging the information here
    console.log(`Password reset for email ${email} with token ${token}. New password: ${newPassword}`);

    // Remove the used token (in a real application, update the database)
    delete resetTokens[email];

    res.status(200).send('Password reset successfully');
  } else {
    res.status(400).send('Invalid or expired token');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
