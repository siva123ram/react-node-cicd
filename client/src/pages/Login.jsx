
import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import Navbar from "../components/Navbar";
import './Logincss.css';
export default function Login(){
  const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = e => {
      e.preventDefault();
  
      // Perform login logic here
      console.log(`email: ${email}, Password: ${password}`);
      axios.post('http://localhost:3001/login', { 
       
      email:email,  
      password: password  // send the encrypted password to the server
      
    })
      .then(response => {
        console.log(response.data);
        
        
      })
      .catch(error => {
        console.error(error);
        if (error.response.status === 400) {
          setErrorMessage(DOMPurify.sanitize(error.response.data.error));
        } else if (error.response.status === 500) {
          setErrorMessage(DOMPurify.sanitize(error.response.data.error));
        }
        else if (error.response.status === 600) {
          setErrorMessage(DOMPurify.sanitize(error.response.data.error));
        }
        else{
          setMessage(DOMPurify.sanitize("Successfully Logging In"));
          navigate('/userVerified');  //navigating to another page
        }
      });
      
      //navigating to another page
      

      // Clear the form inputs
      setEmail('');
      setPassword('');
      setMessage('');
    };
  
    return(
        <div>
          <div className='n'><Navbar/></div> 
        <div className='container-fluid h'><h1><center>Login</center></h1></div>
        <div className='container-fluid l1'>
      <form onSubmit={handleSubmit}>
        <label>
          email:
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <button className="btn btn-outline-primary" type="submit">Login</button>
        {errorMessage && <div style={{ color : 'red' }}>{errorMessage}</div>}
        {message && <div style={{ color : 'green' }}>{message}</div>}
      </form>
      
    </div>
    <div className='container-fluid p'><p>Don't have an account? <a href="/signup">Sign up</a></p></div>
        </div>
        
    )
}