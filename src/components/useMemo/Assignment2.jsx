// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items. 
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array

import { useState, useMemo } from "react";

const words = ["hi", "bye", "Garvit", "guy", "hello", "hola"];
const sentences = [];
for (let i = 0; i < 1000; i++) {
    let all_words = "";
    for (let j = 0; j < words.length; j++) {
        all_words += words[Math.floor(Math.random() * words.length)] + " ";
    }
    sentences.push(all_words.trim());
}

function Assignment2() {
    const [sentenceList, setSentenceList] = useState(sentences);
    const [filter, setFilter] = useState("");

    function handleChange(e) {
        setFilter(e.target.value);
    }

    const filteredSentences = useMemo(() => {
        return sentenceList.filter(x => x.includes(filter));
    }, [sentenceList, filter]);

    return (
        <div>
            <input 
                type="text" 
                value={filter} 
                placeholder="Enter sentence here" 
                onChange={handleChange}
            />
            {filteredSentences.map((sentence, index) => (
                <div key={index}>{sentence}</div>
            ))}
        </div>
    );
}

export default Assignment2;
