import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

const RestaurantMenu =  () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams()

    useEffect(() => {
        fetchMenu()
    }, [])


    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId)
        const json = await data.json();

        setResInfo(json.data)
  }

    if (resInfo === null) return <Shimmer/>
    
    const {name, cuisines, costForTwo} = resInfo?.cards[2]?.card?.card?.info;
    
    const menuCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    console.log(menuCards)

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