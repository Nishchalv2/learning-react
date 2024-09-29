import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";

const resObj = [
  {
    resName: "KFC",
    cuisine: "Burger,Asian",
    avgRating: "3.8",
    dilveryTime: "48 mins",
  },
  {
    resName: "Mcdonalds",
    cuisine: "Burger,Asian,Pizza",
    avgRating: "3.8",
    dilveryTime: "48 mins",
  },
  {
    resName: "Ice Cube",
    cuisine: "Burger,North Indian",
    avgRating: "3.8",
    dilveryTime: "48 mins",
  },
  {
    resName: "ABC",
    cuisine: "Burger,Asian",
    avgRating: "2.8",
    dilveryTime: "48 mins",
  },
  {
    resName: "CDE",
    cuisine: "Burger,Asian",
    avgRating: "4.8",
    dilveryTime: "48 mins",
  },
];

const RestaurantCard = (props) => {
  const { resData } = props;
  const { resName, cuisine, avgRating, dilveryTime } = resData;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-log"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks/PPDMM"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{avgRating}</h4>
      <h4>{dilveryTime}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resObj.map((restaurantData, index = 0) => {
          return <RestaurantCard key={index} resData={restaurantData} />;
        })}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
