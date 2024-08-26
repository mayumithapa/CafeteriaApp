// import React, { useState, useEffect } from "react";
// import './Dropdown.css';
// import { styled } from "@mui/material/styles";
// import { Autocomplete, TextField, IconButton } from '@mui/material';
// import Stack from "@mui/material/Stack";
// import Chip from "@mui/material/Chip";
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

// const CustomTextField = styled(TextField)(({ theme }) => ({
//   "& .MuiOutlinedInput-root": {
//     "& fieldset": {
//       borderColor: "#7d6b56",
//     },
//     "&:hover fieldset": {
//       borderColor: "#7d6b56",
//     },
//     "&.Mui-focused fieldset": {
//       borderColor: "#7d6b56",
//     },
//   },
//   "& .MuiInputLabel-root": {
//     color: "#7d6b56",
//     "&.Mui-focused": {
//       color: "#7d6b56",
//     },
//   },
//   "& input::placeholder": {
//     color: "#7d6b56",
//   },
// }));
  
// const CustomChip = styled(Chip)(({ theme }) => ({
//   backgroundColor: "#d8d0c7",
//   color: "white",
// }));

// const ChipContainer = styled("div")({
//   display: "flex",
//   flexWrap: "nowrap",
//   overflowX: "auto",
//   whiteSpace: "nowrap",
//   padding: "5px 0",
// });

// const Dropdown = ({ id, emp, lunch, handleDeleteClick, handleOpenAddDialog, updateSelectedData}) => {
//   const [selectedEmployee, setSelectedEmployee] = useState(null); //yaha selectedEmployee initialize hua hai and yeh locally ek form ka value set kr rha hai
//   const [selectedFood, setSelectedFood] = useState([]);
//   const [totalCost, setTotalCost] = useState(null);

//   const handleFoodSelect = (event, value) => {
//     const lastSelectedItem = value.length ? value[value.length - 1] : null;

//     if (lastSelectedItem) {
//       const existingItemIndex = selectedFood.findIndex(
//         (item) => item.title === lastSelectedItem.title
//       );

//       if (existingItemIndex !== -1) {
//         const newSelections = [...selectedFood];
//         newSelections[existingItemIndex].count += 1;
//         setSelectedFood(newSelections);
//       } else {
//         setSelectedFood([...selectedFood, { ...lastSelectedItem, count: 1 }]);
//       }
//     }
//   };

//   const handleChipDelete = (chipToDelete) => {
//     setSelectedFood((chips) =>
//       chips.filter((chip) => chip.title !== chipToDelete.title)
//     );
//   };

//   const handleClear = () => {
//     setSelectedFood([]);
//   };

//   useEffect(() => {
//     const calculateTotalCost = () => {
//       let total = 0;
//       selectedFood.forEach((item) => {
//         total += item.count * item.cost;
//       });
//       setTotalCost(total);
//     };

//     calculateTotalCost();
//   }, [selectedFood]);

//   useEffect(() => {
//     updateSelectedData(id, selectedEmployee, selectedFood, totalCost); // Update selected data when employee or food items change
//   }, [selectedEmployee, selectedFood, totalCost]); // <-- Added this useEffect

//   return (
//     <Stack
//       spacing={3}
//       direction="row"
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         margin: "20px",
//         marginBottom: "10px",
//         color: "#7d6b56",
//       }}
//     >
//       <Autocomplete
//         disablePortal
//         id="combo-box-demo"
//         options={[...emp]}
//         getOptionLabel={(option) => option.name || option.name}
//         value={selectedEmployee}
//         onChange={(event, value) => {
//           if (value) {
//             setSelectedEmployee(value);
//           }
//         }}
//         renderInput={(params) => (
//           <CustomTextField
//             {...params}
//             label="Employee Name"
//             placeholder="Employee Name"
//             InputProps={{
//               ...params.InputProps,
//               endAdornment: (
//                 <>
//                   {params.InputProps.endAdornment}
//                   <IconButton onClick={() => handleOpenAddDialog("employee")}> {/* Add Icon added in Employee dropdown */}
//                     <AddCircleOutlineIcon />
//                   </IconButton>
//                 </>
//               ),
//             }}
//           />
//         )}
//         sx={{ minWidth: 100, maxWidth: 220, flexGrow: 1, color: "#7d6b56" }}
//         ListboxProps={{
//           sx: { maxHeight: 200, overflowY: "auto" },
//         }}
//       />

