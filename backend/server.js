const express = require("express");
const cors = require("cors");
const notes = require("./data/notes.js");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const userRoutes = require("./routes/userRoutes.js");
const { notFound, errorHandler } = require("./middlewares/errorMiddlewares.js");

const app = express();
dotenv.config();
connectDB();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);
// app.get("/api/notes/:id", (req, res) => {
//   const note = notes.find((item) => item._id === req.params.id);
//   res.json(note);
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});
