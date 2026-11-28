
import RestaurantCard, {withVegLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardVeg = withVegLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://namastedev.com/api/v1/listRestaurants"
        );
        const response = await data.json();

        const restaurants =
            response?.data?.data?.cards?.[1]?.card?.card
                ?.gridElements?.infoWithStyle?.restaurants || [];

        setListOfRestaurants(restaurants);
        setFilteredRestaurant(restaurants);
    };

    // Search Restaurant
    const handleSearch = () => {
        const filtered = listOfRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );

        setFilteredRestaurant(filtered);
    };

    // Search Input
    const handleValue = (e) => {
        setSearchText(e.target.value);
    };

    // Top Rated Restaurant
    const handleFilter = () => {
        const filtered = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4.3
        );

        setFilteredRestaurant(filtered);
    };

    // Loading
    if (listOfRestaurants.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="max-w-[1200px] mx-auto px-4 py-10">

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

                {/* Search Box */}
                <div className="flex w-full sm:max-w-[350px]">
                    <input
                        type="text"
                        placeholder="Search restaurants..."
                        value={searchText}
                        onChange={handleValue}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleSearch();
                        }}
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded-l-lg outline-none focus:border-[#FF5200] focus:ring-2 focus:ring-orange-100 transition"
                    />

                    <button
                        onClick={handleSearch}
                        className="bg-[#FF5200] hover:bg-[#e84900] text-white px-5 rounded-r-lg text-lg transition cursor-pointer"
                    >
                      🔍︎
                    </button>

                </div>

                {/* Filter Button */}
                <button
                    onClick={handleFilter}
                    className="px-5 py-3 rounded-full border border-gray-300 bg-white text-gray-700 font-semibold text-sm hover:bg-[#FF5200] hover:text-white hover:border-[#FF5200] transition duration-300 cursor-pointer"
                >
                    ⭐ Top Rated Restaurant
                </button>
            </div>

            {/* Restaurant Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                {filteredRestaurant.map((restaurant) => (
                    <Link
                        to={"/restaurants/" + restaurant.info.id}
                        key={restaurant.info.id}
                        className="block"
                    >
                        {restaurant.info.veg ? <RestaurantCardVeg resData={restaurant}/> : <RestaurantCard resData={restaurant}/>}
                    </Link>
                ))}

            </div>

            {/* No Restaurant Found */}
            {filteredRestaurant.length === 0 && (
                <div className="text-center py-16">
                    <h2 className="text-2xl font-bold text-gray-800">
                        No restaurants found!
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Try searching with a different restaurant name.
                    </p>
                </div>
            )}

        </div>
    );
};

export default Body;
