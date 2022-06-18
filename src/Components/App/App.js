import './App.css';
import React, { useState, useEffect, useRef } from "react";

import Dropdown from '../Dropdown';
import RecipeCard from '../RecipeCard';

function App() {
  // Tracking the URL needed
  const URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="
  const [lookupURL, setLookUpURL] = useState(URL)
  const iURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
  const [individURL, setIndividURL] = useState(iURL)

   // Tracking the user's chosen spirit
   const [spirit, setSpirit] = useState("banana");

  //Tracking the returned cocktail ID
  const[data, setData] = useState([]);

  // Tracking the returned recipe
  const [recipe, setRecipe] = useState("glass and ice babes") // method
 
  return (
    <main>
    <div className='navOnly'>
      <nav className="navbar">
            <a className="navItem" href="google.com">Contact</a>
            <a className="navItem" href="google.com">Stockists</a>
            <a className="navItem" href="google.com">Share</a>
          </nav>
    </div>
    <div className="App" >
      <h1 id="big-text">H e l l o .</h1>
      <h2 className="introText" id="second-text">Please select your leftover booze, and hit OK.</h2>
      <Dropdown 
        spirit={spirit} 
        setSpirit={setSpirit} 
        lookupURL={lookupURL}
        setLookUpURL={setLookUpURL}
        URL={URL}
          />
      <RecipeCard 
        spirit={spirit} 
        setSpirit={setSpirit} 
        recipe={recipe} 
        setRecipe={setRecipe} 
        data={data} 
        setData={setData}
        lookupURL={lookupURL}
        iURL={iURL}
        individURL={individURL}
        setIndividURL={setIndividURL}
        />
     </div>
     </main>
  );
}

export default App;
