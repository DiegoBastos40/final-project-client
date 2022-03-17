import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../App.css'

import Navbar from '../../Components/Navbar/Navbar';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [objective, setObjective] = useState('');
  const [lifestyle, setLifestyle] = useState('');

  const navigate = useNavigate();

  const handlePassword = (e) => setPassword(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleAge = (e) => setAge(e.target.value);
  const handleGender = (e) => setGender(e.target.value);
  const handleHeight = (e) => setHeight(e.target.value);
  const handleWeight = (e) => setWeight(e.target.value);
  const handleObjective = (e) => setObjective(e.target.value);
  const handleLifestyle = (e) => setLifestyle(e.target.value);
  


  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { username, password, name, age, gender, height, weight, objective, lifestyle};

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/signup`, body)
      .then((response) => {
          console.log(response)
        navigate('/auth/login')
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className='iform'>
    
      <h1>Signup</h1>
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" value={username} onChange={handleUsername} />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={password} onChange={handlePassword} />

        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label htmlFor="age">Age</label>
        <input type="number" name="age" value={age} onChange={handleAge} />

        <label htmlFor="gender"></label> 
        
        <div className="flex-row">
      
        <input type="radio" value="Male" name="gender"  onChange={handleGender} /> Male
        <input type="radio" value="Female" name="gender"  onChange={handleGender}/> Female
    </div>

        <label htmlFor="height">Height</label>
        <input type="number" name="height" value={height} onChange={handleHeight} />
        
        <label htmlFor="weight">Weight</label>
        <input type="number" name="weight" value={weight} onChange={handleWeight} />

        <label htmlFor="objective"></label>
    <div className="flex-row">
        <input type="radio" value="Build Muscle" name="objective"  onChange={handleObjective} /> Build Muscle
        <input type="radio" value="Lose Fat" name="objective"  onChange={handleObjective}/> Lose Fat
</div>
        <label htmlFor="lifestyle">Life Style</label>
       
        <select
              className="activity"
              value={lifestyle}
              onChange={handleLifestyle}
              name="activity"
            >
              
              <option value="Sedentary (Very little or no exercise, and desk job)">
                Sedentary (Very little or no exercise, and desk job)
              </option>
              <option value="Lightly Active (Light exercise 1 to 3 days per week)">
                Lightly Active (Light exercise 1 to 3 days per week)
              </option>
              <option value="Moderately Active (Moderate exercise 3 to 5 days per week)">
                Moderately Active (Moderate exercise 3 to 5 days per week)
              </option>
              <option value="Very Active (Heavy exercise 6 to 7 days per week)">
                Very Active (Heavy exercise 6 to 7 days per week)
              </option>
              <option value="Extremely Active (Very intense exercise, and physical job, exercise multiple times per day)">
                Extremely Active (Very intense exercise, and physical job, exercise multiple times per day)
              </option>
            </select>


        <button type="submit"> Signup</button>
      </form>
    </div>
  );
}

export default SignupPage;