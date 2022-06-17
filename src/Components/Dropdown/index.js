import React, {useState} from "react";

function Dropdown ({spirit, setSpirit, lookupURL, setLookUpURL}) {
 
    const [drink, setDrink] = useState("...");
    const [choice, setChoice] = useState("");
   
    function handleChange(e){
        setChoice(e.target.value)
    }

    function storeChoice (e) {
        e.preventDefault();   
        console.log(choice);     
        setDrink(choice);
        setSpirit(choice)
        setLookUpURL(`${lookupURL}${choice}`)
    }

    return(
        <div>
            <form>
                <select onChange={handleChange}>
                    <option value="vodka">Vodka</option>
                    <option value="rum">Rum</option>
                    <option value="gin">Gin</option>
                    <option value="whisky">Whisky</option>
                </select>
                <button onClick={storeChoice}>SHOW ME THE BEVS!</button>
            </form>
        </div>
    )
}

export default Dropdown;