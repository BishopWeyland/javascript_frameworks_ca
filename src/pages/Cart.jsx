import React from "react";
import { useCart } from "../CartContext";

const Cart = () => {
  const { state, dispatch } = useCart();

  const cartItem = state.items;

  console.log(cartItem);

  return (
    <div>
      Cart
      <div>
        <div>
          <span>Total items: </span>
          <span>{state.totalItems}</span>
        </div>

        {cartItem.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
