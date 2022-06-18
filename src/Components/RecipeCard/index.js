import React, {useEffect, useState} from "react";

import GCocktailData from '../GinCocktailData/data.js'
import CocktailDisplay from "../CocktailDisplay/index.js";
import VCocktailData from '../VodkaCocktailData/data.js';
import RCocktailData from '../RumCocktailData/data.js';


function RecipeCard ({spirit, setSpirit, recipe, setRecipe, data, setData, lookupURL, iURL, setIndividURL, individURL}) {
    // SPIRIT = USER'S CHOICE, HAS COME FROM DROPDOWN
    // RECIPE = INGREDIENTS/METHOD, HAS A DEFAULT SETTING BUT NEEDS TO BE UPDATED HERE 
    // DATA = COCKTAIL ID NUMBER, NEEDS TO BE UPDATED IN DATA
    
      return(
        <div>
            <GCocktailData 
                data={data} 
                setData={setData} 
                iURL={iURL}
                individURL={individURL}
                setIndividURL={setIndividURL}>
            </GCocktailData>
            <CocktailDisplay
                iURL={iURL}
                individURL={individURL}
                setIndividURL={setIndividURL} 
                recipe={recipe} 
                setRecipe={setRecipe}
                />
        </div>
        
    )
}

export default RecipeCard

/* <VCocktailData data={data} setData={setData}></VCocktailData>
<RCocktailData data={data} setData={setData}></RCocktailData> */

// const name = "Dark and Stormy";
// const fan = "Glenda Jackson";
// <h1>{name}</h1>
// <p>Key ingredient: {spirit} </p>
// <p>Famous fans include: {fan} </p>
// <p>Ideal serving: {recipe} </p>



// console.log(`${spirit} from the card`);
// if(spirit==="gin"){
//     console.log("testing if statements")
//   }


