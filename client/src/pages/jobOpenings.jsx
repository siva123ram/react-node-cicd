
import React,{useState,useLayoutEffect} from 'react';
import Navbar from "../components/Navbar"
import axios from 'axios';
import {  Link, useNavigate } from 'react-router-dom';
import './JobOpeningscss.css';


const JobOpenings = () => {
  const navigate = useNavigate();
    const [jobOpenings, setJobOpenings] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);
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
 
    useLayoutEffect(() => {
      setIsLoggedIn(true);
        axios.get('http://localhost:5000/jobsOpenings').then((response)=>{setJobOpenings(response.data); }).catch(error => console.error(error));
      }, []);

       // Pagination logic
   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = jobOpenings.slice(indexOfFirstPost, indexOfLastPost);

   const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return(
        <div>
            <div><Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout}/></div>
            <div className='container-fluid jp11' id='heading'><h1>Job Openings</h1></div>
            <div className='container-fluid jp12'>
            <div className="row">
          {currentPosts.map((job) => (
            <div className="col-md-3" key={job.jobId}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{job.jobTitle}</h5>
                  <p className="card-text">{job.companyName}</p>
                  <p className="card-text">{job.location}</p>
                  <Link to={`/job/${job.jobId}`} className="btn btn-outline-primary" type="button">
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
           </div>
         <div className='container-fluid jp13'>
         <Pagination
            postsPerPage={postsPerPage}
            totalPosts={jobOpenings.length}
             currentPage={currentPage}
              onPageChange={paginate}
           />
         </div>
      </div>
   );
};

const Pagination = ({ postsPerPage, totalPosts, currentPage, onPageChange }) => {
    const pageNumbers = Math.ceil(totalPosts / postsPerPage);
  
    return (
      <div className="pagination-container">
        <ul className="pagination">
          {currentPage > 1 && (
            <li onClick={() => onPageChange(currentPage - 1)} className="page-number">
              Previous
            </li>
          )}
         
          {Array.from({ length: pageNumbers }, (_, index) => index + 1).map((number) => (
            <li
              key={number}
              onClick={() => onPageChange(number)}
              className={`page-number ${number === currentPage ? "active" : " "}`}
            >
              {number}
            </li>
          ))}
  
          {currentPage < pageNumbers && (
            <li onClick={() => onPageChange(currentPage + 1)} className="page-number">
              Next
            </li>
          )}
        </ul>
      </div>
    );
  };

export default JobOpenings;