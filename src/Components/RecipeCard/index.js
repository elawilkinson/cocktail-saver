import React from "react";


function RecipeCard ({spirit, setSpirit}) {
    function handleClick(){
        setSpirit("yo")
    }


    return(
        <div>
            <h1>Hiya</h1>
            <p>{spirit}</p>
            <button onClick={handleClick}>change</button>
        </div>
    )
}

export default RecipeCard