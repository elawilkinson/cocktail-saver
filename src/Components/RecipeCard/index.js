import React, {useEffect, useState} from "react";

import '../App/App.css'

import GCocktailData from '../GinCocktailData/data.js'
import CocktailDisplay from "../CocktailDisplay/index.js";
import IngredientDisplay from "../IngredientDisplay";

function RecipeCard ({spirit, setSpirit, recipe, setRecipe, data, setData, lookupURL, iURL, setIndividURL, individURL}) {
    // SPIRIT = USER'S CHOICE, HAS COME FROM DROPDOWN
    // RECIPE = INGREDIENTS/METHOD, HAS A DEFAULT SETTING BUT NEEDS TO BE UPDATED HERE 
    // DATA = COCKTAIL ID NUMBER, NEEDS TO BE UPDATED IN DATA
    
    // Pulling out the ingredient headlines
    const [mainIng, setMainIng] = useState("");
    const [ing2, setIng2] = useState("");
    const [ing3, setIng3] = useState("");
    const [serveInst, setServeInst] = useState("");
    
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
                    setIndividURL={setIndividURL}
                    setMainIng={setMainIng}
                    setIng2={setIng2}
                    setIng3={setIng3}
                    setServeInst={setServeInst}
                    recipe={recipe}>
                </GCocktailData>
            </div>
            <div> 
                <CocktailDisplay
                    individURL={individURL}
                    setRecipe={setRecipe} 
                    recipe={recipe}
                    mainIng={mainIng}
                    ing2={ing2}
                    ing3={ing3}
                    serveInst={serveInst}
                    />
                </div>
        </div>
        
    )
}

export default RecipeCard
