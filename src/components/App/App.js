import './App.css';
import React, {useState, useRef} from "react";
import ListOfThings from '../ListOfThings';
import {v4 as uuidv4} from "uuid";


function App() {
  const [count, setCount] = useState(0);
  const [stuffToLearn, setStuffToLearn] = useState([{id: 123, name: "React"}]);
  const learnrequest = useRef();

  function handleClick () {
    setCount(count+1);
  }

  function handleSubmit (e) {
    const userInput = learnrequest.current.value
    console.log(userInput);
    setStuffToLearn([...stuffToLearn, {id: uuidv4(), name: userInput}])
    learnrequest.current.value = null;
  }

  return (
    <>
    <div className="intro">
      <h1>learnin</h1>
      <p>I have learnt {count} things today</p>
      <button onClick={handleClick}>Learn some stuff!</button>
    </div>
    <div className="learn-list"> 
      <h2>What would you like to learn?</h2>
      <input type="text" ref={learnrequest}></input>
      <button onClick={handleSubmit}>Add to list below:</button>
      <ListOfThings stuffToLearn={stuffToLearn}/>      
    </div>
    </>
  );
}

export default App;
