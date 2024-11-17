import React,{useState,useLayoutEffect} from 'react';
import Navbar from "../components/Navbar";
import './userVerifiedcss.css';
import axios from 'axios';
import {  Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
export default function UserVerified(){
  const navigate = useNavigate();
  const[employeeList, setEmployeeList] = useState([]);
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
    axios.get('http://localhost:5000/userInfo').then((response)=>{setEmployeeList(response.data); }).catch(error => console.error(error));
  }, []);
    return(
        <div>
        <div className='container-fluid n'><Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout}/></div> 
        <div className='container-fluid c1'>
        <div className='container'>
        <h1>Hi! Job Seeker</h1>
            </div>
            <div className='container c11' >
      {employeeList.map(employee => (
        <div key={employee.id}>
          <p>{employee.name}</p>
          <br></br>
          <p>{employee.email}</p>
          <br></br>
          <p>{employee.userType}</p>
          <br></br>
          <p>{employee.country}</p>
          <br></br>
        </div>
      ))}
      </div>
     
    </div>
    <div className="container-fluid c2">
  
  <div className="row">
    <div className="col-6 col-sm-6"><h1>Find attractive jobs with your skills click the button below to know the job offers</h1></div>
    <div className="col-6 col-sm-6"><h1> Advertise your skills and experiences here to get notified by the top level HR recruiters</h1></div>

    
    <div className="w-100"></div>

    <div className="col-6 col-sm-6"><Link to = "/jobOpenings" className="btn btn-outline-info" type="button">Get Hired</Link></div>
    <div className="col-6 col-sm-6"><button type="button" className="btn btn-outline-info">Update Skills</button></div>
  </div>


    </div>
         <div className="container-fluid c3">
         <Footer/>
      
    </div>
     </div>

    )
}