import RestaurantCard from "./RestaurantCard";
import { resObj } from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  //State Variable - super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resObj);

  //Normal Javascript
  // let listOfRestaurants = [
  //   {
  //     id: 1,
  //     resName: "KFC",
  //     cuisine: "Burger,Asian",
  //     avgRating: "3.8",
  //     dilveryTime: "48 mins",
  //   },
  //   {
  //     id: 2,
  //     resName: "Mcdonalds",
  //     cuisine: "Burger,Asian,Pizza",
  //     avgRating: "4.8",
  //     dilveryTime: "48 mins",
  //   },
  // ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurantData) => {
          return (
            <RestaurantCard key={restaurantData.id} resData={restaurantData} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
