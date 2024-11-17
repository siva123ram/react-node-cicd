import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {  Link, useNavigate } from 'react-router-dom';
import './jobDetailscss.css';

const JobDetails = () => {
    const navigate = useNavigate();
  const { jobId } = useParams();
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
  return (
    <div>
      <div><Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} /></div>
      <div className='container-fluid jd1'><h1>Job Details - {jobId}</h1></div>
      <div className='container-fluid jd2'>
      {jobDetails.map(job => (
        <div key={job.jobId} className='jd3'>
          <p>Position: {job.jobTitle}</p>
          <br></br>
          <p>Company: {job.companyName}</p>
          <br></br>
          <p>Location: {job.location}</p>
          <br></br>
          <p>Description: {job.jobDescription}</p>
          <br></br>
          <Link to={`/apply/${job.jobId}`} className="btn btn-success" type="button">Apply</Link>
        </div>
      ))}
      </div>
      </div>
  );
};

export default JobDetails;
