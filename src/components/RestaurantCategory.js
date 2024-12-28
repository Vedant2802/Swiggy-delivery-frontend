import React, { useState } from "react";
import ItemList from "./itemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // console.log("rre category data", data);
  // const [showItemList, setShowItemList] = useState(false);
  const onClickHandler = () => {
    setShowIndex();
  };
  return (
    <div
      className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4"
      onClick={onClickHandler}
    >
      <div className="flex justify-between cursor-pointer">
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="arrow-button">⬇️</span>
      </div>
      {showItems && <ItemList items={data?.itemCards} showItemList />}
    </div>
  );
};

export default RestaurantCategory;
