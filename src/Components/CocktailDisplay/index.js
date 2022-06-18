import {useState} from "react";

import '../App/App.css'

function CocktailDisplay ({
    individURL, 
    setRecipe, 
    recipe,
    setMainIng,
    setIng2,
    setIng3,
    setServeInst}) {
   // const [ingredients, setIngredients] = useState({})

    async function fetchCocktail() {
        const response = await fetch(individURL)
        const data = await response.json()
        console.log(data.drinks);
        setRecipe(data.drinks);
        setMainIng(`You will need: 1) absolutely loads of ${recipe[0].strIngredient1}  `);
        setIng2(` 2) a healthy dash of ${recipe[0].strIngredient2}, `);
        setIng3( ` & finally, 3) a light sprinkling of ${recipe[0].strIngredient3}.`);
        setServeInst(` Please serve me in a ${recipe[0].strGlass}. Enjoy! `)
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