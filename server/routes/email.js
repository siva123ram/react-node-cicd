const express = require('express');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const connection = require('./dbConnection');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'sivaramprasad810@gmail.com',
      pass: 'peoz attt oaur nigz',
    },
});

const sendVerificationEmail = async (email) => {
    try {
        const secretKey = 'mySecretKey'; // Replace with your actual secret key
        const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
        const verificationUrl = `http://localhost:5000/verify?token=${token}`;
        
        // Save the token to the database
        await saveTokenToDatabase(email, token);
        
        const mailOptions = {
            from: 'sivaramprasad810@gmail.com',
            to: email,
            subject: 'Verify your email address',
            html: `<p>Please click on the following link to verify your email address:</p>
                   <a href="${verificationUrl}">${verificationUrl}</a>`,
        };

        await transporter.sendMail(mailOptions);
        console.log('Verification email sent successfully.');
    } catch (error) {
        console.error('Error sending verification email:', error);
        throw error; // Re-throw the error to handle it at a higher level
    }
};

const saveTokenToDatabase = (email, token) => {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE person SET verification_token = ? WHERE email = ?`;
        connection.query(sql, [token, email], (err) => {
            if (err) {
                console.error('Error saving user data:', err);
                reject(err);
            } else {
                console.log('User data saved successfully.');
                resolve();
            }
        });
    });
};

module.exports = sendVerificationEmail;
