import React, { createContext, useContext, useReducer, useEffect } from "react";

export const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const getInitialState = () => {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    return JSON.parse(savedCart);
  }
  return {
    items: [],
    totalItems: 0,
  };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingCartItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingCartItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          totalItems: state.totalItems + 1,
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          totalItems: state.totalItems + 1,
        };
      }

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
        totalItems: state.totalItems - action.payload.quantity,
      };

    case "LOAD_CART":
      return {
        ...state,
        items: action.payload.items,
        totalItems: action.payload.totalItems,
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, getInitialState());

  useEffect(() => {
    try {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          items: state.items,
          totalItems: state.totalItems,
        })
      );
      console.log("Saved cart data to localStorage:", state);
    } catch (error) {
      console.error("Error saving to local storage:", error);
    }
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
