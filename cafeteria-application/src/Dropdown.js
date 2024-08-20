import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { IconButton } from "@mui/material";
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

const Dropdown = ({ id, emp, lunch, handleDeleteClick, onOpenAddDialog, onEmployeeSelect }) => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedFood, setSelectedFood] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const handleFoodSelect = (event, value) => {
    const lastSelectedItem = value.length ? value[value.length - 1] : null;

    if (lastSelectedItem && lastSelectedItem.title === "Add Food Item") {
      onOpenAddDialog("food");
    } else if (lastSelectedItem) {
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
    // Calculate total cost when selectedFood changes
    const calculateTotalCost = () => {
      let total = 0;
      selectedFood.forEach((item) => {
        total += item.count * item.cost;
      });
      setTotalCost(total);
    };

    calculateTotalCost();
  }, [selectedFood]);

  return (
    <Stack
      spacing={3}
      direction="row"
      sx={{
        display: "flex",
        alignItems: "flex-end",
        marginLeft: "20px",
        marginBottom: "10px",
        color: "#7d6b56",
      }}
    >
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={[...emp, { name: "Add Employee" }]}
        getOptionLabel={(option) => option.name || option.name}
        value={selectedEmployee}
        onChange={(event, value) => {
          if (value && value.name === "Add Employee") {
            onOpenAddDialog("employee");
            setSelectedEmployee(null);
          } else {
            setSelectedEmployee(value);
            onEmployeeSelect(value); // Notify parent about the selected employee
          }
        }}
        renderInput={(params) => (
          <CustomTextField
            {...params}
            label="Employee Name"
            placeholder="Employee Name"
          />
        )}
        sx={{ minWidth: 200, maxWidth: 550, flexGrow: 1, color: "#7d6b56" }}
        ListboxProps={{
          sx: { maxHeight: 200, overflowY: "auto" },
        }}
      />

      <Autocomplete
        multiple
        id="tags-outlined-2"
        options={[...lunch, { title: "Add Food Item" }]}
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
        sx={{ minWidth: 200, maxWidth: 550, flexGrow: 1 }}
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
        sx={{ minWidth: 150, maxWidth: 200, flexGrow: 1 }}
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
