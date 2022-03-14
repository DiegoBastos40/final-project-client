import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {ThemeContext} from '../../context/theme.context';
import { AuthContext } from '../../context/auth.context';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { loggedIn, user, logoutUser } = useContext(AuthContext);

  return (
    <nav className={'Navbar ' + theme}>
      <Link to="/"> HomePage</Link>
      {loggedIn && (
        <>
          <Link to="/bmi"> Check your BMI</Link>
          <Link to="/bmr">Check your BMR</Link>
          <Link to="/profile">{user.username}</Link>
          <Link to="/searchFood"> Seach Food</Link>
          <Link to="/searchRecipes"> Seach Recipes</Link>
          <Link to="/ptform">PT Request</Link>
          
          <button onClick={logoutUser}>Logout</button>
        </>
      )}

      {!loggedIn && (
        <>
          <Link to="/auth/signup"> Signup</Link>
          <Link to="/auth/login"> Login</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;






