import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React, { useState } from "react"; // Import useState hook
import { styled } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { IconButton } from "@mui/material";

// Custom styled components
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

const Dropdown = ({ id, emp, lunch, handleDeleteClick, onOpenAddDialog }) => {
  const [selectedEmployee, setSelectedEmployee] = useState(null); // State to store selected employee

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
        options={[...emp, { name: "Add Employee" }]} // Directly using emp state from props
        getOptionLabel={(option) => option.name || option.name} // Adjust label for employee name
        value={selectedEmployee} // Bind value to the state
        onChange={(event, value) => {
          if (value && value.name === "Add Employee") {
            onOpenAddDialog("employee");
            setSelectedEmployee(null); // Reset the selected value
          } else {
            setSelectedEmployee(value); // Update state with selected value
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
      />

      <Autocomplete
        multiple
        id="tags-outlined-2"
        options={[...lunch, { title: "Add Food Item" }]} // Directly using lunch state from props
        getOptionLabel={(option) => option.title}
        filterSelectedOptions
        onChange={(event, value) => {
          if (
            value.length &&
            value[value.length - 1].title === "Add Food Item"
          ) {
            onOpenAddDialog("food");
          }
        }}
        renderInput={(params) => (
          <CustomTextField
            {...params}
            label="Food Item"
            placeholder="Food Item"
          />
        )}
        renderTags={(value, getTagProps) =>
          value
            .filter((option) => option.title !== "Add Food Item") // Exclude the "Add Food Item" option
            .map((option, index) => (
              <CustomChip
                label={option.title}
                {...getTagProps({ index })}
                key={index}
              />
            ))
        }
        sx={{ minWidth: 200, maxWidth: 550, flexGrow: 1 }}
      />

      <CustomTextField
        id="outlined-read-only-input"
        label="Cost"
        InputProps={{
          readOnly: true,
        }}
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
