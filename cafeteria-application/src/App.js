import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    fetch("http://localhost:5000/api/employees")
      .then((response) => response.json())
      .then((data) => setEmp(data));
  
    fetch("http://localhost:5000/api/foods")
      .then((response) => response.json())
      .then((data) => setLunch(data));
  }, []);
  

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
      fetch("http://localhost:5000/api/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: item }),
      })
        .then((response) => response.json())
        .then(() => setEmp([...emp, { name: item }]));
    } else if (addType === "food") {
      fetch("http://localhost:5000/api/foods", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: item }),
      })
        .then((response) => response.json())
        .then(() => setLunch([...lunch, { title: item }]));
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


