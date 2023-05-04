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
          
        </Routes>
      </Router>
  );
}

export default App;
