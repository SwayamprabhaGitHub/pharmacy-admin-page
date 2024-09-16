import React, { useContext } from "react";
import MedicineContext from "../store/medicine-context";
import CartContext from "../store/cart-context";

const MedicineList = () => {
  const mdcnCnxt = useContext(MedicineContext);
  const cartCtx = useContext(CartContext);

  return (
    <table>
      <thead>
        <tr>
          <td>Medicine</td>
          <td>Description</td>
          <td>Price</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {mdcnCnxt.medicines.map((med) => {
          return (
            <tr key={Math.random()}>
              <td>{med.MedicineName}</td>
              <td>{med.MedicineDes}</td>
              <td>{med.MedicinePrice}</td>
              <td>
                <button onClick={() => {cartCtx.addToCart(med)}}>ADD</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MedicineList;