//       <Autocomplete
//         multiple
//         id="tags-outlined-2"
//         // options={[...lunch, { title: "Add Food Item" }]}
//         options={[...lunch]}
//         getOptionLabel={(option) => option.title}
//         filterSelectedOptions={false}
//         onChange={handleFoodSelect}
//         value={selectedFood}
//         disableClearable={true}
//         clearOnEscape={false}
//         renderInput={(params) => (
//           <CustomTextField
//             {...params}
//             label="Food Item"
//             placeholder="Food Item"
//             InputProps={{
//               ...params.InputProps,
//               endAdornment: (
                
//                 <React.Fragment>
//                    <>
//                   {params.InputProps.endAdornment}
//                   <IconButton onClick={() => handleOpenAddDialog("food")}> {/* Add Icon added in Food Item dropdown */}
//                     <AddCircleOutlineIcon />
//                   </IconButton>
//                 </>
//                   {params.InputProps.endAdornment}
//                   <IconButton onClick={handleClear}>
//                     <DeleteOutlineIcon />
//                   </IconButton>
//                 </React.Fragment>
//               ),
//             }}
//           />
//         )}
//         renderTags={(value, getTagProps) => (
//           <ChipContainer>
//             {value
//               .filter((option) => option.title !== "Add Food Item")
//               .map((option, index) => (
//                 <CustomChip
//                   label={`${option.title} x${option.count}`}
//                   {...getTagProps({ index })}
//                   onDelete={() => handleChipDelete(option)}
//                   key={index}
//                 />
//               ))}
//           </ChipContainer>
//         )}
//         sx={{ minWidth: 200, maxWidth: 800, flexGrow: 1 }}
//         ListboxProps={{
//           sx: { maxHeight: 200, overflowY: "auto" },
//         }}
//       />

//       <CustomTextField
//         id="outlined-read-only-input"
//         label="Cost"
//         InputProps={{
//           readOnly: true,
//         }}
//         value={`₹${totalCost}`}
//         sx={{ minWidth: 100, maxWidth: 150, flexGrow: 1 }}
//       />

//       <IconButton onClick={() => handleDeleteClick(id)}>
//         <DeleteOutlineIcon
//           sx={{
//             border: "3px solid #7d6b56",
//             height: "40px",
//             width: "40px",
//             borderRadius: "8px",
//           }}
//         />
//       </IconButton>
//     </Stack>
//   );
// };

// export default Dropdown;

