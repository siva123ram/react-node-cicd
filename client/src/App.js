import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './components/Home';
import Login from './pages/Login';
import Signup from './pages/signup';
import SearchResultPage from './components/SearchResultPage';
import AddDetails from './pages/AddDetails';
import Verification from './pages/Verification';
import VerifyEmail from './pages/VerifyEmail';
import UserVerified from './pages/userVerified';
import UserRecruiter from './pages/userRecruiter';
import Interview from './pages/Interview';
import JobOpenings from './pages/jobOpenings';
import JobPosting from './pages/jobPosting';
import JobDetails from './pages/jobDetails';
import JobApply from './pages/jobApply';
import PhoneNumberForm from './pages/phoneNoForm';
import OtpForm from './pages/OTPVerification';
function App() {
  return (

      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/search' element={<SearchResultPage/>} />
          <Route path='/AddDetails' element={<AddDetails/>}/>
          <Route path='/Verification' element={<Verification/>}/>
          <Route path='/verifyEmail' element={<VerifyEmail/>}/>  
          <Route path='/userVerified' element={<UserVerified/>}/>
          <Route path='/userRecruiter' element={<UserRecruiter/>}/>
          <Route path='/interview' element={<Interview/>}/>
          <Route path='/jobOpenings' element={<JobOpenings/>}/>
          <Route path='/jobPosting' element={<JobPosting/>}/>
          <Route path="/job/:jobId" element = {<JobDetails/>}/>
          <Route path="/apply/:jobId" element = {<JobApply/>}/>
          <Route path='/phoneNoForm' element={<PhoneNumberForm/>}/>
          <Route path='/otpVerification' element={<OtpForm/>}/>
        </Routes>
      </Router>
  );
}

export default App;
