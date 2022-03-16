import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditFood() {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [carbohydrates, setCarbohydrates] = useState(0);
  const [fat, setFat] = useState(0);
  const [quantity, setQuantity] = useState(0);
 
  const storedToken = localStorage.getItem("authToken");
  const { foodId } = useParams();

  const navigate = useNavigate();

  const deletefood = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/diary/${foodId}`,{
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => navigate('/profile'));
  };

  const fetchFood = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/diary/${foodId}`,{
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      console.log(response.data)
      let { name, calories, protein, carbohydrates, fat, quantity } = response.data;
      setName(name);
    setCalories(calories);
    setProtein(protein);
    setCarbohydrates(carbohydrates);
    setFat(fat);
    setQuantity(quantity);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFood();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { name, calories, protein, carbohydrates, fat, quantity };

    axios
      .put(`${process.env.REACT_APP_API_URL}/diary/${foodId}`, body,{
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setName('');
        setCalories(0);
        setProtein("");
        setCarbohydrates(0);
        setFat(0);
        setQuantity(0);
        navigate(`/profile`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Edit Request</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="calories">Calories</label>
        <input type="text" calories="calories" value={calories} onChange={(e) => setCalories(e.target.value)} />

        <label htmlFor="protein">Protein</label>
        <input type="text" protein="protein" value={protein} onChange={(e) => setProtein(e.target.value)} />

        <label htmlFor="carbohydrates">Carbohydrates</label>
        <input type="text" carbohydrates="carbohydrates" value={carbohydrates} onChange={(e) => setCarbohydrates(e.target.value)} />

        <label htmlFor="fat">Fat</label>
        <input type="text" name="fat" value={fat} onChange={(e) => setFat(e.target.value)} />

        <label htmlFor="quantity">Quantity</label>
        <input type="text" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />

        

        <button type="submit">Edit Food</button>
      </form>
      <button onClick={deletefood}> Delete Food</button>
    </div>
  );
}

export default EditFood;