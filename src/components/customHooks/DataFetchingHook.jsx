import axios from "axios";
import { useEffect, useState } from "react";

function DataFetchingHook(n) {
    const [todos,setTodos] = useState([]);
    const [loading,setLoading] = useState(true);
    function getData() {
        axios.get("<https://temp.com>")
          .then(res => {
            setTodos(res.data.todos);
            setLoading(false);
        })
          .catch(error => {
            console.error("Error fetching todos:", error);
            setLoading(false);
        });
    }
    useEffect(() => {
        getData();
        const intervalId = setInterval(() => {
            getData();
        }, n * 1000);
        return () => clearInterval(intervalId);
    },[]);

    return {
        todos: todos,
        loading: loading
    };
}


export default function MainComponent() {
    const { todos, loading } = DataFetchingHook(5);
    return loading ? <div>Loading...</div> : <div>todos</div>
} 