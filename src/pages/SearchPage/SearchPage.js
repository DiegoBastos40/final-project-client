import React, { useEffect, useState } from 'react';
import SearchInput from './SearchInput';
//import './styles.css';

const api = 'https://wger.de/api/v2/ingredient/search/?term=';

export default function SearchPage() {
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
      <h1>Search Food</h1>
      <SearchInput
        value={text}
        onChange={(search) => setText(search)}
      />
      {text && !info.suggestions && <span>Carregando...</span>}
      {info.suggestions && (
        <ul className="foods-list">
          {info.suggestions.map((food) => (
            <li key={food.id}>
             {/*  <img
                src={food.image}
                alt={food.title}
              /> */}
              {food.data.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}