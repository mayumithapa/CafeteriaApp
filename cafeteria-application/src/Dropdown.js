import React, { useState, useEffect } from "react";
import './Dropdown.css';
import { styled } from "@mui/material/styles";
import { Autocomplete, TextField, IconButton } from '@mui/material';
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

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

const Dropdown = ({ id, emp, lunch, handleDeleteClick, handleOpenAddDialog, updateSelectedData}) => {
  const [selectedEmployee, setSelectedEmployee] = useState(null); //yaha selectedEmployee initialize hua hai and yeh locally ek form ka value set kr rha hai
  const [selectedFood, setSelectedFood] = useState([]);
  const [totalCost, setTotalCost] = useState(null);

  const handleFoodSelect = (event, value) => {
    const lastSelectedItem = value.length ? value[value.length - 1] : null;

    if (lastSelectedItem) {
      const existingItemIndex = selectedFood.findIndex(
        (item) => item.title === lastSelectedItem.title
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
      chips.filter((chip) => chip.title !== chipToDelete.title)
    );
  };

  const handleClear = () => {
    setSelectedFood([]);
  };

  useEffect(() => {
    const calculateTotalCost = () => {
      let total = 0;
      selectedFood.forEach((item) => {
        total += item.count * item.cost;
      });
      setTotalCost(total);
    };

    calculateTotalCost();
  }, [selectedFood]);

  useEffect(() => {
    updateSelectedData(id, selectedEmployee, selectedFood, totalCost); // Update selected data when employee or food items change
  }, [selectedEmployee, selectedFood, totalCost]); // <-- Added this useEffect

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
        options={[...emp]}
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
                  <IconButton onClick={() => handleOpenAddDialog("employee")}> {/* Add Icon added in Employee dropdown */}
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
        // options={[...lunch, { title: "Add Food Item" }]}
        options={[...lunch]}
        getOptionLabel={(option) => option.title}
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
                
                <React.Fragment>
                   <>
                  {params.InputProps.endAdornment}
                  <IconButton onClick={() => handleOpenAddDialog("food")}> {/* Add Icon added in Food Item dropdown */}
                    <AddCircleOutlineIcon />
                  </IconButton>
                </>
                  {params.InputProps.endAdornment}
                  <IconButton onClick={handleClear}>
                    <DeleteOutlineIcon />
                  </IconButton>
                </React.Fragment>
              ),
            }}
          />
        )}
        renderTags={(value, getTagProps) => (
          <ChipContainer>
            {value
              .filter((option) => option.title !== "Add Food Item")
              .map((option, index) => (
                <CustomChip
                  label={`${option.title} x${option.count}`}
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
            border: "3px solid #7d6b56",
            height: "40px",
            width: "40px",
            borderRadius: "8px",
          }}
        />
      </IconButton>
    </Stack>
  );
};

export default Dropdown;

