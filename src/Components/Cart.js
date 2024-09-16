import React, { useContext } from "react";
import CartContext from "../store/cart-context";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  let totalAmount = 0;
  cartCtx.list.forEach((med) => {
    totalAmount += med.price;
  })

  if (cartCtx.list.length === 0) {
    return <p>Cart is Empty!!</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <td>Medicine</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        {cartCtx.list.map((med) => {
          return (
            <tr key={Math.random()}>
              <td>{med.name}</td>
              <td>{med.price}</td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td>Total Amount:</td>
          <td>{totalAmount}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Cart;
