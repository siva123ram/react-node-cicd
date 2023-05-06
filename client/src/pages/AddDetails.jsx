import Navbar from "../components/Navbar"
import React, { useState } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';
import { useNavigate } from 'react-router-dom';
import "./AddDetails.css";
export default function AddDetails(){
  const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState(0);
  const [degree, setDegree] = useState('');
  const [branch, setBranch] = useState('');
  const [year, setYear] = useState(0);
  const [college, setCollege] = useState('');
  const [location, setLocation] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
 // Sanitize input before sending to server
 
 const sanitizedFirstName = DOMPurify.sanitize(firstName);
 const sanitizedLastName = DOMPurify.sanitize(lastName);
 const sanitizedGender = DOMPurify.sanitize(gender);
 const sanitizedAge = DOMPurify.sanitize(age);
 const sanitizedDegree = DOMPurify.sanitize(degree);
 const sanitizedBranch = DOMPurify.sanitize(branch);
 const sanitizedYear = DOMPurify.sanitize(year);
 const sanitizedCollege = DOMPurify.sanitize(college);
 const sanitizedLocation = DOMPurify.sanitize(location);
 const sanitizedState = DOMPurify.sanitize(state);
 const sanitizedCountry = DOMPurify.sanitize(country);

   

      // submit the form
    
    axios.post('/updateDetails', { 
      firstName: sanitizedFirstName, 
      lastName:sanitizedLastName, 
      gender: sanitizedGender, 
      age: sanitizedAge,
      degree: sanitizedDegree,
      branch: sanitizedBranch,
      year: sanitizedYear,
      college: sanitizedCollege,
      location: sanitizedLocation,
      state: sanitizedState,
      country: sanitizedCountry
     })
      .then(response => {
        console.log(response.data);
      });
      
        // perform form validation and submit
        navigate('/Login'); 
  };
  

    return(
        <div>
        <div className="container-fluid ad"><Navbar/></div>
        <div className="container-fluid ad1">
        <div className="container">
      <div className="personal-info">
        <h2>Personal Information</h2>
        <label htmlFor="first-name">First Name:</label>
        <input type="text" id="first-name" name="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        
        <label htmlFor="last-name">Last Name:</label>
        <input type="text" id="last-name" name="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        
        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      
      <div className="education-info">
        <h2>Educational Information</h2>
        <label htmlFor="degree">Degree:</label>
        <input type="text" id="degree" name="degree" value={degree} onChange={(e) => setDegree(e.target.value)} />
        
        <label htmlFor="branch">Branch:</label>
        <input type="text" id="branch" name="branch" value={branch} onChange={(e) => setBranch(e.target.value)} />
        
        <label htmlFor="year">Year of Passout:</label>
        <input type="number" id="year" name="year" value={year} onChange={(e) => setYear(e.target.value)} />
        
        <label htmlFor="college">College:</label>
        <input type="text" id="college" name="college" value={college} onChange={(e) => setCollege(e.target.value)} />
      </div>
      
      <div className="location-info">
        <h2>Location</h2>
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
        
        <label htmlFor="state">State:</label>
        <input type="text" id="state" name="state" value={state} onChange={(e) => setState(e.target.value)} />
        
        <label htmlFor="country">Country:</label>
        <input type="text" id="country" name="country" value={country} onChange={(e) => setCountry(e.target.value)} />
      </div>
    </div>
    <div className="container-fluid b1"><button className="btn btn-outline-primary bt1" type="submit" onClick={handleSubmit}>Save and Continue</button></div>
    </div> 
    <div>
      
    </div>
        </div>
    )
}