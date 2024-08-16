import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Add = ({ open, onClose, type, onAdd }) => {
  const [item, setItem] = useState("");
  const [cost, setCost] = useState(""); // State to hold the cost of the food item

  const handleAdd = () => {
    if (item.trim() !== "") {
      if (type === "food" && cost.trim() !== "") {
        // Add both item and cost for food items
        onAdd({ title: item, cost });
      } else if (type === "employee") {
        // Add only the item for employees
        onAdd(item);
      }
      setItem(""); // Reset the input field after adding
      setCost(""); // Reset the cost field after adding
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        {`Add New ${type === "employee" ? "Employee" : "Food Item"}`}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {`Please enter the name of the new ${type === "employee" ? "employee" : "food item"}.`}
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label={type === "employee" ? "Employee Name" : "Food Item"}
          fullWidth
          variant="outlined"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        {type === "food" && (
          <TextField
            margin="dense"
            label="Cost"
            fullWidth
            variant="outlined"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            type="number" // Set input type to number to ensure only numeric values
            inputProps={{ min: 0 }} // Optional: restrict minimum value to 0, preventing negative numbers
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleAdd}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Add;
