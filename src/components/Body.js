import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"

// Body
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>

            <div className="restaurant-container">
               <RestaurantCard resData={resList} />
            </div>
        </div>
    )
}

export default Body;