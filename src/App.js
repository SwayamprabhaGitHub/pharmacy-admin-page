import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Components/Root";
import ErrorPage from "./Components/ErrorPage";
import HomePage from "./Components/HomePage";
import AddMedicineForm from "./Components/AddMedicineForm";
import MedicineList from "./Components/MedicineList";
import Cart from "./Components/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "medicineform", element: <AddMedicineForm /> },
      { path: "medicinelist", element: <MedicineList /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
