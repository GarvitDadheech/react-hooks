// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

import { useMemo, useState } from "react";

function Assignment1() {

    const [input,setInput] = useState("");

    let expensiveOperation = useMemo(() => {
        let value = 1;
        for(let i=1;i<=Number(input);i++) {
            value = value*i;
        }
        return value;
    },[input])

    function handleChange(e) {
        setInput(e.target.value);
    }


    return (
        <div>
            <input type="text" value={input} placeholder="Enter the Number" onChange={handleChange}/>
            <div>The factorial is {expensiveOperation}</div>
        </div>
    )
}   
export default Assignment1;