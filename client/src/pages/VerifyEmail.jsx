import React from 'react';
import Navbar from '../components/Navbar';
import './VerifyEmailcss.css';

const VerifyEmail = () => {
  return (
    <div>
      <div><Navbar/></div>
      <div className='container-fluid v1'>
      <h1>Email verified successfully!</h1>
      <p>Congratulations, your email has been verified.</p>
      </div>
    </div>
  );
};

export default VerifyEmail;
