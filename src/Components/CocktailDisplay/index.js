import {useState} from "react";

import '../App/App.css'

function CocktailDisplay ({
    individURL, 
    setRecipe, 
    recipe,
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