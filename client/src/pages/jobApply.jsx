import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import axios from 'axios';
import { useParams,useNavigate} from 'react-router-dom';
import './jobApplycss.css';

const JobApply = () => {
    const navigate = useNavigate();
  const { jobId } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);
  const [jobDetails, setJobDetails] = useState(null);
   console.log(jobId);
   const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogout = () => {
    // Perform logout logic here
    if (window.confirm("Press OK to Logout!")) {
      navigate('/Login');
    } else {
      
    }
    // For example, clear local storage, reset state, etc.
    setIsLoggedIn(false);
  };
  useEffect(() => {
    setIsLoggedIn(true);
    axios.get(`http://localhost:5000/jobsOpenings2/${jobId}`)
      .then((response) => {
        setJobDetails(response.data);
      })
      .catch(error => console.error(error));
  }, [jobId]);

  if (!jobDetails) {
    return <div>Loading...</div>;
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform submission logic here
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('resume', resume);

    axios.post('http://localhost:5000/applyJob', formData)
      .then((response) => {
        // Handle response from the backend
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
    // For example, send the form data to the server

    // Reset the form
    setName('');
    setEmail('');
    setResume(null);
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };
  return (
    <div>
      <div><Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout}/></div>
     
      <div className='container-fluid ja1'>
      
      <form onSubmit={handleSubmit}>
        <div>
        <h1>Job Application- {jobId}</h1>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Resume:</label>
          <input type="file"  accept=".pdf,.doc,.docx" onChange={handleResumeChange}  />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
      </div>
  );
};

export default JobApply;
