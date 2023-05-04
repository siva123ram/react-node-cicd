const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const connection = require('./dbConnection');



router.get('/', async (req, res) => {
    const token = req.query.token;
    try {
      const decodedToken = jwt.verify(token, 'mySecretKey');
      const email = decodedToken.email;
      
      // update the is_verified field in the database
      const sql = `UPDATE person SET is_verified = true WHERE email = ?`;
      connection.query(sql, [email], (err, result) => {
        if (err) {
          console.error('Error updating user data:', err);
          return res.status(500).send({ error: 'Error updating user data' });
        }
        console.log('User data updated successfully:', result);
        res.redirect('http://localhost:3000/verifyEmail');
        
      });
    } catch (err) {
      console.error('Error verifying email:', err);
      return res.status(500).send({ error: 'Error verifying email' });
    }
    
  });


  module.exports = router;