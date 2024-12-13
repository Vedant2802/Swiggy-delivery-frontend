import React, { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { additems } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  console.log("item List", items);
  // const [showItemList, setShowitemList] = useState(true);
  const dispatch = useDispatch();
  const handleAddItem = (items) => {
    dispatch(additems(items));
  };
  return (
    <div className="category-item-list">
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-b-2 text-left"
        >
          <div>
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-16 h-16"
            ></img>
            <div>
              <button onClick={() => handleAddItem(item)}>Add +</button>
            </div>
            <span className="py-2">{item?.card?.info?.name}</span>
            <span>
              {" "}
              -{" "}
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </span>
          </div>
          <p className="text-xs">{item?.card?.info?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
