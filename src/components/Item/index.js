import React from "react";

function Item ({learningPoint}){
    return(
        <div>
         <p>{learningPoint.name}</p>
        </div>
    )
}

export default Item;