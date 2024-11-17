const express = require('express');
const router = express.Router();
const connection = require('./dbConnection');
var variables   = require('./create');

console.log("user",variables.variable);



router.post('/', (req, res) => {
  
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const gender = req.body.gender;
    const age = req.body.age;
    const degree = req.body.degree;
    const branch = req.body.branch;
    const year = req.body.year;
    const college = req.body.college;
    const location = req.body.location;
    const state = req.body.state;
    const country = req.body.country;
    const userId =variables.variable;
    console.log("user id " + userId);
    // Check if the email already exists in the database
        
      
      
    // save the user's data to the database here
    const sql = `UPDATE person SET firstName = ?, lastName = ?, gender = ?, age = ?, degree = ?, branch = ?, year = ?, college = ?, location = ?, state = ?, country = ? WHERE id = ?`;
    connection.query(sql,[firstName, lastName, gender, age, degree, branch, year, college, location, state, country, userId], (err, result) => {
      if (err) {
        console.error('Error saving user data:', err);
        return res.status(500).send({ error: 'Error saving user data' });
      }
      console.log('User data saved successfully:', result);
      console.log(gender);
      console.log(userId);
    res.send({ message: 'User data saved successfully', gender});
    
  });
  });
  

  module.exports = router;