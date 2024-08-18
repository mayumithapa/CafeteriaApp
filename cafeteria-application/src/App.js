import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Navbar from "./Navbar";
import Add from "./Add";

function App() {
  const [forms, setForms] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [open, setOpen] = useState(false);
  const [addType, setAddType] = useState(""); 
  const [emp, setEmp] = useState([]);
  const [lunch, setLunch] = useState([]);

  const handleAddClick = () => {
    setForms([{ id: nextId }, ...forms]);
    setNextId(nextId + 1);
  };

  const handleDeleteClick = (id) => {
    setForms(forms.filter((form) => form.id !== id));
  };

  const handleReset = () => {
    setForms([]);
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
        {forms.map((form) => (
          <Dropdown
            key={form.id}
            id={form.id}
            emp={emp}
            lunch={lunch}
            handleDeleteClick={handleDeleteClick}
            onOpenAddDialog={handleOpenAddDialog}
          />
        ))}
      </div>
      <Add open={open} onClose={handleClose} type={addType} onAdd={handleAddItem} />
    </div>
  );
}

export default App;