import React, {useState, useEffect} from "react";

// importing a random value from a non-React file to avoid Strict Mode comps. 
import {pos} from "../../index";

function GCocktailData ({data, setData, iURL, lookupURL, individURL, setIndividURL, spirit}) {
    // RECIPE = INGREDIENTS/METHOD, HAS A DEFAULT SETTING BUT NEEDS TO BE UPDATED 
    // DATA = COCKTAIL ID NUMBER, NEEDS TO BE UPDATED IN DATA
    // SUGGESTION = COCKTAIL NAME
    const [suggestion, setSuggestion] = useState("...");
   // const [ingredients, setIngredients] = useState("pineapple");

        useEffect(() => {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${spirit}`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                let suggestionList = data.drinks;
                console.log(`suggested position is ${pos}`);
                setData(suggestionList[pos].idDrink);
                setSuggestion(suggestionList[pos].strDrink);
                setIndividURL(`${iURL}${suggestionList[pos].idDrink}`)
                console.log(individURL)          
        },[setData])
    });

    return(
        <div>
            <h2>Your suggestion is {suggestion} </h2>
         </div>
    )
}
export default GCocktailData
//   <p> Your suggestion is {suggestion}, we hope you enjoy!</p>
            // const randomRecipePage = getRandomInt(suggestionList.length)
            // let suggestion = data.drinks[randomRecipePage]
            // console.log(`Gin suggestion is ${suggestion.strDrink}`)
            // return setData(suggestion)
                //  function getRandomInt(max) {
    //     return Math.floor(Math.random() * max);
    //   }
