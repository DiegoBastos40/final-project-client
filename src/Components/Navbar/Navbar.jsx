import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {ThemeContext} from '../../context/theme.context';
import { AuthContext } from '../../context/auth.context';
import "./Navbar.css"


function Navbar() {
  const { loggedIn, user, logoutUser } = useContext(AuthContext);
  return (
    <>
      <nav id="navbars">
        <div className="nav-wrapper">
          <ul id="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            {!loggedIn && (
              <>
                <li>
                  <Link to="/auth/signup">SignUp</Link>
                </li>
                <li>
                  <Link to="/auth/login">LogIn</Link>
                </li>
              </>
            )}
            {loggedIn && (
              <>
                <li>
                  <Link to="/bmi">Check your BMI</Link>
                </li>
                <li>
                  <Link to="/bmr">Check your BMR</Link>
                </li>
                <li>
                  <Link to="/searchFood">Seach Food</Link>
                </li>
                <li>
                  <Link to="/searchRecipes">Seach Recipes</Link>
                </li>
                <li>
                  <Link to="/ptform">PT Request</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/" onClick={logoutUser}>
                    Log out
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>

      {/* <div className="menuIcon">
        <span className="icon icon-bars"></span>
        <span className="icon icon-bars overlay"></span>
      </div>

      <div className="overlay-menu">
        <ul id="menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div> */}
    </>
  );
}

export default Navbar;






