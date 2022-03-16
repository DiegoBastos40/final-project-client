import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/auth.context.js';
import { Link, useNavigate } from 'react-router-dom';
import "../../App.css"

function Lunch() {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [carbohydrates, setCarbohydrates] = useState(0);
  const [fat, setFat] = useState(0);
  const [quantity, setQuantity] = useState(0);
 

  const { authenticateUser } = useContext(AuthContext);
  const storedToken = localStorage.getItem('authToken');

  const navigate = useNavigate();


  const handleNameInput = (e) => setName(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleProteinInput = (e) => setProtein(e.target.value);
  const handleCarbohydratesInput = (e) => setCarbohydrates(e.target.value);
  const handleFatInput = (e) => setFat(e.target.value);
  const handleQuantityInput = (e) => setQuantity(e.target.value);
  


  const handleSubmit = (e) => {
      e.preventDefault();
      
   
    const body = {
    
      name,
      calories,
      protein,
      carbohydrates,
      fat,
      quantity,
      
    };
  console.log(body) 
  console.log(storedToken)

 axios
    .post(`${process.env.REACT_APP_API_URL}/diary`, body,{
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
    setCalories(0);
    setProtein("");
    setCarbohydrates(0);
    setFat(0);
    setQuantity(0);
    
//ggfdfg

  };
  return (
    <div className='iform'>
      <h2>Create Food</h2>
      <form onSubmit={handleSubmit} className="form">
        <label> Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameInput}
        />
        <label> Calories:</label>
        <input
          type="number"
          name="calories"
          value={calories}
          onChange={handleCaloriesInput}
        />
        <label> Protein:</label>
        <input
          type="number"
          name="protein"
          value={protein}
          onChange={handleProteinInput}
        />
       <label> Carbohydrates:</label>
        <input
          type="number"
          name="carbohydrates"
          value={carbohydrates}
          onChange={handleCarbohydratesInput}
        />

        <label> Fat:</label>
        <input
          type="number"
          name="fat"
          value={fat}
          onChange={handleFatInput}
        />

        <label> Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={quantity}
          onChange={handleQuantityInput}
        />
        

        <button type="submit"> Create Food</button>
      </form>
    </div>
  );
}

export default Lunch;