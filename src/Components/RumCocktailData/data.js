import React, {useState, useEffect} from "react";

function RCocktailData ({data, setData}) {
     function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

     useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum")
        .then(res => {
            return res.json()
        })
        .then(data => {
            let suggestionList = data.drinks
            const randomRecipePage = getRandomInt(suggestionList.length)
            let suggestion = data.drinks[randomRecipePage]
            console.log(`rum suggestion is ${suggestion.strDrink}`)
            setData(suggestion)
        })
    },[setData]);
}
export default RCocktailData