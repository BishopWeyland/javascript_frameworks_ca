import React from "react";
import { useCart } from "../CartContext";

const Cart = () => {
  const { state, dispatch } = useCart();

  const cartItems = state.items;

  const handleRemoveFromCart = (itemId) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id: itemId } });
  };

  const totalCost = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div>
      <h1 className="text-2xl md:text-5xl px-4 md:px-8">Shopping cart:</h1>
      <div>
        <div>
          <span>Total items: </span>
          <span>{state.totalItems}</span>
        </div>

        {cartItems.map((item, index) => (
          <div
            className="shadow-lg flex p-10 items-center justify-between"
            key={index}
          >
            <img className="h-32 w-32" src={item.img} alt={item.title} />
            <h2>{item.title}</h2>
            <span>{item.quantity}</span>
            <button onClick={() => handleRemoveFromCart(item.id)}>
              Remove
            </button>{" "}
            <span>{item.price} $</span>
          </div>
        ))}

        <div className="flex justify-end p-4">
          <div className="flex flex-col">
            <span>Shipping: 10 $</span>
            <span>Total: {totalCost + 10} $</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
