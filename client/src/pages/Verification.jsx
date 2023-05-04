import React, { useState } from 'react';
import Navbar from "../components/Navbar"
import axios from 'axios';
import './Verificationcss.css';
export default function Verification(){
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/send-verification-url',  {email: email} );
      console.log(response.data.message);
      // show a success message to the user
    } catch (error) {
      console.error(error);
      // show an error message to the user
    }
    
  };

    return(
        <div>
        <div className='container-fluid'><Navbar/></div> 
        <div className='container-fluid v1'>
        <form onSubmit={handleSubmit}>
      <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Send Verification Email</button>
    </form>
        </div>
        </div>
    )
}