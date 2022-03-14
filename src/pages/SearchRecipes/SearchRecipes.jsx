import React, { useEffect, useState } from 'react';
import SearchInput from '../SearchPage/SearchInput.js';


const api = 'https://api.spoonacular.com/recipes/autocomplete?number=10&query=';

export default function SearchRecipes() {
  const [info, setInfo] = useState({});
  const [text, setText] = useState('');

  useEffect(() => {
    if (text) {
      setInfo({});

      fetch(
        `${api}${text}`
      )
        .then((response) => response.json())
        .then((response) => {
          setInfo(response);
        });
    }
  }, [text]);

  return (
    <div className="App">
      <h1>Search Recipe</h1>
      <SearchInput
        value={text}
        onChange={(search) => setText(search)}
      />
      {text && !info.results && <span>Carregando...</span>}
      {info.results && (
        <ul className="foods-list">
          {info.results.map((food) => (
            <li key={food.id}>
              <img
                src={food.image}
                alt={food.title}
              />
              {food.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}