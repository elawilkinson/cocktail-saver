import React, {useState, useEffect} from "react";

function RCocktailData ({data, setData}) {
     const [suggestion, setSuggestion] = useState("");

     useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum")
        .then(res => {
            return res.json()
        })
        .then(data => {
            let suggestionList = data.drinks
            setData(suggestionList[7].idDrink);
            setSuggestion(suggestionList[7].strDrink);
        })
    },[setData]);

    return(
        <div>
            <p> Your suggestion is {suggestion}, we hope you enjoy!</p>
        </div>
    )
}
export default RCocktailData