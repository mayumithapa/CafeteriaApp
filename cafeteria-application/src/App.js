import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Navbar from "./Navbar";
import Add from "./Add";

function App() {
  const [forms, setForms] = useState([{id:0}]);
  const [nextId, setNextId] = useState(1);
  const [open, setOpen] = useState(false); //for dialogue box
  const [addType, setAddType] = useState(""); // for dialogue box type
  const [emp, setEmp] = useState([]); // emp array
  const [lunch, setLunch] = useState([]);
  const [removedEmployees, setRemovedEmployees] = useState([]); //yaha array hai neeche obj hai? why?
  const [selectedEmployees, setSelectedEmployees] = useState({});

  const handleAddClick = () => {
    setForms([{ id: nextId }, ...forms]);
    setNextId(nextId + 1);
  };

  const handleDeleteClick = (id) => {
    const deletedEmployee = selectedEmployees[id];

    if (deletedEmployee) {
      setEmp([...emp, { name: deletedEmployee }]);
      setRemovedEmployees(removedEmployees.filter(employee => employee.name !== deletedEmployee));
    }

    setForms(forms.filter((form) => form.id !== id));
    // here we are creating a new obj because react does shallow comparision and if don't create react won't recodnize the change
    const updatedSelections = { ...selectedEmployees }; 
    delete updatedSelections[id];
    setSelectedEmployees(updatedSelections);
  };

  const handleReset = () => {
    setForms([{id:0}]);
    setSelectedEmployees({});
    setEmp([...emp, ...removedEmployees]);
    setRemovedEmployees([]);
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
  
  const handleEmployeeSelect = (formId, selectedEmployee) => {
    if (selectedEmployee) {
      setSelectedEmployees({
        ...selectedEmployees,
        [formId]: selectedEmployee.name,
      });

      setEmp(emp.filter(employee => employee.name !== selectedEmployee.name));
      setRemovedEmployees([...removedEmployees, selectedEmployee]);
    } else {
      const reAddedEmployee = selectedEmployees[formId];
      setEmp([...emp, { name: reAddedEmployee }]);

      const updatedSelections = { ...selectedEmployees };
      delete updatedSelections[formId];
      setSelectedEmployees(updatedSelections);
    }
  };

  return (
    <div className="App">
      <Navbar handleAddClick={handleAddClick} handleReset={handleReset} />
      <div className="body">
        {forms.map((form) => {
          const availableEmployees = emp.filter(employee => !Object.values(selectedEmployees).includes(employee.name));

          return (
            <Dropdown
              key={form.id}
              id={form.id}
              emp={availableEmployees}
              lunch={lunch}
              handleDeleteClick={handleDeleteClick}
              handleOpenAddDialog={handleOpenAddDialog}
              onEmployeeSelect={(selectedEmployee) => handleEmployeeSelect(form.id, selectedEmployee)}
            />
          );
        })}
      </div>
      <Add open={open} onClose={handleClose} type={addType} onAdd={handleAddItem} />
    </div>
  );
}

export default App;
