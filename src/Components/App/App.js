import './App.css';
import React, { useState, useEffect, useRef } from "react";

import Dropdown from '../Dropdown';
import RecipeCard from '../RecipeCard';

function App() {
  const [spirit, setSpirit] = useState("banana");
  const [recipe, setRecipe] = useState("glass and ice babes")

  function getRecipes(){
    setRecipe("")
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <Dropdown spirit={spirit} setSpirit={setSpirit} />
      <p>Your chosen spirit is: <span>{spirit}</span>  </p>
      <button onClick={getRecipes}>Find your perfect recipe</button>
      <p>Your recipe is: {recipe}</p>
      <RecipeCard spirit={spirit} setSpirit={setSpirit} recipe={recipe} setRecipe={setRecipe}/>
   
    </div>
  );
}

export default App;


  // <button onClick={handleClick}>CLICK FOR SPIRIT</button>
  // <p>Your chosen spirit is {spirit}</p>
   //  <p>You need a {recipe}</p>