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
  const [removedEmployees, setRemovedEmployees] = useState([]);


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
  
    // New handler to update emp array and notify Dropdown
    // const handleEmployeeSelect = (selectedEmployee) => {
    //   setEmp(emp.filter(employee => employee.name !== selectedEmployee.name));
    // };

    const handleEmployeeSelect = (selectedEmployee) => {
      if (selectedEmployee) {
        // Remove the selected employee from the emp list
        setEmp(emp.filter(employee => employee.name !== selectedEmployee.name));
    
        // Add the selected employee to removedEmployees
        setRemovedEmployees([...removedEmployees, selectedEmployee]);
      } else {
        // Re-add removed employees if the input field is cleared
        setEmp([...emp, ...removedEmployees]);
        setRemovedEmployees([]); // Clear removed employees list
      }
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
            onEmployeeSelect={handleEmployeeSelect} // Pass handler to Dropdown

          />
        ))}
      </div>
      <Add open={open} onClose={handleClose} type={addType} onAdd={handleAddItem} />
    </div>
  );
}

export default App;