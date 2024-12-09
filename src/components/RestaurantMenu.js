import React from "react";
import { useEffect, useState } from "react";
import ShimmerUi from "./shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

function RestaurantMenu() {
  // const [resInfo, setResinfo] = useState(null);
  // // passing an empty dependency array so that the use effect hook does not re renders every time
  // useEffect(() => {
  //   fetchMenu();
  //   console.log("useEffect called");
  // }, []);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  console.log(">>>", resInfo);
  console.log("resId", resId);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
  //   );

  //   const json = await data.json();
  //   setResinfo(json.data);

  //   console.log(json);
  // };

  const name = resInfo?.cards[2]?.card?.card?.info?.name;
  console.log("name", name);
  const menu =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards[1]?.card?.card
      ?.carousel;

  console.log("..", menu);

  return resInfo === null ? (
    <ShimmerUi />
  ) : (
    <div className="restaurant-menu">
      <h1>{resInfo.cards[2].card.card.info.name}</h1>
      {/* <h1>{name.title}</h1> */}
      {/* <h2>{cuisines}</h2> */}
      <ul>
        {menu.map((item) => (
          <li key={item.dish.info.id}>{item.dish.info.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
