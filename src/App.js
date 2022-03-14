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
import SearchRecipes from './pages/SearchRecipes/SearchRecipes';
import PtForm from './pages/PtForm/PtForm';


const StylesTag = styled.div`
  {
    
  }
`;

function App() {
  return (
    <StylesTag>
    <Navbar />
    <Routes>
    {/* <Route path="/" element={<HomePage/>}></Route> */}
    <Route path="/auth/signup" element={<SignupPage />}/>
    <Route path="/auth/login" element={<LoginPage />}/>
    <Route path="/bmi" element={<BMI />}/>
    <Route path="/bmr" element={<Bmr />}/>
    <Route path="/searchFood" element={<SearchPage/>}/>
    <Route path="/ptform" element={<PtForm/>}/>
    <Route path="/searchRecipes" element={<SearchRecipes/>}/>
    </Routes>  
    </StylesTag>
  );
}

export default App;
