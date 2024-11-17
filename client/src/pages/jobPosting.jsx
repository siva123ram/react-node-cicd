import React,{ useState } from 'react';
import axios from 'axios';
import Navbar from "../components/Navbar"
import './jobPostingcss.css';
export default function JobPosting(){
    const [jobTitle, setJobTitle] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [reqExp, setReqExp] = useState(0);
    const [location, setLocation] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const handleJobTitleChange = (e) => {
    setJobTitle(e.target.value);
  };
  const handleCompanyName = (e) => {
    setCompanyName(e.target.value);
  };
  const handleReqExp = (e) => {
    setReqExp(e.target.value);
  };
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleJobDescriptionChange = (e) => {
    setJobDescription(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any necessary actions with the collected data, e.g., send it to a server or update the state of a parent component
    axios.post('http://localhost:5000/jobPostingDetails', { 
    
      jobTitle: jobTitle,
      companyName: companyName,
      reqExp: reqExp,
      location: location,
      jobDescription: jobDescription
      
     })
      .then(response => {
        console.log(response.data);
      });
    console.log("Job Title:", jobTitle);
    console.log("Job Description:", jobDescription);

    // Clear the form inputs
    setJobTitle('');
    setJobDescription('');
    setCompanyName('');
    setLocation('');
    setReqExp(0);
    setJobDescription('');
};
    return(
        <div>
         <div><Navbar/></div> 
         <div className='container-fluid j1'>
         <div className="container">
      <h1>Post Jobs Here</h1>
    </div>
    </div> 
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="jobTitle">Job Title:</label>
        <input
          type="text"
          id="jobTitle"
          value={jobTitle}
          onChange={handleJobTitleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          value={companyName}
          onChange={handleCompanyName}
          required
        />
      </div>
      <div>
        <label htmlFor="reqExp">Experience:</label>
        <input
          type="number"
          id="reqExp"
          value={reqExp}
          onChange={handleReqExp}
          required
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={handleLocation}
          required
        />
      </div>
      <div>
        <label htmlFor="jobDescription">Job Description:</label>
        <textarea
          id="jobDescription"
          value={jobDescription}
          onChange={handleJobDescriptionChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
    </div>
    </div>
    )
}