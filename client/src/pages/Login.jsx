
import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import Navbar from "../components/Navbar";
import './Logincss.css';
export default function Login(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleLogout = () => {
      // Perform logout logic here
      // For example, clear local storage, reset state, etc.
      setIsLoggedIn(false);
    };
  const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = e => {
      e.preventDefault();
  
      // Perform login logic here
      console.log(`email: ${email}, Password: ${password}`);
      axios.post('http://localhost:5000/login', { 
       
      email:email,  
      password: password  // send the encrypted password to the server
      
    })
      .then(response => {
        if (response.status === 200) {
          // Successful response
          console.log(DOMPurify.sanitize(response.data.message));
          console.log(DOMPurify.sanitize(response.data.data)); 
        if(response.data.data === "job seeker"){
          setMessage(DOMPurify.sanitize(response.data.message));
          setTimeout(()=>navigate('/userVerified'),1000);
          
        }
        else if(response.data.data === "recruiter"){
          //navigating to another page
          setMessage(DOMPurify.sanitize(response.data.message));
          setTimeout(()=>navigate('/userRecruiter'),1000);
          
        }
        } else {
          // Handle error response
          throw new Error('Error: ' + response.status);
        }
    
      })
      .catch(error => {
        console.error(error);
        if (error.response?.status === 400) {
          setErrorMessage(DOMPurify.sanitize(error.response?.data?.error));
          setTimeout(()=>setErrorMessage(''),3000);
        } else if (error.response?.status === 500) {
          setErrorMessage(DOMPurify.sanitize(error.response?.data?.error));
          setTimeout(()=>setErrorMessage(''),3000);
        }
        else if (error.response?.status === 600) {
          setErrorMessage(DOMPurify.sanitize(error.response?.data?.error));
          setTimeout(()=>setErrorMessage(''),3000);
        }
      });
      setMessage('');
      setErrorMessage('');
    };
  
    return(
        <div>
          <div className='n'><Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout}/></div> 
        <div className='container-fluid head'><h1><center>Login</center></h1></div>
        <div className='container-fluid l1'>
      <form onSubmit={handleSubmit} >
        <label>
          email:
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <button className="btn btn-outline-primary" type="submit" onClick={handleSubmit} >Login</button>
        {errorMessage && <div style={{ color : 'red' }}>{errorMessage}</div>}
        {message && <div style={{ color : 'green' }}>{message}</div>}
      </form>
      
    </div>
    <div className='container-fluid p'><p>Don't have an account? <a href="/signup">Sign up</a></p></div>
    <div className='container-fluid p'><p>Forgot Password? <a href="/ForgotPassword">Sign up</a></p></div>
        </div>
        
        
    )
}