import React, { useEffect, useState } from "react";
import CartContext from "./cart-context";

const CartContextProvider = (props) => {
  const [list, setList] = useState([]);

  const addToCartHandler = (med) => {
    const medToAdd = {
      name: med.MedicineName,
      price: Number(med.MedicinePrice),
    };
    const updatedCartList = [...list, medToAdd];
    setList(updatedCartList);
    const addMed = async () => {
      const response = await fetch(
        "https://pharmacy-admin-page-default-rtdb.firebaseio.com/cartlist.json",
        {
          method: "PUT",
          body: JSON.stringify(updatedCartList),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (!response.ok) {
        const data = await response.json();
        console.log(data);
        throw new Error(data.message);
      }
    };
    addMed();
  };

  useEffect(() => {
    const getCartList = async () => {
      const response = await fetch(
        "https://pharmacy-admin-page-default-rtdb.firebaseio.com/cartlist.json"
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (data) {
          setList(data);
        } else {
          setList([]);
        }
      } else {
        setList([]);
        const data = await response.json();
        throw new Error(data.error.message);
      }
    };
    getCartList();
  }, []);

  const contextValue = {
    list: list,
    addToCart: addToCartHandler,
  };
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
