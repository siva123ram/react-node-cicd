import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import SearchPage from './SearchPage';
import './Homecss.css';
import Footer from './Footer';

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
          <div className="col-6"><Link to="/Login" className='btn btn-outline-primary' type="submit">Hire now</Link></div>
          <div className="col-6"><Link to="/Login" className='btn btn-outline-primary' type="submit">Get a job</Link></div>
          </div>
          
         </div>
         <div className='container-fluid a2'>
          <SearchPage/>
       </div>
        </div>
        
        <div className="container-fluid b">
        
   
         <Footer/>

        </div>
        
            <div className="container-fluid c">

            </div>
           
        </div>
        
    )
}