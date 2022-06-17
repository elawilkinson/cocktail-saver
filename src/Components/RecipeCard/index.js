import React, {useEffect} from "react";

import GCocktailData from '../GinCocktailData/data.js'
import VCocktailData from '../VodkaCocktailData/data.js';
import RCocktailData from '../RumCocktailData/data.js';


function RecipeCard ({spirit, setSpirit, recipe, setRecipe, data, setData}) {
    // const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
    // useEffect(() => {
    //     fetch(`${url})
    //     .then(res => {
    //         return res.json()
    //     })
    //     .then(data => {
    //         let suggestionList = data.drinks
    //         setData(suggestionList[7].idDrink);
    //         setSuggestion(suggestionList[7].strDrink);
    // },[setData])

    return(
        <div>
              <GCocktailData data={data} setData={setData}></GCocktailData>
              <p>{data}</p>
       </div>
    )
}

export default RecipeCard

// const name = "Dark and Stormy";
// const fan = "Glenda Jackson";
// <h1>{name}</h1>
// <p>Key ingredient: {spirit} </p>
// <p>Famous fans include: {fan} </p>
// <p>Ideal serving: {recipe} </p>

// <VCocktailData data={data} setData={setData}></VCocktailData>
// <RCocktailData data={data} setData={setData}></RCocktailData>

// console.log(`${spirit} from the card`);
// if(spirit==="gin"){
//     console.log("testing if statements")
//   }


