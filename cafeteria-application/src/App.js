import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Navbar from "./Navbar";
import Add from "./Add";
import Receipt from "./Receipt";

function App() {
  const [forms, setForms] = useState([{id:0}]);
  const [nextId, setNextId] = useState(1);
  const [open, setOpen] = useState(false); //for dialogue box
  const [addType, setAddType] = useState(""); // for dialogue box type
  const [emp, setEmp] = useState([]); // emp array
  const [lunch, setLunch] = useState([]);
  const [selectedData, setSelectedData] = useState([]);

  const updateSelectedData = (id, employee, foodItems, totalCost) => {
    const updatedData = [...selectedData];
    const formIndex = updatedData.findIndex((form) => form.id === id);

    if (formIndex !== -1) {
      updatedData[formIndex] = { id, employee, foodItems, totalCost };
    } else {
      updatedData.push({ id, employee, foodItems, totalCost });
    }

    setSelectedData(updatedData);// i need to read this function 
  };
  const handleAddClick = () => {
    setForms([{ id: nextId }, ...forms]);
    setNextId(nextId + 1);
  };

  const handleDeleteClick = (id) => {
    setForms(forms.filter((form) => form.id !== id));
  };

  const handleReset = () => {
    setForms([{id:0}]);
  };

  const handleOpenAddDialog = (type) => {
    setAddType(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleAddItem = (item) => {
    if (addType === "employee") {
      setEmp([...emp, { name: item }]);
    } else if (addType === "food") {
      setLunch([...lunch, { title: item.title, cost: item.cost }]);
    }
    handleClose();
  };
  
  return (
    <div className="App">
      <Navbar handleAddClick={handleAddClick} handleReset={handleReset} />
      <div className="body">
        {forms.map((form) => {
          return (
            <Dropdown
              key={form.id}
              id={form.id}
              emp={emp}
              lunch={lunch}
              handleDeleteClick={handleDeleteClick}
              handleOpenAddDialog={handleOpenAddDialog}
              updateSelectedData={updateSelectedData}
            />
          );
        })}
      </div>
      <Add open={open} onClose={handleClose} type={addType} onAdd={handleAddItem} />
      <Receipt data={selectedData} />
    </div>
  );
}

export default App;

