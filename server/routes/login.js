const express = require('express');
const router = express.Router();
const CryptoJS = require("crypto-js");
const connection = require('./dbConnection');





router.post('/', async(req, res) => {
    
 
  const email = req.body.email;
  module.exports.variable = email;
  const password = req.body.password;
  
  // Check if the email and password exists in the database
  const query = `SELECT * FROM person WHERE Lower(email) = ?`;
  connection.query(query,[email], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
    console.log('Query results:', results);
    if (results.length > 0) {
      //return res.status(400).json({ error: 'Email already has an account' });
      const hashedPassword = results[0].password;
      const salt = results[0].salt;
      const saltedPassword = salt + password; // Add the salt to the provided password
const encryptedPassword = CryptoJS.SHA256(saltedPassword).toString(); // Hash the salted password
const isPasswordMatch = encryptedPassword === hashedPassword;
      if (isPasswordMatch) {
        // Perform any additional logic here, such as redirecting to a new page or setting a state variable to indicate that the user is logged in
        console.log('Login successful!');
        res.redirect('http://localhost:3000/userVerified');
      } else {
        console.log('Invalid email or password');
        return res.status(600).json({ error: 'Invalid email or password' });
      }
    }
    else{
      console.log('Invalid email or password');
      return res.status(400).json({ error: 'Invalid email or password' });
    }
    
    
    
    // Save the user's data to the database here
    
  });
});
   

module.exports = router;
