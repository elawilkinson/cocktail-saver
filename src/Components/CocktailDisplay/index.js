import {useState} from "react";

import '../App/App.css'
import IngredientDisplay from "../IngredientDisplay";

function CocktailDisplay ({
    individURL, 
    setRecipe, 
    recipe,
    mainIng,
    ing2,
    ing3,
    serveInst
}) {
   // const [ingredients, setIngredients] = useState({})

    async function fetchCocktail() {
        const response = await fetch(individURL)
        const data = await response.json()
        console.log(data.drinks);
        setRecipe(data.drinks);
    }

    console.log(`chosen drink is ${recipe[0].strDrink}`)
    console.log(`third ing is ${recipe[0].strIngredient3}`)

   return(
    <div>
        <div className="recipeCard">
            <div className="ingSubmit">
                 <button id="submitIng" onClick={() => {fetchCocktail()}}>Get my ingredients</button>
            </div>
        </div>
        <div className="returnIngredients">
            <IngredientDisplay recipe={recipe}
                        setRecipe={setRecipe}
                        mainIng={mainIng}
                        ing2={ing2}
                        ing3={ing3}
                        serveInst={serveInst}/>
        </div>
    </div>
    )
}

export default CocktailDisplay

/*



*/