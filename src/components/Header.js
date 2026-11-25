import {LOGO_IMG_URL} from "../utils/constants";
import { useState} from "react";
import { Link } from "react-router";

// Header
const Header = () => {

    

    const  [btnNameReact, setBtnNameReact] = useState("Login"); 

    const handleLogin = () => {
        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
    }

    return (
        <header className="header">
            <div className="container">

                <Link to="/" className="logo">
                    LOGO
                    {/* <img src={LOGO_IMG_URL} /> */}
                </Link>

                <nav className="navigation">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/cart">Cart</Link>
                        </li>
                    </ul>
                </nav>

                <button onClick={handleLogin} className="loginBtn">{btnNameReact}</button>

            </div>
        </header>
    )
}

export default Header;
