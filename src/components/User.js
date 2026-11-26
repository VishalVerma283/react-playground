import { useEffect, useState } from "react";

const User = ({name, location}) => {

    const [count] = useState(0);
    const [count1] = useState(1);

    useEffect(() => {
        // API Calls
    },[])

    return(
     <div className="user-card">
        <p>Count: {count}</p>
        <p>Count : {count1}</p>
        <h1>Name: {name}</h1>   
        <h2>Location: {location}</h2>   
        <h3>Contact: +91 9782921020</h3>   
     </div>
    )
}

export default User;