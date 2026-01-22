const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));

const DATA_FILE = "./data.json";

//READ - GET DATA
app.get("/api/tasks", (req,res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  res.json(data);
});

//CREATE - POST DATA
app.post("/api/tasks", (req,res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  data.push(req.body);
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  res.json({message : "Task added successfully"});  
});


//DELETE - DELETE DATA
app.delete("/api/tasks/:index", (req,res) =>{
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  data.splice(req.params.index,1);
  fs.writeFileSync(DATA_FILE, JSON.stringify(data));
  res.json({message : "Task deleted successfully"});    

});


//UPDATE  - PUT DATA
app.put("/api/tasks/:index", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  data[req.params.index] = req.body;
  fs.writeFileSync(DATA_FILE, JSON.stringify(data));
  res.json({ message: "Task updated" });
});


//ROOT ROUTE
app.get("/", (req,res) => {
  res.sendFile(path.join(__dirname, "public","index.html"));
  res.send("BACKEND WORKING!");
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
