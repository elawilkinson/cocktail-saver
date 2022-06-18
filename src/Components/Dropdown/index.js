import React, {useState} from "react";

function Dropdown ({spirit, setSpirit, lookupURL, setLookUpURL, URL}) {
    //Registers user selection - CHOICE only relevant to Dropdown
    const [choice, setChoice] = useState("");
   
    function handleChange(e){
        setChoice(e.target.value)
    }

    // Stores user selection - SPIRIT & URL contain relevant info
    function storeChoice (e) {
        e.preventDefault();   
        console.log(choice);     
        setSpirit(choice)
        setLookUpURL(`${URL}${choice}`)
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