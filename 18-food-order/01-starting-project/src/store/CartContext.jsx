// Steps: get Header, show meals via HTTP Request, cartContext

import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const exsistingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...exsistingItem,
        quantity: exsistingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
  }

  return {...state, items: updatedItems};
}

export function ContextProvider({ children }) {
  useReducer();

  return <CartContext.Provider>{children}</CartContext.Provider>;
}

export default CartContext;
