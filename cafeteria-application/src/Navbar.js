import React from "react";
import './Dropdown';
const Navbar = ({ handleAddClick, handleReset }) => {
  return (
    <div className="navbar">
      <h1>CAFETERIA APPLICATION</h1>
      <div>
        <img
          onClick={handleAddClick} 
          src="/images/add-icon.png"
          id="add-icon"
          alt="Add Icon"
        />
        <button
          id="reset-btn"
          type="button"
          className="btn btn-outline-success"
          onClick={handleReset}
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default Navbar;
