const express = require('express');
const router = express.Router();
const connection = require('./dbConnection');
const multer = require('multer');
const path = require('path');

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Directory to store the uploaded files
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + extension);
  }
});
const upload = multer({ storage: storage });

// Endpoint to handle job application form submission
router.post('/', upload.single('resume'), (req, res) => {
  const { name, email } = req.body;
  const resumeFilePath = req.file.path; // Store the file path instead of the buffer

  const query = 'INSERT INTO jobapplication (name, email, resume) VALUES (?, ?, ?)';

  connection.query(query, [name, email, resumeFilePath], (err, results) => {
    if (err) {
      console.error('Error inserting data into MySQL:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      console.log('Data inserted into MySQL:', results);
      res.json({ message: 'Job application submitted successfully' });
    }
  });
});

module.exports = router;
