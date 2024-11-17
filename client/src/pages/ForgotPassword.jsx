// ForgotPassword.js
import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendRequest = () => {
    // Send a request to the server to initiate the password reset process
    axios.post('/api/forgot-password', { email })
      .then(response => {
        setMessage('Password reset email sent successfully. Please check your inbox.');
      })
      .catch(error => {
        console.error('Error sending reset email:', error.response.data.error || 'Server Error');
        setMessage('Error sending reset email. Please try again later.');
      });
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <p>Enter your email address to receive a password reset link.</p>

      <label>Email:</label>
      <input type="email" value={email} onChange={handleEmailChange} />
      
      <button onClick={handleSendRequest}>Send Reset Email</button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
