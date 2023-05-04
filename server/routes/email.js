const express = require('express');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const connection = require('./dbConnection');

//database connection




//email verification

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'sivaramprasad810@gmail.com',
      pass: 'arfmmboxdzwsrznx',
    },
  });
  const sendVerificationEmail = async (email) => {
    const secretKey = 'mySecretKey'; // Replace with your actual secret key
    const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
    const verificationUrl = `http://localhost:3001/verify?token=${token}`;
     
    // save the token to the database
    const sql = `UPDATE person SET verification_token = ? WHERE email = ?`;
    connection.query(sql,[token, email], (err) => {
      if (err) {
        console.error('Error saving user data:', err);
        
      }
      console.log('User data saved successfully:');
    
  });
  
  
  
    const mailOptions = {
      from: 'sivaramprasad810@gmail.com',
      to: email,
      subject: 'Verify your email address',
      html: `<p>Please click on the following link to verify your email address:</p>
             <a href="${verificationUrl}">${verificationUrl}</a>`,
    };
  
    await transporter.sendMail(mailOptions);
  };

  module.exports = sendVerificationEmail;