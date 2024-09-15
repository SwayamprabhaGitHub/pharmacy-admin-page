import React from "react";

const MedicineContext = React.createContext({
  medicines: [],
  addMedicines: () => {},
});

export default MedicineContext;
