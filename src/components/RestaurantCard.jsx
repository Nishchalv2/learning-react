import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { resName, cuisine, avgRating, dilveryTime } = resData;
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-log" src={CDN_URL} />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{avgRating}</h4>
      <h4>{dilveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
