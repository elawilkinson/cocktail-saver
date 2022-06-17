import './App.css';
import React, { useState, useEffect, useRef } from "react";

import Dropdown from '../Dropdown';
import RecipeCard from '../RecipeCard';

function App() {
  const[data, setData] = useState([]);
  const [spirit, setSpirit] = useState("banana");
  const [recipe, setRecipe] = useState("glass and ice babes")
  const [lookupURL, setLookUpURL] = useState("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=")

  console.log(`${lookupURL} from the App page`);
 
  return (
    <div className="App">
      <h1>Hello</h1>
      <Dropdown 
        spirit={spirit} 
        setSpirit={setSpirit} 
        lookupURL={lookupURL}
        setLookUpURL={setLookUpURL}
        />
      <RecipeCard 
        spirit={spirit} 
        setSpirit={setSpirit} 
        recipe={recipe} 
        setRecipe={setRecipe} 
        data={data} 
        setData={setData}
        lookupURL={lookupURL}
        />
     </div>
  );
}

export default App;
