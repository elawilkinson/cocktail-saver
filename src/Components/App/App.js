import './App.css';
import React, { useState, useEffect, useRef } from "react";

import Dropdown from '../Dropdown';
import RecipeCard from '../RecipeCard';

function App() {
  const [spirit, setSpirit] = useState("banana");
  const [recipe, setRecipe] = useState("glass and ice babes")

  return (
    <div className="App">
      <h1>Hello</h1>
      <Dropdown spirit={spirit} setSpirit={setSpirit} />
      <RecipeCard spirit={spirit} setSpirit={setSpirit} recipe={recipe} setRecipe={setRecipe}/>
   
    </div>
  );
}

export default App;
