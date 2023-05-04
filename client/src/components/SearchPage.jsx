import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchPage.css';
export default function SearchPage() {
  const [jobTitle, setJobTitle] = useState('');
  const [city, setCity] = useState('');
  const navigate = useNavigate();
  
  function handleJobTitleChange(event) {
    setJobTitle(event.target.value);
  }
    
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    navigate(`/search?jobTitle=${jobTitle}&city=${city}`);
  }
    
  return (
    <div className='container-fluid sp1'>
      <form onSubmit={handleSubmit}>
        <h1>Search candidate database</h1>
        <label htmlFor="job-title">Select job title:</label>
        <select id="job-title" name="job-title" value={jobTitle} onChange={handleJobTitleChange}>
          <option value="">Select a job title</option>
          <option value="web-developer">Web Developer</option>
          <option value="data-analyst">Data Analyst</option>
          <option value="marketing-manager">Marketing Manager</option>
          <option value="graphic-designer">Graphic Designer</option>
        </select>
        
        <label htmlFor="city">Select city:</label>
        <select id="city" name="city" value={city} onChange={handleCityChange}>
          <option value="">Select a city</option>
          <option value="new-york">New York</option>
          <option value="los-angeles">Los Angeles</option>
          <option value="chicago">Chicago</option>
          <option value="miami">Miami</option>
        </select>
        
        <button className='btn btn-outline-primary' type="submit">Search</button>
      </form>
    </div>
  );
}
