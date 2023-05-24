"use client";
import { createContext, useReducer } from "react";

const stateInit = [];
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { item, qty } = action.payload;
      if (!state.some((sitem) => sitem._id === item._id)) {
        return [
          ...state,
          {
            // _id: item._id,
            // price: item.price,
            // productTitle: item.name,
            ...item,
            qty: qty,
          },
        ];
      } else {
        return state.map((sitem) => {
          if (sitem._id === item._id) {
            return { ...sitem, qty: sitem.qty + qty };
          } else {
            return sitem;
          }
        });
      }
    }
    case "SUB_FROM_CART": {
      const { item } = action.payload;
      if (
        !state.some((sitem) => sitem._id === item._id) ||
        state.find((sitem) => sitem._id === item._id).qty === 0
      ) {
        return state;
      } else {
        return state.map((sitem) => {
          if (sitem._id === item._id) {
            return { ...sitem, qty: sitem.qty - 1 };
          } else {
            return sitem;
          }
        });
      }
    }
    case "CLEAR": {
      return stateInit;
    }
    default:
      return state;
  }
};

export const cartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, stateInit);

  return (
    <cartContext.Provider value={[cart, dispatch]}>
      {children}
    </cartContext.Provider>
  );
};
