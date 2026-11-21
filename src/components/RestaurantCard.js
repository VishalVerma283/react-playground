import {CARD_IMG_URL} from "../utils/constants"

// Restaurant Card
const RestaurantCard = (props) => {
    // console.log(props);
    const {resData} = props

    const {name, cuisines, avgRating, deliveryTime, costForTwoString} = resData.data;

    return (
        <div className="restaurant-card">
            <img src={CARD_IMG_URL} alt="Restaurant"/>
            <div className="card-content">
                <h3>{name}</h3>
                <p>{cuisines.join(", ")}</p>
                <div className="card-info">
                    <div className="rating">
                        <span>★</span>{avgRating} 
                    </div>

                    <div className="delivery-time">
                        <span>◷</span>{deliveryTime} minutes
                    </div>
                </div>
                 <div className="restaurant-price">
                    {costForTwoString}
                </div>
            </div>
        </div>
    )
}


export default RestaurantCard;