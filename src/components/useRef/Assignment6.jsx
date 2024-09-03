// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

import { useEffect, useRef } from "react"

function Assignment6() {

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleFocus = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input type="text" placeholder="Enter text here" ref={inputRef}/>
            <button onClick={handleFocus}>Focus</button>
        </div>
    )
}
export default Assignment6