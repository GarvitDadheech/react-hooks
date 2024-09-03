// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

import { memo, useState,useCallback } from "react"

function Assignment4() {
    const [count,setCount] = useState(0);

    const handleIncrement = useCallback(() => {
        setCount(count => count+1);
    }, []);

    const handleDecrement = useCallback(() => {
        setCount(count => count-1);
    }, []);

    return (
        <div>
            <div>Counter value is {count}</div>
            <Buttons onIncrement={handleIncrement} onDecrement={handleDecrement}/>
        </div>
    )
}

const Buttons = memo(function ({onIncrement,onDecrement}) {
    return (
        <div>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
        </div>
    )
})

export default Assignment4