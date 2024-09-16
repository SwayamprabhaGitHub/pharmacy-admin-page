import React, { useContext, useRef } from "react";
import MedicineContext from "../store/medicine-context";

const AddMedicineForm = () => {
  const mdcnCnxt = useContext(MedicineContext);
  const medicineNameInputRef = useRef();
  const medicineDesInputRef = useRef();
  const medicinePriceInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredMedicineName = medicineNameInputRef.current.value;
    const enteredMedicineDes = medicineDesInputRef.current.value;
    const enteredMedicinePrice = medicinePriceInputRef.current.value;

    const medicine = {
      MedicineName: enteredMedicineName,
      MedicineDes: enteredMedicineDes,
      MedicinePrice: enteredMedicinePrice,
    };

    mdcnCnxt.addMedicines(medicine);

    medicineNameInputRef.current.value = "";
    medicineDesInputRef.current.value = "";
    medicinePriceInputRef.current.value = "";

  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label htmlFor="medicineName">Medicine Name:</label>
        <input
          type="text"
          id="medicineName"
          required
          ref={medicineNameInputRef}
        />
      </div>
      <div>
        <label htmlFor="medicineDes">Description:</label>
        <input
          type="text"
          id="medicineDes"
          required
          ref={medicineDesInputRef}
        />
      </div>
      <div>
        <label htmlFor="medicinePrice">Price:</label>
        <input
          type="number"
          id="medicinePrice"
          required
          ref={medicinePriceInputRef}
        />
      </div>
      <button type="submit">Add Medicine</button>
    </form>
  );
};

export default AddMedicineForm;
