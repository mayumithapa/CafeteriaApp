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

  const handleAdd = () => {
    if (item.trim() !== "") {
      onAdd(item);  // Call the passed onAdd function to add the new item to the local state
      setItem(""); // Reset the input field after adding
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
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleAdd}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Add;
