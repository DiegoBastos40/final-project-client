import CheckYourRequests from '../CheckYourRequests'
import React, { useState, useEffect ,useContext} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/auth.context.js'


function Profile() {

  const { authenticateUser } = useContext(AuthContext);
  const storedToken = localStorage.getItem('authToken');
  const [user, setUser] = useState(null);

  const fetchRequest = async () => {
    try {

      let response = await axios.get(`${process.env.REACT_APP_API_URL}/user`,{
        headers:{ Authorization: `Bearer ${storedToken}` }
      },);
      console.log("the user",response.data);
      setUser(response.data);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);


  return (
    <div>
        <h2>Profile</h2>
        <li>
                  <Link to="/yourRequests">Check your Requests</Link>
                </li>
        
{user && user.ptRequest.map((req) => (
          <li key={req.name}>
            <h3>{req.typeOfWorkout}</h3>
          <p>{req.name}</p>
            <p>{req.workoutSessionTime}</p>
          </li>
        ))} 
    </div>
  )
}

export default Profile