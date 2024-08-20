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
  const [cost, setCost] = useState(null);

  const handleAdd = () => {
    if (item.trim() !== "") {
      if (type === "food" && cost > 0) {
        onAdd({ title: item, cost });
      } else if (type === "employee") {
        onAdd(item);
      }
      setItem("");
      setCost(null); 
      console.log(`Cost Value: ${cost}, Type: ${typeof cost}`)
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
            onChange={(e) => setCost(Number(e.target.value))}
            type="number"
            inputProps={{ min: 1 }} 
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