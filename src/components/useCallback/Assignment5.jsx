// Create a component with a text input field and a button. The goal is to display an alert with the text entered when the button is clicked. Use useCallback to memoize the event handler function that triggers the alert, ensuring it's not recreated on every render.
// Currently we only have inputText as a state variable and hence you might not see the benefits of 
// useCallback. We're also not passing it down to another component as a prop which is another reason for you to not see it's benefits immedietely.

import { useCallback, useState } from "react"

function Assignment5() {

    const [input,setInput] = useState("");

    const callAlert = useCallback(() => {
        alert(input);
    },[input]);

    function handeInput(e) {
        setInput(e.target.value);
    }


    return (
        <div>
            <input type="text" value={input} placeholder="Enter text here" onChange={handeInput}/>
            <button onClick={callAlert}>Alert</button>
        </div>
    )
}
export default Assignment5