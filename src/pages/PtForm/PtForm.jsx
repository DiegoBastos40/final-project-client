import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/auth.context.js';
import { Link, useNavigate } from 'react-router-dom';
import "../../App.css"

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
      navigate('/profile');
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
    <div className='iform'>
      <h2>Personal Trainner Require</h2>
      <form onSubmit={handleSubmit} className="form">
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



        <label> Type Of Workout:</label>
        



<select
              className="activity"
              value={typeOfWorkout}
              onChange={handleTypeOfWorkoutInput}
              name="typeOfWorkout"
            >
              
              <option value="Body Weight">
              Body Weight
              </option>
              <option value="Gym Workout">
              Gym Workout
              </option>
              <option value="Just Cardio">
              Just Cardio
              </option>
              
            </select>




        
        <label> Workout Frequency (times/week):</label>
        <input
          type="number"
          name="workoutFrequency"
          value={workoutFrequency}
          onChange={handleWorkoutFrequencyInput}
        />

        <label> Workout Session Time (min):</label>
        <input
          type="number"
          name="WorkoutSessionTime"
          value={workoutSessionTime}
          onChange={handleWorkoutSessionTimeInput}
        />
        <label>Do you Drink ?</label>
        <div className="flex-row"> 
        <input type="radio" value="yes" name="drink"  onChange={handleDrinkInput} /> Yes
        <input type="radio" value={drink} name="drink"  onChange={handleDrinkInput}/> No
        </div>

        <label>Do You Smoke ?</label>
        <div className="flex-row"> 
        <input type="radio" value="Yes" name="smoke"  onChange={handleSmokeInput} /> Yes
        <input type="radio" value="No" name="smoke"  onChange={handleSmokeInput}/> No
        </div>

        <label> Workedout Before ?</label>
        <div className="flex-row"> 
        <input type="radio" value="Yes" name="workedoutBefore"  onChange={handleWorkedoutBeforeInput} /> Yes
        <input type="radio" value="No" name="workedoutBefore"  onChange={handleWorkedoutBeforeInput}/> No
        </div>

        <label>Do you take Supplements ?</label>
        <div className="flex-row"> 
        <input type="radio" value="Yes" name="supplements"  onChange={handleSupplementsInput} /> Yes
        <input type="radio" value="No" name="supplements"  onChange={handleSupplementsInput}/> No
        </div>

        <label> DietType:</label>
      

<select
              className="activity"
              value={dietType}
              onChange={handleDietTypeInput}
              name="activity"
            >
              
              <option value="Vegeterian">
              Vegeterian
              </option>
              <option value="Veggan">
                Veggan
              </option>
              <option value="No Restrictions">
              No Restrictions
              </option>
              
            </select>


 

        <button type="submit"> Submit Form</button>
      </form>
    </div>
  );
}

export default PtForm;