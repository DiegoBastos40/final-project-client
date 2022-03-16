import CheckYourRequests from './CheckYourRequests'
import React, { useState, useEffect ,useContext} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/auth.context.js'


function Profile() {


  return (
    <div>
        <h2>Profile</h2>
        <li>
                  <Link to="/yourRequests">Check your Requests</Link>
                </li>
                
                  <h1><Link to="/yourBreakfast">Breakfast</Link></h1>
                  <h1><Link to="/yourLunch">Lunch</Link></h1>
                  <h1><Link to="/yourDinner">Dinner</Link></h1>
                  <h1><Link to="/yourSnacks">Snacks</Link></h1>
        


    </div>
  )
}

export default Profile