import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/auth.context.js";

function CheckYourRequests() {
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
    <div className="iform">
      <h2>Your Requests</h2>

      {user &&
        user.ptRequest.map((req) => (
          <li key={req.name}>
            <p>Name: {req.name}</p>
            <p>Email: {req.email}</p>
            <p>Type of Workout: {req.typeOfWorkout}</p>
            <p>Workout Frequency (per week): {req.workoutFrequency}</p>
            <p>Workout Session Time: {req.workoutSessionTime}</p>
            <p>Drink?: {req.drink}</p>
            <p>Smoke?: {req.smoke}</p>
            <p>Workedout Before ?: {req.workedoutBefore}</p>
            <p>Diet Type: {req.dietType}</p>
            <p>Take Supplements?: {req.supplements}</p>

            <Link to={`/trainnerform/edit/${req._id}`}>Edit Request</Link>
          </li>
        ))}

      <Link to="/profile"> Back to Requests List</Link>
    </div>
  );
}

export default CheckYourRequests;
