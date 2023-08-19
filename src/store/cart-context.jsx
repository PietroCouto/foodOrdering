import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

const defaultCart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      action.payload.price * action.payload.amount + state.totalAmount;

    const indexOfElement = state.items.findIndex(
      (item) => item.id === action.payload.id
    );

    let updatedItems = state.items;

    if (indexOfElement !== -1) {
      updatedItems[indexOfElement].amount += action.payload.amount;
    } else {
      updatedItems = state.items.concat(action.payload);
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  } else if (action.type === "REMOVE_ITEM") {
    let updatedItems = state.items;

    const indexOfElement = state.items.findIndex(
      (item) => item.id === action.payload
    );

    let itemToUpdate = updatedItems[indexOfElement];
    if (itemToUpdate.amount === 1 && updatedItems.length === 1) return defaultCart;
    if (itemToUpdate.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.payload);
    } else {
      updatedItems[indexOfElement].amount--;
    }
    const updatedTotalAmount = state.totalAmount - itemToUpdate.price;
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  return defaultCart;
};

export const CartContextProvider = ({ children }) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCart);
  const addItemToCartHandler = (item) => {
    dispatchCart({ type: "ADD_ITEM", payload: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCart({ type: "REMOVE_ITEM", payload: id });
  };

  const CartContextItems = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={CartContextItems}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within an CartContextProvider");
  }

  return context;
};
