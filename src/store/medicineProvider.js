import React, { useEffect, useState } from "react";
import MedicineContext from "./medicine-context";

const MedicineContextProvider = (props) => {
  const [medicines, setMedicines] = useState([]);

  const addMedicineHandler = (med) => {
    const updatedMedicineList = [...medicines, med];
    setMedicines(updatedMedicineList);
    const addMedicine = async () => {
      const response = await fetch(
        "https://pharmacy-admin-page-default-rtdb.firebaseio.com/medicineList.json",
        {
          method: "PUT",
          body: JSON.stringify(updatedMedicineList),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (!response.ok) {
        const data = await response.json();
        console.log(data);
        throw new Error(data.message);
      } else {
        const data = await response.json();
        console.log(data);
      }
    };
    addMedicine();
  };

  console.log(medicines);

  useEffect(() => {
    const getMedicineList = async () => {
      const response = await fetch(
        "https://pharmacy-admin-page-default-rtdb.firebaseio.com/medicineList.json"
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (data) {
          setMedicines(data);
        } else {
          setMedicines([]);
        }
      } else {
        setMedicines([]);
        const data = await response.json();
        throw new Error(data.error.message);
      }
    };
    getMedicineList();
  }, []);

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
