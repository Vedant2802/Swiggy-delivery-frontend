import React from "react";

const ItemList = ({ items }) => {
  console.log("item List", items);
  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id}>{item?.card?.info?.name}</div>
      ))}
    </div>
  );
};

export default ItemList;
