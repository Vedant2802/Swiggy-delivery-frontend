import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  //   console.log("rre category data", data);
  return (
    <div>
      <span className="category-name">
        {data.title} ({data.itemCards.length})
      </span>
      <span>⬇️</span>
      <ItemList items={data?.itemCards} />
    </div>
  );
};

export default RestaurantCategory;
