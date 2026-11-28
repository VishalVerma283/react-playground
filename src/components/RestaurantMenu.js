import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu =  () => {
    const {resId} = useParams()

    const resInfo = useRestaurantMenu(resId)

    const [showIndex, setShowIndex] = useState(0)

    if (resInfo === null) return <Shimmer/>
    
    const {name, cuisines, costForTwo} = 
    resInfo?.cards[2]?.card?.card?.info;
    
    const menuCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    // console.log(menuCards)

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => 
            c.card?.card?.["@type"] == 
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

    // console.log(categories)
    return (
        <div className="restaurantMenu md:w-1/2 lg:w-1/2 mx-auto">
        <div className="text-center pt-5 pb-8">
            <h1 className="text-xl font-bold text-gray-900 mb-1">
                {name}
            </h1>

            <p className="text-sm text-gray-500">
                {cuisines.join(", ")}
            </p>
        </div>

        {/* { Categories accordion} */}

        <div className="accordion-body">
            {categories.map((category, index) => 
                <RestaurantCategory 
                    key={category?.card?.card?.title} 
                    data={category?.card?.card} 
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                /> 
            )}
        </div>

        </div>
    )
}

export default RestaurantMenu