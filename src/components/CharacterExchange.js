import React, {useState} from 'react';

const CharacterExchange = () => {
    const [userInput, setUserInput] = useState("");
    const [headingVlue, setHeadingValue] = useState("Swap the first and last character of string");

    // Getting user value
    const getUserInput = (event) =>{
        setUserInput(event.target.value);
    
    }

    // Swapping frontback value
    const front_back = () => {
        const stringValue = userInput;
        if (stringValue.length <= 1){
            setUserInput(stringValue);
        }
else{
  const midString = stringValue.substring(1, stringValue.length-1);
  setUserInput(stringValue.charAt(stringValue.length-1) + midString + stringValue.charAt(0));
  setHeadingValue(`After swapping front and back string is: ${userInput}`);
}
    }

    return (
        <div>
        <div className="first-div">
        <h1>1. {headingVlue}</h1>
         <input type="text" name="string" value={userInput} onChange={getUserInput} autoComplete ="off"/>
            <button onClick= {front_back} className="btn btn-dark">Swap Front Back Value</button>
            
            </div>
        </div>
    )
}

export default CharacterExchange
