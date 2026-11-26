import {LOGO_IMG_URL} from "../utils/constants";
import { useState} from "react";
import { Link, NavLink } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

// Header
const Header = () => {

    const  [btnNameReact, setBtnNameReact] = useState("Login"); 

    const handleLogin = () => {
        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
    }

    const onlineStatus = useOnlineStatus();

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
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/grocery">Grocery</NavLink>
                        </li>
                        <li>
                            <Link to="/cart">Cart</Link>
                        </li>
                    </ul>
                </nav>

                <div className="statusDot" title={onlineStatus ? "Online" : "Offline"}>
                    {onlineStatus ? <div className="greenDot dot"></div> : <div className="redDot dot"></div>}
                </div>

                <button onClick={handleLogin} className="loginBtn">{btnNameReact}</button>

            </div>
        </header>
    )
}

export default Header;
