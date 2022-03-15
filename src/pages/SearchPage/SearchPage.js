import React, { useEffect, useState } from 'react';
import SearchInput from './SearchInput';
//import './styles.css';


const base_url = "https://wger.de/api/v2/ingredient";
const base_search_url = `${base_url}/search/?term=`;

export default function SearchPage() {
  const [info, setInfo] = useState({});
  const [text, setText] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedItemInfo, setSelectedItemInfo] = useState({});

  useEffect(() => {
    setSelectedItem("");
    if (text) {
      setInfo({});

      fetch(
        `${base_search_url}${text}`
      )
        .then((response) => response.json())
        .then((response) => {
          setInfo(response);
        });
    }
  }, [text]);

  useEffect(() => {
    if(selectedItem !== "") {
      fetch(
        `${base_url}/${selectedItem}`
      )
        .then((response) => response.json())
        .then((response) => {
          setSelectedItemInfo(response);
        });
    }
  }, [selectedItem]);

  return (
    <div className="App">
      <h1>Search Food</h1>
      <SearchInput
        value={text}
        onChange={(search) => setText(search)}
      />
      
      {selectedItem === '' ? 
        <div>
          {text && !info.suggestions && <span>Carregando...</span>}
          {info.suggestions && (
            <ul className="foods-list">
              {info.suggestions.map((food) => (
                <li key={food.data.id} onClick={() => setSelectedItem(food.data.id)}>
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
      : <div>
      <ul>
      <li>'Name' : {selectedItemInfo.name}</li>
      <li> 'Energy' :{selectedItemInfo.energy}</li>
      <li>'Protein' :{selectedItemInfo.protein}</li>
      <li>'Carbohydrates' :{selectedItemInfo.carbohydrates}</li>
      <li>'Carbohydrates_sugar' :{selectedItemInfo.carbohydrates_sugar}</li>
      <li>'Fat_Saturated' :{selectedItemInfo.fat_saturated}</li>
      <li>'Fat' :{selectedItemInfo.fat}</li>
        </ul>
      </div>}
    </div>
  );
}