import React,{useState,useLayoutEffect} from 'react';
import Navbar from "../components/Navbar";
import './userVerifiedcss.css';
import axios from 'axios';
export default function UserVerified(){
  const[employeeList, setEmployeeList] = useState([]);

  useLayoutEffect(() => {
    axios.get('/userInfo').then((response)=>{setEmployeeList(response.data); }).catch(error => console.error(error));
  }, []);
    return(
        <div>
        <div className='container-fluid n'><Navbar/></div> 
        <div className='container-fluid ab1'>
        <div className='container-fluid ab'>
        <h1>Successfully Logged in</h1>
            </div>
            <div className='container-fluid ab' >
      {employeeList.map(employee => (
        <div key={employee.id}>
          <p>{employee.name}</p>
          <br></br>
          <p>{employee.email}</p>
          <br></br>
          <p>{employee.country}</p>
          <br></br>
        </div>
      ))}
      </div>
    </div>
         <div className="container-fluid ab2">
      <p>Thank you for choosing us!</p>
    </div>
     </div>

    )
}