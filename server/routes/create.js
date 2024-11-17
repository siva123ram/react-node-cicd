const express = require('express');
const router = express.Router();
const connection = require('./dbConnection');



let userId;

router.post('/', (req, res) => {
    
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const mobile = req.body.mobile;
  const userType = req.body.userType;
  const salt = req.body.salt;
  
  // Check if the email already exists in the database
  const query = `SELECT email FROM person WHERE Lower(email) = ?`;
  connection.query(query,[email], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
    console.log('Query results:', results);
    if (results.length > 0) {
      return res.status(400).json({ error: 'Email already has an account' });
      
    }
    
    console.log('no error');
    
    // Save the user's data to the database here
    const sql = `INSERT INTO person (name, email, password,mobile,userType,salt) VALUES (?,?,?,?,?,?)`;
    connection.query(sql,[name,email,password,mobile,userType,salt], (err, result) => {
      if (err) {
        console.error('Error saving user data:', err);
        return res.status(500).send({ error: 'Error saving user data' });
      }
      console.log('User data saved successfully:', result);
       userId = result.insertId;
       console.log('userId',userId)
       module.exports.variable = userId;
      res.send({ message: 'User data saved successfully', userId });
    });
  });
});
   

module.exports = router;
