// import { resList } from "../utils/mockData";
// import { resList } from "../utils/mockData";
// import { resList } from "../utils/mockData";
import ResCard, { withPromotedLabel } from "./ResCard";
import { useEffect, useState } from "react";
import ShimmerUi from "./shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // const arr = useState([]);

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  // const listOfRestaurants = arr[0];

  // const setListOfRestaurants = arr[1];

  const [searchText, setSearchtext] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const WithPromotedCard = withPromotedLabel(ResCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );

    setFilteredRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );

    console.log(
      "<<<<",
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    console.log("<<first>>", json);
  };

  // if (listOfRestaurants.length === 0) {
  //   return <ShimmerUi />;
  // }
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>"Looks like you are offline"</h1>;
  }
  return listOfRestaurants?.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchtext(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-xl"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 m-4 rounded-xl"
            onClick={() => {
              // filter Logic
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurants(filteredList);
              console.log("filteredList", filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/* {restaurant.data.promoted ? (
              <WithPromotedCard resData={restaurant} />
            ) : (
              <ResCard resData={restaurant} />
            )} */}
            <ResCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
