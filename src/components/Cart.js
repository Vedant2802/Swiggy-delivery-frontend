import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList";
import { clearCart } from "../utils/cartSlice";

export const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-5 p-4">
      <h1 className="text-2xl">Cart</h1>
      <button
        className="m-2 p-2 bg-gray-200 rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <div className="m-auto">
        <ItemList key={cartItems} items={cartItems} />
      </div>
    </div>
  );
};
