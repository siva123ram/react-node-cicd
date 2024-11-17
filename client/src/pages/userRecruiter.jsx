import React,{useState,useLayoutEffect} from 'react';
import Navbar from "../components/Navbar";
import './userRecruitercss.css';
import axios from 'axios';
import {Link,useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
export default function UserRecruiter(){
  const[employeeList, setEmployeeList] = useState([]);
  const navigate = useNavigate();
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
           <div><Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout}/></div> 
           <div className='container-fluid r1'>
        <div className='container'>
        <h1>Hi! recruiter</h1>
            </div>
            <div className='container r11' >
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
    <div className="container-fluid r2">
         <div class="container">
  <div className="row">
    <div className="col-6"><h1>Find attractive and qualified individuals for job vacancies in your organization</h1><button type="button" className="btn btn-info">Recruite Here</button> </div>
    <div className="col-6"><h1> Advertise an open position within your organization to attract potential candidates</h1><Link to="/jobPosting"><button type="button" className="btn btn-info">Post Jobs Here</button></Link></div>
  </div>
</div>
    </div>
    <div className="container-fluid r3">
      <Footer/>
    </div>
        </div>
   
    )
}