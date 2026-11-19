import {LOGO_IMG_URL} from "../utils/constants";

// Header
const Header = () => {
    return (
        <header className="header">
            <div className="container">

                <a href="#" className="logo">
                    <img src={LOGO_IMG_URL} />
                </a>

                <nav className="navigation">
                    <ul>
                        <li><a href="#" className="active">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Cart</a></li>
                    </ul>
                </nav>

                <a href="#" className="header-btn">Sign in</a>

            </div>
        </header>
    )
}

export default Header;
