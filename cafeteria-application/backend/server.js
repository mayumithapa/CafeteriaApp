import express from "express";
import fs from "fs";
import cors from "cors";
import bodyParser from "body-parser";

// Initialize express
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Read data from JSON files
const readData = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) reject(err);
      else resolve(JSON.parse(data));
    });
  });
};

// Write data to JSON files
const writeData = (filePath, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8", (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
};

// Endpoints
app.get("/api/employees", async (req, res) => {
  try {
    const employees = await readData("./employees.json");
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: "Failed to load employees data." });
  }
});

app.get("/api/foods", async (req, res) => {
  try {
    const foods = await readData("./foods.json");
    res.json(foods);
  } catch (err) {
    res.status(500).json({ error: "Failed to load foods data." });
  }
});

app.post("/api/employees", async (req, res) => {
  try {
    const employees = await readData("./employees.json");
    const newEmployee = { id: employees.length + 1, name: req.body.name };
    employees.push(newEmployee);
    await writeData("./employees.json", employees);
    res.json({ message: "Employee added successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save employee." });
  }
});

app.post("/api/foods", async (req, res) => {
  try {
    const foods = await readData("./foods.json");
    const newFood = { id: foods.length + 1, title: req.body.title };
    foods.push(newFood);
    await writeData("./foods.json", foods);
    res.json({ message: "Food item added successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save food item." });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
