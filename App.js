import React from "react";
import ReactDOM from "react-dom/client"


// Header
const Header = () => {
    return (
        <header className="header">
            <div className="container">

                <a href="#" className="logo">
                    LOGO
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


// Restaurent Card
const RestaurantCard = (props) => {
    // console.log(props);
    const {resData} = props

    const {name, cuisines, avgRating, sla, costForTwo} = resData[0]?.data

    return (
        <div className="restaurant-card">
            <img src="https://images.openai.com/static-rsc-4/HJKM4WP7-nhG7P3-THcTTVfy1_l4jhfk6ZlzQxYur-chYyq1-mhdoT8_GyiG36lIY3lXUyScFju0aoZYIJ4NyFYZEIPpZkDyksXdPe3-H7J_0iYraFI9ptXRtv9lDIVRD8SKLc7NFXFFhmy37f7CM6ex65obIeJvAJtow9nzkHeV-L6R_6bYJLV6z8TbLREI?purpose=fullsize" alt="Restaurant"/>
            <div className="card-content">
                <h3>{name}</h3>
                <p>{cuisines.join(", ")}</p>
                <div className="card-info">
                    <div className="rating">
                        <span>★</span>{avgRating} 
                    </div>

                    <div className="delivery-time">
                        <span>◷</span>{sla.slaString}
                    </div>
                </div>
                 <div className="restaurant-price">
                    {costForTwo}
                </div>
            </div>
        </div>
    )
}


const resObj = [{
    success: true,
    message: "Restaurant List fetched successfully",
    data: {
        id: "123456",
        name: "Pizza Paradise",
        cloudinaryImageId: "rng/md/carousel/production/pizza123",
        locality: "MG Road",
        areaName: "Central District",
        costForTwo: "₹400 for two",
        cuisines: ["Pizza", "Italian", "Fast Food"],
        avgRating: 4.3,
        avgRatingString: "4.3",
        totalRatingsString: "10K+ ratings",
        veg: false,
        sla: {
            deliveryTime: 30,
            lastMileTravel: 3.5,
            slaString: "30 mins",
        },
        aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
        },

    },
}];


// Body
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>

            <div className="restaurant-container">
               <RestaurantCard resData={resObj} />
            </div>
        </div>
    )
}

// Footer
const Footer = () => {
    return(

    <footer className="footer">
        <div className="footer-container">
            <div className="footer-bottom">
                <p>© 2026. All Rights Reserved.</p>
                <p>Made with <span>♥</span> for food lovers.</p>
            </div>
        </div>
    </footer>

    )
}

// App Layout
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);