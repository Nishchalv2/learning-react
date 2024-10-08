import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    console.log(json.data);
    setResInfo(json.data);
  };

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  //   const { cardItems } =
  //     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //       ?.card || {};

  //   console.log(
  //     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  //   );

  if (resInfo === null) return <Shimmer />;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h4>{costForTwoMessage}</h4>
    </div>
  );
};
export default RestaurantMenu;
