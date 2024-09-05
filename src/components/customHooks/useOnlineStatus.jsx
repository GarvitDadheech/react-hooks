import { useEffect, useState } from "react";

export default function useOnlineStatus() {
    const [isOnline,setOnline] = useState(window.navigator.onLine);
    useEffect(() => {
        window.addEventListener('online',() => setOnline(true));
        window.addEventListener('offline',() => setOnline(false));
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    },[]);
    return isOnline;
}