import './App.css';

import Navbar from './Components/Navbar/Navbar.jsx';
import { Route,Routes } from 'react-router-dom';
import SignupPage from './pages/Signup/Signup';
import LoginPage from './pages/Login/Login';
import styled from "styled-components";
import HomePage from './pages/HomePage';
import BMI from './pages/BMI';
import Bmr from './pages/BMR/BMR';
import SearchPage from './pages/SearchPage/SearchPage';
import SeachBar from './pages/SearchRecipes/SeachBar';
import PtForm from './pages/PtForm/PtForm';
import Footer from './Components/Footer/Footer';
import Profile from './pages/Profile/Profile';
import EditRequest from './pages/Profile/EditRequest';
import CheckYourRequests from './pages/Profile/CheckYourRequests';
import Breakfast from './pages/Profile/Breakfast';
import Lunch from './pages/Profile/Lunch';
import Dinner from './pages/Profile/Dinner';
import Snacks from './pages/Profile/Snacks';

const StylesTag = styled.div`
  {
    
  }
`;

function App() {
  return (
    <StylesTag>
    <Navbar />
    <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/auth/signup" element={<SignupPage />}/>
    <Route path="/auth/login" element={<LoginPage />}/>
    <Route path="/bmi" element={<BMI />}/>
    <Route path="/bmr" element={<Bmr />}/>
    <Route path="/searchFood" element={<SearchPage/>}/>
    <Route path="/ptform" element={<PtForm/>}/>
    <Route path="/searchRecipes" element={<SeachBar/>}/>
    <Route path="/profile" element={<Profile/>}/>
   {/*  <Route path="/trainnerform/edit" element={<EditRequest/>}/> */}
    <Route path="/trainnerform/edit/:requestId" element={<EditRequest/>}/>
    <Route path="/yourRequests" element={<CheckYourRequests/>}/>
    <Route path="/yourBreakfast" element={<Breakfast/>}/>

    </Routes> 
    <Footer />
    </StylesTag>
  );
}

export default App;


