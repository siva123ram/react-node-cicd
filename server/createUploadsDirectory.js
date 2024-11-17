// createUploadsDirectory.js
const fs = require('fs');

const createUploadsDirectory = () => {
  const directory = 'uploads';

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
    console.log('Uploads directory created');
  } else {
    console.log('Uploads directory already exists');
  }
};

module.exports = createUploadsDirectory;
