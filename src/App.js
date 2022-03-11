import './App.css';

import Navbar from './Components/Navbar/Navbar.jsx';
import { Route,Routes } from 'react-router-dom';
import SignupPage from './pages/Signup/Signup';
import LoginPage from './pages/Login/Login';
import styled from "styled-components";
import HomePage from './pages/HomePage';


const StylesTag = styled.div`
  {
    
  }
`;

function App() {
  return (
    <StylesTag>
    <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/auth/signup" element={<SignupPage />}/>
    <Route path="/auth/login" element={<LoginPage />}/>
    
    </Routes>  
    </StylesTag>
  );
}

export default App;
