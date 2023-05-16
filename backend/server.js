const express = require("express");
const cors = require("cors");
const notes = require("./data/notes.js");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");

const app = express();
dotenv.config();
connectDB();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});
app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((item) => item._id === req.params.id);
  res.json(note);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on: https://localhost:${PORT}`);
});
