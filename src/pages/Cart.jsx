import React from "react";
import { useCart } from "../CartContext";
import { BaseButton } from "../components/ButtonComponent";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const { state, dispatch } = useCart();

  const cartItems = state.items;

  const handleRemoveFromCart = (itemId) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id: itemId } });
    window.location.reload();
  };

  const handleCheckout = () => {
    localStorage.clear();
  };

  const totalCost = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col">
        <h1 className="text-2xl md:text-5xl my-4 md:my-8 self-center">
          Your cart is empty
        </h1>
        <Link className="self-center" to="/">
          <BaseButton>Browse Products</BaseButton>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl md:text-5xl my-4 md:my-8">Shopping cart:</h1>
      <div>
        <div className="mb-4">
          <span>Total items: </span>
          <span>{state.totalItems}</span>
        </div>

        {cartItems.map((item, index) => (
          <div
            className="shadow-lg flex p-2 md:p-10 items-center justify-between"
            key={index}
          >
            <img
              className="h-16 w-16 md:h-32 md:w-32"
              src={item.img}
              alt={item.title}
            />
            <h2 className="font-bold">{item.title}</h2>
            <span className="font-bold">{item.quantity}</span>
            <button
              className="bg-brand-blue py-1 px-2 rounded-md"
              onClick={() => handleRemoveFromCart(item.id)}
            >
              <FontAwesomeIcon className="text-white" icon={faTrashCan} />
            </button>{" "}
            <span className="font-bold">{item.price} $</span>
          </div>
        ))}

        <div className="flex justify-end p-4">
          <div className="flex flex-col">
            <span>Shipping: 10 $</span>
            <span>Total: {totalCost + 10} $</span>
            <Link to="/checkout">
              <BaseButton onClick={handleCheckout}>Checkout</BaseButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
