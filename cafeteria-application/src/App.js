import React, { useState, useEffect } from 'react';
import Dropdown from "./Dropdown";
import Navbar from "./Navbar";
import Add from "./Add";
import Receipt from "./Receipt";

function App() {
  const [forms, setForms] = useState([{ id: 0 }]);
  const [nextId, setNextId] = useState(1);
  const [open, setOpen] = useState(false);
  const [addType, setAddType] = useState("");
  const [emp, setEmp] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [selectedData, setSelectedData] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    const storedFoodItems = JSON.parse(localStorage.getItem('foodItems')) || [];
    
    setEmp(storedEmployees);
    setLunch(storedFoodItems);
  }, []);

  const updateSelectedData = (id, employee, foodItems, totalCost) => {
    const updatedData = [...selectedData];
    const formIndex = updatedData.findIndex((form) => form.id === id);

    if (formIndex !== -1) {
      updatedData[formIndex] = { id, employee, foodItems, totalCost };
    } else {
      updatedData.push({ id, employee, foodItems, totalCost });
    }

    setSelectedData(updatedData);
  };

  const handleAddClick = () => {
    setForms([{ id: nextId }, ...forms]);
    setNextId(nextId + 1);
  };

  const handleDeleteClick = (id) => {
    setForms(forms.filter((form) => form.id !== id));
    setSelectedData(selectedData.filter((data) => data.id !== id));
  };

  const handleReset = () => {
    setForms([{ }]);
    setSelectedData([]);
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
      const updatedEmployees = [...emp, { name: item }];
      setEmp(updatedEmployees);
      localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    } else if (addType === "food") {
      const updatedFood = [...lunch, { title: item.title, cost: item.cost }];
      setLunch(updatedFood);
      localStorage.setItem('foodItems', JSON.stringify(updatedFood));
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
            handleOpenAddDialog={handleOpenAddDialog}
            updateSelectedData={updateSelectedData}
          />
        ))}
      </div>
      <Add open={open} onClose={handleClose} type={addType} onAdd={handleAddItem} />
      <Receipt selectedData={selectedData} />
    </div>
  );
}

export default App;
