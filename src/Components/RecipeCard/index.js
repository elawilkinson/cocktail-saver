import React, {useEffect, useState} from "react";

import GCocktailData from '../GinCocktailData/data.js'
import VCocktailData from '../VodkaCocktailData/data.js';
import RCocktailData from '../RumCocktailData/data.js';


function RecipeCard ({spirit, setSpirit, recipe, setRecipe, data, setData, lookupURL}) {
    const [ingredients, setIngredients] = useState([]);
    const [display, setDisplay] = useState({spirit})
    
    useEffect(() => {
        fetch(lookupURL)
        .then(res => {
            return res.json()
        })
        .then(data => {
            const info = data.drinks[0]
            // this causes an infinite loop!!!!
            console.log(info)
            setIngredients([info.strIngredient1, info.strIngredient2])
    },[])
    })

    return(
        <div>
            <GCocktailData data={data} setData={setData}></GCocktailData>
            <VCocktailData data={data} setData={setData}></VCocktailData>
            <RCocktailData data={data} setData={setData}></RCocktailData>
            <p>Ingredients: {ingredients}</p>
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



// console.log(`${spirit} from the card`);
// if(spirit==="gin"){
//     console.log("testing if statements")
//   }


