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
        </>
      )}
    </nav>
  );
}

export default Navbar;






