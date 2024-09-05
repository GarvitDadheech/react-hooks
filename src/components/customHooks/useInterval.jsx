import { useEffect } from "react";

export default function useInterval(cb,delay) {
    useEffect(() => {
        const t = setInterval(cb,delay);
        return () => clearInterval(t);
    },[cb,delay]);
}