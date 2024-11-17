const express = require('express');
const router = express.Router();
const connection = require('./dbConnection');


router.get('/:jobId', (req, res) => {
    const { jobId } = req.params;
    
 
    const query = `SELECT * FROM jobposting WHERE jobId = ?`;
 
    connection.query(query,[jobId], (err, results) => {
       if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ error: 'Internal server error' });
       } else {
          res.json(results);
          console.log(results);
          console.log(jobId);
       }
    });
 });
 
 module.exports = router;