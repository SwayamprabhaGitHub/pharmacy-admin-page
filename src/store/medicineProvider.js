import React, { useState } from "react";
import MedicineContext from "./medicine-context";

const MedicineContextProvider = (props) => {
  const [medicines, setMedicines] = useState([]);

  const addMedicineHandler = (med) => {
    setMedicines((prevMedicines) => {
      return [...prevMedicines, med];
    });
  };

  console.log(medicines);

  const contextValue = {
    medicines: medicines,
    addMedicines: addMedicineHandler,
  };

  return (
    <MedicineContext.Provider value={contextValue}>
      {props.children}
    </MedicineContext.Provider>
  );
};

export default MedicineContextProvider;
