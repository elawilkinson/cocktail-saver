import './App.css';
import React, { useState, useEffect, useRef } from "react";

import Dropdown from '../Dropdown';
import RecipeCard from '../RecipeCard';

function App() {
  const [spirit, setSpirit] = useState("banana");

  return (
    <div className="App">
      <h1>Hello</h1>
      <Dropdown spirit={spirit} setSpirit={setSpirit}/>
      <RecipeCard text={spirit}/>
   
    </div>
  );
}

export default App;


  // <button onClick={handleClick}>CLICK FOR SPIRIT</button>
  // <p>Your chosen spirit is {spirit}</p>