import React, {useEffect, useState} from "react";

import '../App/App.css'

import GCocktailData from '../GinCocktailData/data.js'
import CocktailDisplay from "../CocktailDisplay/index.js";

function RecipeCard ({spirit, setSpirit, recipe, setRecipe, data, setData, lookupURL, iURL, setIndividURL, individURL}) {
    // SPIRIT = USER'S CHOICE, HAS COME FROM DROPDOWN
    // RECIPE = INGREDIENTS/METHOD, HAS A DEFAULT SETTING BUT NEEDS TO BE UPDATED HERE 
    // DATA = COCKTAIL ID NUMBER, NEEDS TO BE UPDATED IN DATA
    
    // Pulling out the ingredient headlines
    const mainIng = `You will need: 1) absolutely loads of ${recipe[0].strIngredient1}  `;
    const ing2 = ` 2) a healthy dash of ${recipe[0].strIngredient2}, `;
    const ing3 = ` & finally, 3) a light sprinkling of ${recipe[0].strIngredient3}.`;
    const serveMe = ` Please serve me in a ${recipe[0].strGlass}. Enjoy! `;

    
      return(
        <div>
            <div className="recipeCard">
                <GCocktailData 
                    data={data} 
                    setData={setData} 
                    spirit={spirit}
                    lookupURL={lookupURL}
                    iURL={iURL}
                    individURL={individURL}
                    setIndividURL={setIndividURL}>
                </GCocktailData>
                <CocktailDisplay
                    individURL={individURL}
                    setRecipe={setRecipe} />
                </div>
                <div className="returnIngredients">
                    <p>{mainIng}{ing2}{ing3}</p>
                    <p>{serveMe}</p>
                </div>
        </div>
        
    )
}

export default RecipeCard
