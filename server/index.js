const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const User = require("./Models/User");
const Notice = require("./Models/Notice");
const Student = require("./Models/Student");
const Teacher = require("./Models/Teacher");
var Binary = require("mongodb").Binary;

const app = express();
const bcrypt = require("bcrypt");
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/management-app");

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

// Route to get all teachers
app.get("/api/teachers", async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (error) {
    console.error("Error fetching teachers:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to get a specific teacher by ID
app.get("/api/teacher/:id", async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) {
      return res.status(404).json({ error: "Teacher not found" });
    }
    res.json(teacher);
  } catch (error) {
    console.error("Error finding teacher:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
});

// Route to get all notes
app.get("/api/notices", async (req, res) => {
  try {
    const notices = await Notice.find();
    console.log(notices.date);
    res.json(notices);
  } catch (error) {
    console.error("Error fetching notices:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to create a new note
app.post("/api/addNotice", async (req, res) => {
  try {
    const { title, description } = req.body;

    const newNotice = new Notice({
      title,
      description,
    });

    await newNotice.save();
    res
      .status(201)
      .json({ message: "Notice added successfully", notice: newNotice });
  } catch (error) {
    console.error("Error adding notice:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
});

// Route to update a note by ID
app.put("/api/notice/:id", async (req, res) => {
  try {
    const { title, content } = req.body;

    const updatedNotice = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      { new: true }
    );

    if (!updatedNotice) {
      return res.status(404).json({ error: "Note not found" });
    }

    res.json({ message: "Note updated successfully", notice: updatedNotice });
  } catch (error) {
    console.error("Error updating note:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
});

// Adding a student
app.post('/api/addStudent', async (req, res) => {
  try {
    const { name, course, year, email, mobileNum, address } = req.body;

    const newStudent = new Student({
      name,
      course,
      year,
      email,
      mobileNum,
      address,
    });

    await newStudent.save();

    res.status(201).json({ message: 'Student added successfully', student: newStudent });
  } catch (error) {
    console.error('Error adding student:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

// Start the server
app.listen(8080, () => {
  console.log(`Server is running on port ${PORT}`);
});
