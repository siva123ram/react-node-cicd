const express = require('express');
const router = express.Router();
const connection = require('./dbConnection');



router.post('/', (req, res) => {
    
  const jobTitle = req.body.jobTitle;
  const companyName = req.body.companyName;
  const reqExp = req.body.reqExp;
  const location = req.body.location;
  const userType = "recruiter";
  const jobDescription = req.body.jobDescription;
  
    
    // Save the user's data to the database here
    const sql = `INSERT INTO jobposting (jobTitle, companyName,reqExp,userType,location,jobDescription) VALUES (?,?,?,?,?,?)`;
    connection.query(sql,[jobTitle, companyName,reqExp,userType,location,jobDescription], (err, result) => {
      if (err) {
        console.error('Error saving user data:', err);
        return res.status(500).send({ error: 'Error saving user data' });
      }
      console.log('User data saved successfully:', result);
    });
  });

module.exports = router;
