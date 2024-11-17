const express = require('express');
const mysql = require('mysql');

//database connection

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employeesystem',
    port: 3306
  });
 console.log('...........') 
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Connected to database!');
  });


  module.exports = connection;