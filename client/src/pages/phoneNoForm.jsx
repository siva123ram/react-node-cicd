import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './phoneNoFormcss.css';

const PhoneNumberForm = () => {
    const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [passcode] = useState('ASD@12asd');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/send-otp', {
        phoneNumber,
        passcode
      });
      if (response.status === 200) {
        
        alert('OTP sent successfully');
        navigate('/otpVerification');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Failed to send OTP. Please check your passcode and phone number.');
    }
  };

  return (
    <div className='P'>
        <form onSubmit={handleSubmit}>
      <div className='P1'>
        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Send OTP</button>
    </form>
    </div>
  );
};

export default PhoneNumberForm;
