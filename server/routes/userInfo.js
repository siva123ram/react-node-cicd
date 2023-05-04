const express = require('express');
const router = express.Router();
const connection = require('./dbConnection');
const Variables = require('./login');




router.get('/', (req, res) => {
    
  //const name = req.params.name;
 // const email = req.params.email;
  //const mobile = req.params.mobile;
  //const userType = req.params.userType;

  const emailLogin = Variables.variable;
  
  // Check if the email already exists in the database
    
    console.log('no error');
    
    // Get the user's data from  the database here
    const sql = `SELECT name, email,age,country,id FROM person WHERE email = ?`;
    connection.query(sql,[emailLogin], (err, result) => {
      if (err) {
        console.error('Error saving user data:', err);
        return res.status(500).send({ error: 'Error saving user data' });
      }
      if (result.length > 0){
        console.log('User data saved successfully:', result);
      const Username = result[0].name;
       console.log('Username',Username);
       res.json(result);
      }
      
    });
  });

   

module.exports = router;
