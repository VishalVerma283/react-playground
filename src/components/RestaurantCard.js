
import { CARD_IMG_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {

    const {
        name,
        cloudinaryImageId,
        cuisines,
        avgRating,
        sla,
        costForTwo
    } = resData.info;

    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full">

            {/* Restaurant Image */}
            <div className="relative overflow-hidden">
                <img
                    src={CARD_IMG_URL + cloudinaryImageId}
                    alt={name}
                    className="w-full h-[180px] object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Card Content */}
            <div className="p-4">

                {/* Restaurant Name */}
                <h3 className="text-lg font-bold text-gray-800 truncate">
                    {name}
                </h3>

                {/* Cuisines */}
                <p className="text-sm text-gray-500 line-clamp-2 min-h-10 mb-3">
                    {cuisines.join(", ")}
                </p>

                {/* Rating and Delivery */}
                <div className="flex items-center gap-4 pb-4 border-b border-gray-100">

                    {/* Rating */}
                    <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded-md text-sm font-bold">
                        <span>★</span>
                        {avgRating}
                    </div>

                    {/* Delivery Time */}
                    <div className="flex items-center gap-1 text-gray-600 text-sm font-semibold">
                        <span className="text-[#FF5200] text-lg">◷</span>
                        {sla.deliveryTime} mins
                    </div>

                </div>

                {/* Price */}
                <div className="pt-3 flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                        Cost for two
                    </span>

                    <strong className="text-sm font-bold text-[#FF5200]">
                        {costForTwo}
                    </strong>
                </div>

            </div>
        </div>
    );
};

export default RestaurantCard;
