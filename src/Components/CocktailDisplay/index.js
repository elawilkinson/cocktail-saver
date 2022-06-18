import {useState} from "react";

import '../App/App.css'

function CocktailDisplay ({individURL, setRecipe}) {
   // const [ingredients, setIngredients] = useState({})

    async function fetchCocktail() {
        const response = await fetch(individURL)
        const data = await response.json()
        console.log(data.drinks);
        setRecipe(data.drinks);
    }

   return(
        <div className="recipeCard">
            <div className="ingSubmit">
            <button id="submitIng" onClick={() => {fetchCocktail()}}>Get my ingredients</button>
            </div>
        </div>
    )
}

export default CocktailDisplay

/*



*/