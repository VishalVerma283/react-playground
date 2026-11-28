import { useState } from "react";
import ItemList from "./ItemList";


const RestaurantCategory  = ({data, showItems, setShowIndex}) => {
    // const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
       setShowIndex();
    };

    // console.log(data)
    return(
            <div className="bg-white border border-gray-200 overflow-hidden shadow-sm mb-1" onClick={handleClick}>
                <div className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50 border-b border-b-gray-200">
                    <span className="text-sm font-bold text-gray-800">
                        {data.title} ({data.itemCards.length})
                    </span>

                    <span className="text-gray-600 text-sm">
                        ⬇️
                    </span>
                </div>
         
                {/* Accord  ion Body */}
                {showItems && <ItemList items={data.itemCards}/>}
                
            </div>
    )
}

export default RestaurantCategory