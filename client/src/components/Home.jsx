import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import SearchPage from "./SearchPage";
import './Homecss.css';

export default function Home(){
    return(
        <div>
            <div className='container-fluid a'>
        <div className='container-fluid'><Navbar /></div>
        <div class="container-fluid a1">
          <h1>India's Largest Job Portal</h1>
          <h2>WorkIndia helps you hire staff in 2 days</h2>
          <img alt='' src='https://www.workindia.in/employers/_next-images/?url=http%3A%2F%2Fresources.workindia.in%2Femployer%2Fassets%2Fimg%2Flanding_hero.png&w=1920&q=75'></img>
          <div className="row">
          <div className="col-6"><button className='btn btn-outline-primary' type="submit">Hire now</button></div>
          <div className="col-6"><Link to="/Login"><button className='btn btn-outline-primary'type="submit">Get a job</button></Link></div>
          </div>
          
         </div>
         <div className='container a2'>
          <SearchPage/>
       </div>
        </div>
        
        <div className="container-fluid b">
        
   
 

        </div>
        
            <div className="container-fluid c"></div>
           
        </div>
        
    )
}