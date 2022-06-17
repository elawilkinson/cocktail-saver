import React, {useState, useEffect} from "react";

function GCocktailData ({data, setData}) {
    const [suggestion, setSuggestion] = useState();

     useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin")
        .then(res => {
            return res.json()
        })
        .then(data => {
            let suggestionList = data.drinks
            setData(suggestionList[7].idDrink);
            setSuggestion(suggestionList[7].strDrink);
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
