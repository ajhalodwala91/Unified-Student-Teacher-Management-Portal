const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const User = require("./Models/User");
const Notices = require("./Models/Notices");
const Student = require("./Models/Student");
const Note = require("./Models/Notes");
var Binary = require("mongodb").Binary;

const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/management-app");

let user = new User({
  Email: "example@email.com",
  Password: "$2b$10$/210H14qZKNJvzOs0qemHe2Sa5.V9.mX8QolWPsnvRvgKgcjUHwTK",
  Role: "Admin",
  Name: "Example",
});

// user.save();

let userHash;

app.post("/Login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ Email: email });

  if (!user) {
    return res
      .status(400)
      .json({ message: "Invalid Email! User does not exists" });
  }

  bcrypt
    .hash(user.Password, 10)
    .then((hash) => {
      userHash = hash;
    })
    .catch((err) => console.error(err.message));

  bcrypt
    .compare(password, userHash)
    .then((res) => {
      return res.status(400).json({ message: "Invalid Password" }); // return true
    })
    .catch((err) => console.error(err.message));

  res.json({ message: "Login Successfull", user });
});

app.get("/getUser", async (req, res) => {
  const { email } = req.query;
  try {
    const user = await User.findOne({ Email: email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
    console.log("Fetched Successfully");
  } catch (error) {
    console.error("Error retrieving user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Middleware for parsing JSON in request body
app.use(express.json());

// Route to get all students
app.get("/api/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to get a specific student by ID
app.get("/api/student/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    console.error("Error finding student:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
});

// Start the server
app.listen(8080, () => {
  console.log(`Server is running on port ${PORT}`);
});
