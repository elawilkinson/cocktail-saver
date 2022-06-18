import React, {useState, useEffect} from "react";

function GCocktailData ({data, setData, iURL, lookupURL, individURL, setIndividURL, spirit}) {
    // RECIPE = INGREDIENTS/METHOD, HAS A DEFAULT SETTING BUT NEEDS TO BE UPDATED 
    // DATA = COCKTAIL ID NUMBER, NEEDS TO BE UPDATED IN DATA
    // SUGGESTION = COCKTAIL NAME
    const [suggestion, setSuggestion] = useState();
   // const [ingredients, setIngredients] = useState("pineapple");
    

        useEffect(() => {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${spirit}`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                let suggestionList = data.drinks
                setData(suggestionList[0].idDrink);
                setSuggestion(suggestionList[0].strDrink);
                setIndividURL(`${iURL}${suggestionList[0].idDrink}`)
                console.log(individURL)          
        },[setData])
    });

    return(
        <div>
            <p> Your suggestion is {suggestion}, we hope you enjoy!</p>
         </div>
    )
}
export default GCocktailData

            // const randomRecipePage = getRandomInt(suggestionList.length)
            // let suggestion = data.drinks[randomRecipePage]
            // console.log(`Gin suggestion is ${suggestion.strDrink}`)
            // return setData(suggestion)
                //  function getRandomInt(max) {
    //     return Math.floor(Math.random() * max);
    //   }
