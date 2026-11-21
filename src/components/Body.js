import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import { use, useState } from "react"; 


// Body
const Body = () => {


// Local State Variable - Super Powerful variable
const [listOfRestaurant, setListOfRestaurant] = useState(resList);

// Filter Handler
const handleFilter = () => {
    const filteredList = listOfRestaurant.filter(
        (res) => res.data.avgRating > 4
    )
    setListOfRestaurant(filteredList)
}

    return (
        <div className="body">
            <div className="card-filters">
                <div className="search">
                    <input type="text" className="search-input"/>
                </div>
                <div className="filters">
                    <button className="filter-btn" onClick={handleFilter}>
                        Top Rated Restaurant 
                    </button>
                </div>
            </div>

            <div className="restaurant-container">
                {listOfRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}
                    />                    
                ))}
            </div>
        </div>
    )
}

export default Body;