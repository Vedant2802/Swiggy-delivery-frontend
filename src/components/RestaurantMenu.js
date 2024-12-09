import React from "react";
import { useEffect, useState } from "react";
import ShimmerUi from "./shimmer";

function RestaurantMenu() {
  const [resInfo, setResinfo] = useState(null);
  // passing an empty dependency array so that the use effect hook does not re renders every time
  useEffect(() => {
    fetchMenu();
    console.log("useEffect called");
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=831065&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    setResinfo(json.data);

    console.log(json);
  };

  const name = resInfo?.cards?.[2]?.card?.card?.info?.name;

  return resInfo === null ? (
    <ShimmerUi />
  ) : (
    <div className="restaurant-menu">
      {/* <h1>{resInfo.cards[2].card.card.info.name}</h1> */}
      <h1>{name}</h1>
      <h2>Menu</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
}

export default RestaurantMenu;