import React, { useState, useEffect } from 'react';
import { styled } from "@mui/material/styles";
import { Autocomplete, TextField, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Button, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

// Local storage keys
const LOCAL_STORAGE_KEYS = {
  EMPLOYEES: 'employees',
  BREAKFAST_MENU: 'breakfastMenu',
  LUNCH_MENU: 'lunchMenu'
};

// Utility functions for local storage
const getFromLocalStorage = (key, defaultValue) => {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : defaultValue;
};

const setToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Sample initial data
const initialEmployees = [
  { id: 1, name: 'MANO' },
  { id: 2, name: 'VEER' },
  { id: 3, name: 'VARA' },
  { id: 4, name: 'PRAB' },
  { id: 5, name: 'VENU' },
  { id: 6, name: 'HUZA' },
  { id: 7, name: 'ANKU' },
  { id: 8, name: 'RAGH' },
  { id: 9, name: 'LASY' },
  { id: 10, name: 'KEER' },
  { id: 11, name: 'LAKS' },
  { id: 12, name: 'RANJ' },
  { id: 13, name: 'ANAN' },
  { id: 14, name: 'SACH' },
  { id: 15, name: 'VIVE' },
  { id: 16, name: 'SUDH' },
  { id: 17, name: 'KINJ' },
];

const initialBreakfastMenu = [
  { id: 100, name: 'Water Btl * Small', price: 10 },
    { id: 101, name: 'Water Btl * Large', price: 20 },
    { id: 102, name: '2 Idly & * 2 Bonda', price: 30 },
    { id: 103, name: '2 Idly & * 2 Vada', price: 35 },
    { id: 104, name: '2 Bonda & * 2 Vada', price: 35 },
    { id: 105, name: '4 Idly', price: 30 },
    { id: 106, name: '4 Bonda', price: 30 },
    { id: 107, name: '4 Vada', price: 40 },
    { id: 108, name: '2 Idly', price: 15 },
    { id: 109, name: '2 Bonda', price: 15 },
    { id: 110, name: '2 Vada', price: 20 },
    { id: 111, name: 'Idly & * Vada', price: 20 },
    { id: 112, name: 'Idly & * Bonda', price: 20 },
    { id: 113, name: 'Bonda & * Vada', price: 20 },
    { id: 114, name: 'Tea Small', price: 8 },
    { id: 115, name: 'Tea Large', price: 12 },
    { id: 116, name: 'Coffee', price: 20 },
    { id: 117, name: 'Milk', price: 12 },
];

const initialLunchMenu = [
  { id: 229, name: 'Water Btl * Small', price: 10 },
  { id: 230, name: 'Water Btl * Large', price: 20 },
  { id: 201, name: 'Thali * Veg', price: 120 },
  { id: 202, name: 'Thali * NonVeg', price: 150 },
  { id: 203, name: 'Chapathi * Veg', price: 100 },
  { id: 204, name: 'Chapathi * Chicken', price: 120 },
  { id: 205, name: 'Brown Rice * Veg', price: 100 },
  { id: 206, name: 'Brown Rice * Egg', price: 140 },
  { id: 207, name: 'Brown Rice * Chicken', price: 160 },
  { id: 208, name: 'Biryani * Veg', price: 150 },
  { id: 209, name: 'Biryani * Chicken', price: 200 },
  { id: 210, name: 'Fried Rice * Veg', price: 100 },
  { id: 211, name: 'Fried Rice * Sing Egg', price: 120 },
  { id: 212, name: 'Fried Rice * Doub Egg', price: 140 },
  { id: 213, name: 'Fried Rice * Chicken', price: 150 },
  { id: 214, name: 'Noodles * Veg', price: 100 },
  { id: 215, name: 'Noodles * Sing Egg', price: 120 },
  { id: 216, name: 'Noodles * Doub Egg', price: 140 },
  { id: 217, name: 'Noodles * Chicken', price: 150 },
  { id: 218, name: 'Salad * Veg', price: 80 },
  { id: 219, name: 'Salad * Egg', price: 120 },
  { id: 220, name: 'Salad * Chicken', price: 140 },
  { id: 221, name: 'Sandwich * Veg', price: 80 },
  { id: 222, name: 'Sandwich * Chicken', price: 100 },
  { id: 223, name: 'Club Sandwich * Veg', price: 120 },
  { id: 224, name: 'Club Sandwich * NonVeg', price: 120 },
  { id: 225, name: 'Fruit Bowl', price: 80 },
  { id: 226, name: 'Juice * WaterMeln', price: 50 },
  { id: 227, name: 'Juice * Grapes', price: 50 },
  { id: 228, name: 'Juice * PineApple', price: 50 },
  { id: 229, name: 'Juice * Musk Meln', price: 60 },
  { id: 230, name: 'Juice * Mango', price: 60 },
  { id: 231, name: 'Juice * Banana', price: 60 },
  { id: 232, name: 'Juice * Apple', price: 80 },
  { id: 233, name: 'Juice * Sapota', price: 80 },
  { id: 234, name: 'Juice * Pomegrant', price: 80 },
  { id: 235, name: 'Juice * Carrot', price: 80 },
  { id: 236, name: 'Juice * Beet Root', price: 80 },
];

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#7d6b56",
    },
    "&:hover fieldset": {
      borderColor: "#7d6b56",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#7d6b56",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#7d6b56",
    "&.Mui-focused": {
      color: "#7d6b56",
    },
  },
  "& input::placeholder": {
    color: "#7d6b56",
  },
}));

const CustomChip = styled(Chip)(({ theme }) => ({
  backgroundColor: "#d8d0c7",
  color: "white",
}));

