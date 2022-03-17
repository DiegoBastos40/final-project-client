import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/auth.context.js";
import '../Profile/Profile.css'

function Profile() {
  const { authenticateUser } = useContext(AuthContext);
  const storedToken = localStorage.getItem("authToken");
  const [user, setUser] = useState(null);

  const fetchRequest = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/user`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      console.log("the user", response.data);
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
      <div>
        <h2>Profile</h2>
     
       
        <li>
                  <Link to="/yourRequests">Check your Requests</Link>
                </li>

        <div className="food-boxes">
                <div className="food-card">
               
                  <h1><Link to="/yourBreakfast">Breakfast</Link></h1>
                  <div>
                    
                  </div>
                  </div>

                  <div className="food-card">
                  <h1><Link to="/yourLunch">Lunch</Link></h1>
                  </div>

                  <div className="food-card">
                  <h1><Link to="/yourDinner">Dinner</Link></h1>
                  </div>
                  
                  <div className="food-card">
                  <h1><Link to="/yourSnacks">Snacks</Link></h1>
                  </div>
        </div>


    </div>

      {user &&
        user.foodCreated.map((req) => (
          <li key={req.name}>
            <p>Name: {req.name}</p>
            <p>calories: {req.calories}</p>
            <p>protein: {req.protein}</p>
            <p>carbohydrates: {req.carbohydrates}</p>
            <p>fat: {req.fat}</p>
            <p>quantity: {req.quantity}</p>
           

            <Link to={`/diary/edit/${req._id}`}>Edit Food</Link>
          </li>
        ))}

      
    </div>
  );
}

export default Profile;
