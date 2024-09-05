import axios from "axios";
import { useEffect, useState } from "react";

function DataFetchingHook() {
    const [todos,setTodos] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        axios.get("")
        .then(res => {
            setTodos(res.data);
            setLoading(false);
        })
    },[]);

    return {
        todos: todos,
        loading: loading
    };
}
