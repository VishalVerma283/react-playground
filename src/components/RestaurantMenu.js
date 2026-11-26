import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu =  () => {
    const {resId} = useParams()

    const resInfo = useRestaurantMenu(resId)

    if (resInfo === null) return <Shimmer/>
    
    const {name, cuisines, costForTwo} = 
    resInfo?.cards[2]?.card?.card?.info;
    
    const menuCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    // console.log(menuCards)

    return (
        <div className="restaurantMenu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwo}</h3>
            <ul>
                {menuCards.map(item => <li key={item.card.info.id}>{item.card.info.name}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu