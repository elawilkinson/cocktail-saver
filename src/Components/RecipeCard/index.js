import React, {useEffect, useState} from "react";

import GCocktailData from '../GinCocktailData/data.js'
import CocktailDisplay from "../CocktailDisplay/index.js";

function RecipeCard ({spirit, setSpirit, recipe, setRecipe, data, setData, lookupURL, iURL, setIndividURL, individURL}) {
    // SPIRIT = USER'S CHOICE, HAS COME FROM DROPDOWN
    // RECIPE = INGREDIENTS/METHOD, HAS A DEFAULT SETTING BUT NEEDS TO BE UPDATED HERE 
    // DATA = COCKTAIL ID NUMBER, NEEDS TO BE UPDATED IN DATA
    
    // Pulling out the ingredient headlines
    const mainIng = recipe[0].strIngredient1;
    const ing2 = recipe[0].strIngredient2;
    const ing3 = recipe[0].strIngredient3;
    const serveMe = recipe[0].strGlass;

    
      return(
        <div>
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
                setRecipe={setRecipe}
                />
            <p>{mainIng}</p>
            <p>{ing2}</p>
            <p>{ing3}</p>
            <p>{serveMe}</p>
        </div>
        
    )
}

export default RecipeCard
