import React from "react";


function RecipeCard ({spirit, setSpirit, recipe, setRecipe}) {
    const name = "Dark and Stormy";
    const fan = "Glenda Jackson";
    console.log(`${spirit} from the card`);

    return(
        <div>
            <h1>{name}</h1>
            <p>Key ingredient: {spirit} </p>
            <p>Famous fans include: {fan} </p>
      
        </div>
    )
}

export default RecipeCard

