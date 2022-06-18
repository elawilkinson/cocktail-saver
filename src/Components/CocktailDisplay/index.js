import {useState} from "react";

function CocktailDisplay ({iURL, individURL, setIndividURL, recipe, setRecipe}) {
   // const [ingredients, setIngredients] = useState({})

    async function fetchCocktail() {
        const response = await fetch(individURL)
        const data = await response.json()
        console.log(data.drinks);
        setRecipe(data.drinks);
    }

   return(
        <div>
            <p>COCKTAIL DETAILS HERE</p>
            <button onClick={() => {fetchCocktail()}}>Clickhere</button>
            <p>stuff</p>
        </div>
    )
}

export default CocktailDisplay

/*



*/