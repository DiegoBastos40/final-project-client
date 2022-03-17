import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditRequest() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [typeOfWorkout, setTypeOfWorkout] = useState("");
    const [workoutFrequency, setWorkoutFrequency] = useState("");
    const [workoutSessionTime, setWorkoutSessionTime] = useState("");
    const [drink, setDrink] = useState("");
    const [smoke, setSmoke] = useState("");
    const [workedoutBefore, setWorkedoutBefore] = useState("");
    const [dietType, setDietType] = useState("");
    const [supplements, setSupplements] = useState("");

  const { requestId } = useParams();

  const navigate = useNavigate();

  const deleterequest = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/trainnerform/${requestId}`)
      .then(() => navigate('/profile'));
  };

  const fetchRequest = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/trainnerform/${requestId}`);
      console.log(response)
      let { name, email, typeOfWorkout, workoutFrequency, workoutSessionTime, drink, smoke, workedoutBefore, dietType, supplements } = response.data;
      setName(name);
    setEmail(email);
    setTypeOfWorkout(typeOfWorkout);
    setWorkoutFrequency(workoutFrequency);
    setWorkoutSessionTime(workoutSessionTime);
    setDrink(drink);
    setSmoke(smoke);
    setWorkedoutBefore(workedoutBefore);
    setDietType(dietType);
    setSupplements(supplements);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { name, email, typeOfWorkout, workoutFrequency, workoutSessionTime, drink, smoke, workedoutBefore, dietType, supplements };

    axios
      .put(`${process.env.REACT_APP_API_URL}/trainnerform/${requestId}`, body)
      .then((response) => {
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
        navigate(`/profile`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='iform'>
      <h3>Edit Request</h3>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="emaik">Email</label>
        <input type="text" email="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="typeOfWorkout">TypeOfWorkout</label>
        <input type="text" typeOfWorkout="typeOfWorkout" value={typeOfWorkout} onChange={(e) => setTypeOfWorkout(e.target.value)} />

        <label htmlFor="workoutFrequency">WorkoutFrequency</label>
        <input type="text" workoutFrequency="workoutFrequency" value={workoutFrequency} onChange={(e) => setWorkoutFrequency(e.target.value)} />

        <label htmlFor="workoutSessionTime">WorkoutSessionTime</label>
        <input type="text" name="workoutSessionTime" value={workoutSessionTime} onChange={(e) => setWorkoutSessionTime(e.target.value)} />

        <label htmlFor="drink">Drink</label>
        <input type="text" name="drink" value={drink} onChange={(e) => setDrink(e.target.value)} />

        <label htmlFor="smoke">Smoke</label>
        <input type="text" name="smoke" value={smoke} onChange={(e) => setSmoke(e.target.value)} />

        <label htmlFor="workedoutBefore">WorkedoutBefore</label>
        <input type="text" name="workedoutBefore" value={workedoutBefore} onChange={(e) => setWorkedoutBefore(e.target.value)} />

        <label htmlFor="dietType">DietType</label>
        <input type="text" name="dietType" value={dietType} onChange={(e) => setDietType(e.target.value)} />

        <label htmlFor="supplements">Supplements</label>
        <input type="text" name="supplements" value={supplements} onChange={(e) => setSupplements(e.target.value)} />



       
      


        {/* <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        /> */}
        <button type="submit">Edit Request</button>
      </form>
      <button onClick={deleterequest}> Delete Request</button>
    </div>
  );
}

export default EditRequest;