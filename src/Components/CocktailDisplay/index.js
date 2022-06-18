import {useState} from "react";

function CocktailDisplay ({individURL, setRecipe}) {
   // const [ingredients, setIngredients] = useState({})

    async function fetchCocktail() {
        const response = await fetch(individURL)
        const data = await response.json()
        console.log(data.drinks);
        setRecipe(data.drinks);
    }

   return(
        <div>
            <button onClick={() => {fetchCocktail()}}>Get my ingredients</button>
        </div>
    )
}

export default CocktailDisplay

/*



*/