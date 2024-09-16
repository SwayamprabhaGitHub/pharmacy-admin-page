import React from "react";

const CartContext = React.createContext({
  list: [],
  addToCart: (med) => {},
});

export default CartContext;