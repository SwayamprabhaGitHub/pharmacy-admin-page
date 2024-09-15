import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar-div">
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="">
          Home
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="medicineform">
          Add Medicine
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="medicinelist">
          Medicine List
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="cart">
          Cart
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