const ChipContainer = styled("div")({
  display: "flex",
  flexWrap: "nowrap",
  overflowX: "auto",
  whiteSpace: "nowrap",
  padding: "5px 0",
});

// Add Employee Dialog
const AddEmployeeDialog = ({ open, onClose, onAdd }) => {
  const [name, setName] = useState('');

  const handleAdd = () => {
    onAdd(name);
    setName('');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Employee</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Employee Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleAdd}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

// Add Food Dialog
const AddFoodDialog = ({ open, onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [mealType, setMealType] = useState('breakfast');

  const handleAdd = () => {
    onAdd({ name, price: parseFloat(price), mealType });
    setName('');
    setPrice('');
    setMealType('breakfast');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Food Item</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Food Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Price"
          type="number"
          fullWidth
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <FormControl fullWidth margin="dense">
          <InputLabel>Meal Type</InputLabel>
          <Select
            value={mealType}
            onChange={(e) => setMealType(e.target.value)}
          >
            <MenuItem value="breakfast">Breakfast</MenuItem>
            <MenuItem value="lunch">Lunch</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleAdd}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

const Dropdown = ({ resetTrigger, id, handleDeleteClick, updateSelectedData, selectedEmployees }) => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedFood, setSelectedFood] = useState([]);
  const [totalCost, setTotalCost] = useState(null);
  const [openEmployeeDialog, setOpenEmployeeDialog] = useState(false);
  const [openFoodDialog, setOpenFoodDialog] = useState(false);

  const [employeesList, setEmployeesList] = useState(getFromLocalStorage(LOCAL_STORAGE_KEYS.EMPLOYEES, initialEmployees));
  const [breakfastMenu, setBreakfastMenu] = useState(getFromLocalStorage(LOCAL_STORAGE_KEYS.BREAKFAST_MENU, initialBreakfastMenu));
  const [lunchMenu, setLunchMenu] = useState(getFromLocalStorage(LOCAL_STORAGE_KEYS.LUNCH_MENU, initialLunchMenu));

  const handleAddEmployee = (name) => {
    const newEmployee = { id: employeesList.length + 1, name };
    const updatedEmployeesList = [...employeesList, newEmployee];
    setEmployeesList(updatedEmployeesList);
    setToLocalStorage(LOCAL_STORAGE_KEYS.EMPLOYEES, updatedEmployeesList);
  };

  const handleAddFood = (item) => {
    const newItem = { id: Date.now(), ...item }; // Generate a unique ID
    let updatedMenu;
    if (item.mealType === 'breakfast') {
      updatedMenu = [...breakfastMenu, newItem];
      setBreakfastMenu(updatedMenu);
      setToLocalStorage(LOCAL_STORAGE_KEYS.BREAKFAST_MENU, updatedMenu);
    } else if (item.mealType === 'lunch') {
      updatedMenu = [...lunchMenu, newItem];
      setLunchMenu(updatedMenu);
      setToLocalStorage(LOCAL_STORAGE_KEYS.LUNCH_MENU, updatedMenu);
    }
  };

  const handleOpenAddDialog = (type) => {
    if (type === 'employee') {
      setOpenEmployeeDialog(true);
    } else if (type === 'food') {
      setOpenFoodDialog(true);
    }
  };

  const handleCloseEmployeeDialog = () => setOpenEmployeeDialog(false);
  const handleCloseFoodDialog = () => setOpenFoodDialog(false);

  const handleFoodSelect = (event, value) => {
    const lastSelectedItem = value.length ? value[value.length - 1] : null;
    if (lastSelectedItem) {
      const existingItemIndex = selectedFood.findIndex(
        (item) => item.name === lastSelectedItem.name
      );
      if (existingItemIndex !== -1) {
        const newSelections = [...selectedFood];
        newSelections[existingItemIndex].count += 1;
        setSelectedFood(newSelections);
      } else {
        setSelectedFood([...selectedFood, { ...lastSelectedItem, count: 1 }]);
      }
    }
  };

  const handleChipDelete = (chipToDelete) => {
    setSelectedFood((chips) =>
      chips.filter((chip) => chip.name !== chipToDelete.name)
    );
  };

  const handleClear = () => {
    setSelectedFood([]);
  };

  useEffect(() => {
    const calculateTotalCost = () => {
      let total = 0;
      selectedFood.forEach((item) => {
        total += item.count * item.price;
      });
      setTotalCost(total);
    };
    calculateTotalCost();
  }, [selectedFood]);

  useEffect(() => {
    updateSelectedData(id, selectedEmployee, selectedFood, totalCost);
  }, [selectedEmployee, selectedFood, totalCost]);

  useEffect(() => {
    if (resetTrigger) {
      setSelectedEmployee(null);
      setSelectedFood([]);
      setTotalCost(null);
    }
  }, [resetTrigger]);

  const foodOptions = [
    { title: 'Breakfast Menu', items: breakfastMenu },
    { title: 'Lunch Menu', items: lunchMenu }
  ];

  return (
    <Stack
      spacing={3}
      direction="row"
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "20px",
        marginBottom: "10px",
        color: "#7d6b56",
      }}
    >
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={employeesList}
        getOptionLabel={(option) => option.name || option.name}
        value={selectedEmployee}
        onChange={(event, value) => {
          if (value) {
            setSelectedEmployee(value);
          }
        }}
        renderInput={(params) => (
          <CustomTextField
            {...params}
            label="Employee Name"
            placeholder="Employee Name"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {params.InputProps.endAdornment}
                  <IconButton onClick={() => handleOpenAddDialog("employee")}>
                    <AddCircleOutlineIcon />
                  </IconButton>
                </>
              ),
            }}
          />
        )}
        sx={{ minWidth: 100, maxWidth: 220, flexGrow: 1, color: "#7d6b56" }}
        ListboxProps={{
          sx: { maxHeight: 200, overflowY: "auto" },
        }}
      />

      <Autocomplete
        multiple
        id="tags-outlined-2"
        options={foodOptions.flatMap(section => section.items.map(item => ({ ...item, section: section.title })))}
        groupBy={(option) => option.section}
        getOptionLabel={(option) => `${option.name} (₹${option.price})`}
        filterSelectedOptions={false}
        onChange={handleFoodSelect}
        value={selectedFood}
        disableClearable={true}
        clearOnEscape={false}
        renderInput={(params) => (
          <CustomTextField
            {...params}
            label="Food Item"
            placeholder="Food Item"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {params.InputProps.endAdornment}
                  <IconButton onClick={() => handleOpenAddDialog("food")}>
                    <AddCircleOutlineIcon />
                  </IconButton>
                  <IconButton onClick={handleClear}>
                    <DeleteOutlineIcon />
                  </IconButton>
                </>
              ),
            }}
          />
        )}
        renderTags={(value, getTagProps) => (
          <ChipContainer>
            {value.map((option, index) => (
              <CustomChip
                label={`${option.name} (₹${option.price}) x${option.count}`}
                {...getTagProps({ index })}
                onDelete={() => handleChipDelete(option)}
                key={index}
              />
            ))}
          </ChipContainer>
        )}
        sx={{ minWidth: 200, maxWidth: 800, flexGrow: 1 }}
        ListboxProps={{
          sx: { maxHeight: 200, overflowY: "auto" },
        }}
      />

      <CustomTextField
        id="outlined-read-only-input"
        label="Cost"
        InputProps={{
          readOnly: true,
        }}
        value={`₹${totalCost}`}
        sx={{ minWidth: 100, maxWidth: 150, flexGrow: 1 }}
      />

      <IconButton onClick={() => handleDeleteClick(id)}>
        <DeleteOutlineIcon
          sx={{
            minWidth: 30,
            maxWidth: 50,
            flexGrow: 1,
            color: "#7d6b56",
            fontSize: "2rem",
          }}
        />
      </IconButton>

      <AddEmployeeDialog open={openEmployeeDialog} onClose={handleCloseEmployeeDialog} onAdd={handleAddEmployee} />
      <AddFoodDialog open={openFoodDialog} onClose={handleCloseFoodDialog} onAdd={handleAddFood} />
    </Stack>
  );
};

export default Dropdown;
