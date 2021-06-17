import React,{useState} from 'react'

const SubstringCount = () => {

    const [userInput, setUserInput] = useState("");
    const [counts, setCounts] = useState("");
    const [output,setOutputValue] = useState("Count the number of times that a substring of length two appears in the string and also as the last two chars of the string");

    // Getting user value
    const getUserInput = (event) =>{
        setUserInput(event.target.value);
    }

        //Counting the number of times that a substring of length 2 appears in the string 
        const lastTwo = () => {
            const string = userInput;
            if (string.length < 2) {
                setCounts("0");
                setOutputValue(`substring of length two appears ${counts} times in given string`);
            }
            else{
                const stringEnd = string.substring(string.length-2);
                //console.log(stringEnd);
                let count = 0;
              for (var i=0; i<string.length-2; i++) {
                const sub = string.substring(i, i+2);
                if (sub===stringEnd) {
                  count++;
                //   console.log(sub);
                //   console.log(count);
                }
                setCounts(count);
                setOutputValue(`substring of length two appears ${counts} times in given string`);
            }
            
            }
                
            
        }
    
    return (
        <>
            <div className="first-div">
        <h1>2. {output}</h1>
        <input type="text" name="string" value={userInput} onChange={getUserInput} autoComplete ="off"/>
            <button onClick={lastTwo} className="btn btn-dark">Get the count of substring</button>

        </div>
        </>
    )
}

export default SubstringCount
