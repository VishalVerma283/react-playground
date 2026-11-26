import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    
    const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

    // Check if Online

    useEffect(() => {

        const handleOnline = () => {
            setOnlineStatus(true)
        };

        const handleOffline = () => {
            setOnlineStatus(false)
        };

        window.addEventListener("online", handleOnline)
        window.addEventListener("offline", handleOffline)

        return() => {
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("offline", handleOffline)
        };  

    },[]);

    // Boolean Value
    return onlineStatus;

};

export default useOnlineStatus;