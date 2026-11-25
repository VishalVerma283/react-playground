import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
    // Local State Variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
        const response = await data.json();

        // setTimeout(() => {
            setListOfRestaurants(
                response?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
            );
            setFilteredRestaurant(
                response?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []   
            )
        // }, 1000)
    };


    // Search Input
    const handleSearch = () =>{
    //    console.log(searchText)
    const filteredRestaurant = listOfRestaurants.filter(
        (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );     
        setFilteredRestaurant(filteredRestaurant);
    }

    // Input Search
    const handleValue = (e) => {
        setSearchText(e.target.value)
    }

    // Top Restaurant
    const handleFilter = () => {
        const filteredList = listOfRestaurants.filter(
            (res) => Number(res.info.avgRating > 4.3)
        );
        setFilteredRestaurant(filteredList);
    };

    
    return listOfRestaurants.length === 0 ? (
    <Shimmer />
    ):(
        <div className="body">
            <div className="card-filters">
                <div className="search-box">
                    <input placeholder="Search" type="text" className="search-input" value={searchText} 
                    onChange={handleValue}/>
                    <button onClick={handleSearch}>🔍︎</button>
                </div>
                <div className="filters">
                    <button className="filter-btn" onClick={handleFilter}>
                        Top Rated Restaurant
                    </button>
                </div>
            </div>


            <div className="restaurant-container">
                    {filteredRestaurant.map((restaurant) => (
                    <div className="restaurant-card" key={restaurant.info.id} >
                        <Link to={"/restaurants/" + restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
                    </div>
                    ))}
            </div>
        </div>
    );
};

export default Body;