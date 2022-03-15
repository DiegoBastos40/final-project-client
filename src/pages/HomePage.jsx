import React, {useContext} from 'react'; 
import Navbar from '../Components/Navbar/Navbar'
import { Link } from 'react-router-dom';
import {ThemeContext} from '../context/theme.context.js';
import { AuthContext } from '../context/auth.context';
import Cover from '../Components/Cover/Cover';
import Modal from '../Components/Modal/Modal'

function HomePage() {
    const { theme, toggleTheme } = useContext(ThemeContext)
  const { loggedIn, user, logoutUser } = useContext(AuthContext)
  return (
    <div>
    {/* <nav className={'Navbar' + theme}>
      <Link to="/"> HomePage</Link>
      {loggedIn && (
        <>
          <Link to="/imcCalculator"> Check your IMC</Link>
          <Link to="/basalCalculator">Check your BMR</Link>
          {user.username}
          <button onClick={logoutUser}>Logout</button>
        </>
      )}

      {!loggedIn && (
        <>
          <Link to="/auth/signup"> Signup</Link>
          <Link to="/auth/login"> Login</Link>
          <Link to="/bmi"> BMI Calculator</Link>
          <Link to="/bmr"> BMR Calculator</Link>
          <Link to="/searchFood"> Seach Food</Link>
          <Link to="/searchRecipes"> Seach Recipes</Link>
        </>
      )}
    </nav> */}
<Cover />
<Modal />
    



    </div>
  )
}

export default HomePage

