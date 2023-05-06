import React,{useState} from 'react';
import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DOMPurify from 'dompurify';
import Navbar from "../components/Navbar"
import './Signupcss.css';
export default function Signup(){
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [userType, setUserType] = useState("job seeker");

  
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const checkPasswordStrength = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };
  const validateMobile = (mobile) => {
    const regex = /^\d{10}$/;
    return regex.test(mobile);
  };
  //sanitizing userInputs
  const handleNameChange = (event) => {
    const sanitizedValue = DOMPurify.sanitize(event.target.value);
    setName(sanitizedValue);
  };

  const handleEmailChange = (event) => {
    const sanitizedValue = DOMPurify.sanitize(event.target.value);
    setEmail(sanitizedValue);
  };

  const handlePasswordChange = (event) => {
    const sanitizedValue = DOMPurify.sanitize(event.target.value);
    setPassword(sanitizedValue);
  };
  const handleMobileChange = (event) => {
    const sanitizedValue = DOMPurify.sanitize(event.target.value);
    setMobile(sanitizedValue);
  };
  const handleUserTypeChange = (event) => {
    const sanitizedValue = DOMPurify.sanitize(event.target.value);
    setUserType(sanitizedValue);
  };

  const handleErrorMessage = () => {
      setErrorMessage(" ");
  }
  
  //email verification
  const sendVerificationEmail = async (email) => {
    try {
      const response = await axios.post('/send-verification-url', { email });
      console.log(response.data.message);
      // show a success message to the user
    } catch (error) {
      console.error(error);
      // show an error message to the user
    }
  }



  const handleSubmit = (event) => {
    event.preventDefault();
 // Sanitize input before sending to server
 const sanitizedName = DOMPurify.sanitize(name);
 const sanitizedEmail = DOMPurify.sanitize(email);
 const sanitizedMobile = DOMPurify.sanitize(mobile);
 const sanitizedPassword = DOMPurify.sanitize(password);
 const sanitizeduserType = DOMPurify.sanitize(userType);

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
    if (!checkPasswordStrength(password)) {
      setPasswordError('Password must be Strong ');
    } else {
      setPasswordError('');
    }
    if (!validateMobile(mobile)) {
      setMobileError('Please enter a valid mobile number');
    } else {
      setMobileError('');
    }
    if (!userType) {
      alert('Please select a user type.');
      return;
    }
    if (validateEmail(email) && validateMobile(mobile) && checkPasswordStrength(password)) {
       // Encrypt password
       const salt = CryptoJS.lib.WordArray.random(16); // Generate a random 16-byte salt
       const saltedPassword = salt + sanitizedPassword; // Add the salt to the password
       const encryptedPassword = CryptoJS.SHA256(saltedPassword).toString();
       console.log('Salt:', salt.toString());
       console.log('Hashed password:', encryptedPassword);

      // submit the form
    
    axios.post('/create', { 
      name: sanitizedName, 
      email:sanitizedEmail, 
      mobile: sanitizedMobile, 
      password: encryptedPassword,  // send the encrypted password to the server
      userType:sanitizeduserType,
      salt:salt.toString()
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
      }
      );}
      
        // perform form validation and submit
        if (validateEmail(email) && validateMobile(mobile) && checkPasswordStrength(password)) {
        sendVerificationEmail(sanitizedEmail); // send the verification email
        window.alert("Please check your email for verification.");
        navigate('/AddDetails'); 
        }
  };
    return(
        <div>
         <div className='container-fluid n'><Navbar/></div> 
         <div className='container-fluid h1'><h2>Sign Up Form</h2></div>
        <div className='container-fluid s1'>
          <form onSubmit={handleSubmit}>
  <div className="input-container">
    <i className="fa fa-user icon"></i>
    <input className="input-field" type="text" value={name} placeholder="Username" name="name" onChange={handleNameChange}/>
  </div>

  <div className="input-container">
    <i className="fa fa-envelope icon"></i>
    <input className="input-field" type="text" value={email} placeholder="Email" name="email" onChange={handleEmailChange}/> 
   </div>
   <div className='e'>{emailError && <span style={{ color: 'red'}}>{emailError}</span>}</div>

   <div className="input-container">
          <i className="fa fa-mobile icon"></i>
          <input className="input-field" type="text" value={mobile} placeholder="Mobile" name="mobile" onChange={handleMobileChange}/>
        </div>
        <div className='e'>{mobileError && <span style={{ color: 'red'}}>{mobileError}</span>}</div>

  <div className="input-container">
    <i className="fa fa-key icon"></i>
    <input className="input-field" type="password" value={password} placeholder="Password" name="password" onChange={handlePasswordChange}/>
  </div>
  <div className='e'> {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}</div>
  <br />
      <div className="radioButtons">
      <div className="form-check">
  <input className="form-check-input" type="radio" name="userType" id="jobSeeker" value="job seeker"  checked={userType === "job seeker"}
            onChange={handleUserTypeChange}/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    Job seeker
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="userType" id="recruiter" value="recruiter" checked={userType === "recruiter"}
            onChange={handleUserTypeChange}/>
  <label className="form-check-label" htmlFor="flexRadioDefault2">
    Recruiter 
  </label>
</div>
      </div>
      <div className='container-fluid b1'><button type="submit" className="h" onClick={handleErrorMessage}>Sign Up</button>
               {errorMessage && <div style={{ color : 'red' }}>{errorMessage}</div>}</div>
              
</form>

        </div>
        
        </div>
    );
}