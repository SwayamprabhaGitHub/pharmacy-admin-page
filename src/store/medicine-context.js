import React from "react";

const MedicineContext = React.createContext({
  medicines: [],
  addMedicines: (med) => {},
});

export default MedicineContext;
