import React, {useState} from "react";

function Dropdown ({spirit, setSpirit}) {

    console.log(spirit)
   
    const [drink, setDrink] = useState("...");
    const [choice, setChoice] = useState("");
   
    function handleChange(e){
        console.log(e.target.value);
        setChoice(e.target.value)
    }

    function storeChoice (e) {
        e.preventDefault();   
        console.log(choice);     
        setDrink(choice);
        setSpirit(choice)
        console.log(`user selects ${choice}`)
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
            <p>Your chosen spirit is: <span>{drink}</span>  </p>
        </div>
    )
}

export default Dropdown;