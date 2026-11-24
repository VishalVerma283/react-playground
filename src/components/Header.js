import {LOGO_IMG_URL} from "../utils/constants";
import { use, useState } from "react";


// Header
const Header = () => {

    const  [btnNameReact, setBtnNameReact] = useState("Login"); 

    const handleLogin = () => {
        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
    }

    return (
        <header className="header">
            <div className="container">

                <a href="#" className="logo">
                    LOGO
                    {/* <img src={LOGO_IMG_URL} /> */}
                </a>

                <nav className="navigation">
                    <ul>
                        <li><a href="#" className="active">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Cart</a></li>
                    </ul>
                </nav>

                <button onClick={handleLogin} className="loginBtn">{btnNameReact}</button>

            </div>
        </header>
    )
}

export default Header;
