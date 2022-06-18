import React, {useEffect, useState} from "react";

import '../App/App.css'

function IngredientDisplay({
    recipe,
    setRecipe,
    mainIng,
    ing2,
    ing3,
    serveInst
    }){
 
    console.log("poop");

    return(
        <div className="returnIngredients">
            <p>{mainIng}</p>
            <p>{ing2}</p>
            <p>{ing3}</p>
            <p>{serveInst}</p>
        </div>
    )
}

export default IngredientDisplay