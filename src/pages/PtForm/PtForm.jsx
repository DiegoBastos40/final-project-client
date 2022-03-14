import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/auth.context.js';
import { Link, useNavigate } from 'react-router-dom';


function PtForm(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [typeOfWorkout, setTypeOfWorkout] = useState("");
  const [workoutFrequency, setWorkoutFrequency] = useState("");
  const [workoutSessionTime, setWorkoutSessionTime] = useState("");
  const [drink, setDrink] = useState("");
  const [smoke, setSmoke] = useState(false);
  const [workedoutBefore, setWorkedoutBefore] = useState(false);
  const [dietType, setDietType] = useState(false);
  const [supplements, setSupplements] = useState(false);

  const { authenticateUser } = useContext(AuthContext);
  const storedToken = localStorage.getItem('authToken');

  const navigate = useNavigate();


  const handleNameInput = (e) => setName(e.target.value);
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handleTypeOfWorkoutInput = (e) => setTypeOfWorkout(e.target.value);
  const handleWorkoutFrequencyInput = (e) => setWorkoutFrequency(e.target.value);
  const handleWorkoutSessionTimeInput = (e) => setWorkoutSessionTime(e.target.value);
  const handleDrinkInput = (e) => setDrink(e.target.value);
  const handleSmokeInput = (e) => setSmoke(e.target.value);
  const handleDietTypeInput = (e) => setDietType(e.target.value);
  const handleWorkedoutBeforeInput = (e) => setWorkedoutBefore(e.target.value);
  const handleSupplementsInput = (e) => setSupplements(e.target.value);


  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(props)
   
    const body = {
    
      name,
      email,
      typeOfWorkout,
      workoutFrequency,
      workoutSessionTime,
      drink,
      smoke,
      workedoutBefore,
      dietType,
      supplements,

    };
  console.log(body)
  console.log(storedToken)

 axios
    .post(`${process.env.REACT_APP_API_URL}/trainnerform`, body,{
        headers: { Authorization: `Bearer ${storedToken}` },
      })
    .then((response) => {
      console.log('res.data', response.data);
      //storeToken(response.data.authToken);
      authenticateUser();
      navigate('/HomePage');
    })
    .catch((err) => console.log(err));

    
    setName('');
    setEmail('');
    setTypeOfWorkout("");
    setWorkoutFrequency("");
    setWorkoutSessionTime("");
    setDrink("");
    setSmoke(false);
    setWorkedoutBefore(false);
    setDietType("");
    setSupplements("");

//ggfdfg

  };
  return (
    <div>
      <h2>Add Food</h2>
      <form onSubmit={handleSubmit}>
        <label> Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameInput}
        />
        <label> Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailInput}
        />
        <label> TypeOfWorkout:</label>
        <input
          type="text"
          name="typeOfWorkout"
          value={typeOfWorkout}
          onChange={handleTypeOfWorkoutInput}
        />
        <label> WorkoutFrequency:</label>
        <input
          type="text"
          name="workoutFrequency"
          value={workoutFrequency}
          onChange={handleWorkoutFrequencyInput}
        />

        <label> WorkoutSessionTime:</label>
        <input
          type="text"
          name="WorkoutSessionTime"
          value={workoutSessionTime}
          onChange={handleWorkoutSessionTimeInput}
        />
        <label> Drink:</label>
        <input
          type="String"
          name="drink"
          value={drink}
          onChange={handleDrinkInput}
        />

        <label> Smoke:</label>
        <input
          type="String"
          name="smoke"
          value={smoke}
          onChange={handleSmokeInput}
        />

        <label> WorkedoutBefore:</label>
        <input
          type="String"
          name="workedoutBefore"
          value={workedoutBefore}
          onChange={handleWorkedoutBeforeInput}
        />

        <label> DietType:</label>
        <input
          type="text"
          name="dietType"
          value={dietType}
          onChange={handleDietTypeInput}
        />

        <label> Supplements:</label>
        <input
          type="String"
          name="supplements"
          value={supplements}
          onChange={handleSupplementsInput}
        /> 
 

        <button type="submit"> Submit Form</button>
      </form>
    </div>
  );
}

export default PtForm;