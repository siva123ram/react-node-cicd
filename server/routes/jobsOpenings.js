const express = require('express');
const router = express.Router();
const connection = require('./dbConnection');


router.get('/', (req, res) => {
    const { page, size } = req.query;
    const currentPage = parseInt(page) || 1;
    const pageSize = parseInt(size) || 20;
    const startIndex = (currentPage - 1) * pageSize;
 
    const query = `SELECT * FROM jobposting LIMIT ${startIndex}, ${pageSize}`;
 
    connection.query(query, (err, results) => {
       if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ error: 'Internal server error' });
       } else {
          res.json(results);
       }
    });
 });
 
 module.exports = router;