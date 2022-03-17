import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/auth.context.js";
import '../Profile/Profile.css'

function Profile() {
  const { authenticateUser } = useContext(AuthContext);
  const storedToken = localStorage.getItem("authToken");
  const [user, setUser] = useState(null);
  const [caloriesValue, setCaloriesValue] = useState(0);
   
  const fetchRequest = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/user`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });

      let user = response.data
      setUser(user);
      
      setCaloriesValue(user.totalCalories)

      let allCalories = user.foodCreated.map(food => food.calories * food.quantity)
      let intakeCalories = allCalories.reduce((acc,value)=> acc+value)

      let remainingCalories = user.totalCalories - intakeCalories

      setCaloriesValue(remainingCalories)


    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);


  return (
    <div>
      <div className="h2">
      
        {user && <h2>Daily Calories :{caloriesValue}</h2>}

        <div className="food-boxes">
                <div className="food-card">
               
                  <h1><Link to="/yourBreakfast">Add Breakfast</Link></h1>
                  <img src="/pexels-photo-376464.jpeg" width="100%" height="200px" object-fit="cover" border-radius="2.5rem"></img>
                  <div className="edit">
                  {user &&
                    user.foodCreated.filter((element) => {return element.meal === "breakfast"}).map((req) => (
                      <li key={req.name}>
                        <p>{req.name}</p>
                        <p>Calories: {(req.calories)*(req.quantity)}</p>
                        
                        <Link to={`/diary/edit/${req._id}`}>Edit</Link> <hr />
                      </li> 
                    
                    ))}
                    
                       
       
                  </div>
                  </div>

                  <div className="food-card">
                  <h1><Link to="/yourLunch">Add Lunch</Link></h1>
                  <img src="/pexels-photo-1279330.webp" width="100%" height="200px" object-fit="cover" border-radius="2.5rem"></img>
                  <div>
                  {user &&
                    user.foodCreated.filter((element) => {return element.meal === "lunch"}).map((req) => (
                      <li key={req.name}>
                        <p>{req.name}</p>
                        <p>calories: {(req.calories)*(req.quantity)}</p>
                                             

                        <Link to={`/diary/edit/${req._id}`}>Edit</Link> <hr />
                      </li>
                    ))}
                  </div>
                  </div>

                  <div className="food-card">
                  <h1><Link to="/yourDinner">Add Dinner</Link></h1>
                  <img src="/pexels-photo-675951.jpeg" width="100%" height="200px" object-fit="cover" border-radius="2.5rem"></img>

                  <div>
                  {user &&
                    user.foodCreated.filter((element) => {return element.meal === "dinner"}).map((req) => (
                      <li key={req.name}>
                      <p>{req.name}</p>
                        <p>calories: {(req.calories)*(req.quantity)}</p>
                      

                        <Link to={`/diary/edit/${req._id}`}>Edit</Link> <hr />
                      </li>
                    ))}
                  </div>
                  </div>
                  
                  <div className="food-card">
                  
                  <h1><Link to="/yourSnacks">Add Snacks</Link></h1>
                  <img src="/pexels-photo-2122278.jpeg" width="100%" height="200px" object-fit="cover" border-radius="2.5rem"></img>
                  <div>
                  {user &&
                    user.foodCreated.filter((element) => {return element.meal === "snacks"}).map((req) => (
                      <li key={req.name}>
                      <p>{req.name}</p>
                        <p>calories: {(req.calories)*(req.quantity)}</p>
                      

                        <Link to={`/diary/edit/${req._id}`}>Edit</Link><hr />
                      </li>
                    ))}
                  </div>
                  </div>
        </div>


 
 <Link to="/yourRequests">Check your Requests</Link>
    
    
    
    </div>

      
    </div>
  );
}

export default Profile;
