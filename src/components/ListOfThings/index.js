import React from "react";
import Item from "../Item";

function ListOfThings ({stuffToLearn}){
    return(
        stuffToLearn.map(learningPoint => {
            return <Item learningPoint={learningPoint} key={learningPoint.id}/>

        }
    )
    )
}

export default ListOfThings