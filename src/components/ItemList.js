import { CND_URL } from "../utils/constants";

const ItemList = ({items}) => {
    // console.log(items)
    return(
        <div className="divide-y divide-gray-200 p-2 px-4">
            {items.map((item) => (
                <div
                    key={item.card.info.id}
                    className="flex justify-between gap-4 py-4"
                >
                    {/* Item Details */}
                    <div className="flex-1">
                        <h3 className="text-sm font-semibold text-gray-800">
                            {item.card.info.name}
                        </h3>

                        <p className="text-sm font-medium text-gray-700 mt-1">
                            ₹{item.card.info.price 
                                ? item.card.info.price/100 
                                : item.card.info.defaultPrice/100 }
                        </p>

                        <p className="text-xs text-gray-500 mt-2 leading-5 line-clamp-2">
                            {item.card.info.description}
                        </p>
                    </div>

                    {/* Add Button */}
                    <div className="relative w-25 shrink-0">
                        <img
                            src={CND_URL + item.card.info.imageId}
                            alt={item.card.info.name}
                            className="w-25 h-20 object-cover rounded-xl"
                        />
                        <button
                            className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 py-1.5 bg-white text-green-600 text-sm font-bold rounded-lg shadow-md border border-gray-200 hover:bg-green-50 cursor-pointer"
                        >
                            ADD +
                        </button>

                    </div>
                </div>
            ))}
        </div>  
    )
}   

export default ItemList;