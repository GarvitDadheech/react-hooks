// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

import { useState,useMemo } from "react";

const groceryItems = [
    {
        name: "Milk",
        quantity: 2,
        pricePerUnit: 2
    },
    {
        name: "Bread",
        quantity: 1,
        pricePerUnit: 2
    },
    {
        name: "Eggs",
        quantity: 12,
        pricePerUnit: 4
    },
    {
        name: "Apples",
        quantity: 6,
        pricePerUnit: 2
    }
];

function Assignment3() {

    const [groceryItemList,setGroceryItemList] = useState(groceryItems);

    const totalAmount = useMemo(() => {
        let value = 0;
        for(const item of groceryItemList) {
            console.log(item);
            value += item.quantity*item.pricePerUnit;
        }
        return value;
    },[groceryItemList]);

    return (
        <div>
            <h1>The total amount spent is {totalAmount}</h1>
        </div>
    )
}
export default Assignment3;