import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/dashboard/Dashboard";
import { Stack } from "@mui/material";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllStudents from "./components/students/AllStudents";
import AllTeachers from "./components/teachers/AllTeachers";
import StudentProfile from "./components/students/StudentProfile";
import AllDepartments from "./components/departments/AllDepartments";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <Stack flex={1}>
          <Header />

          <Routes>
              <Route index element={<Dashboard />} />
              <Route path="students" element={<AllStudents />} />
              <Route path="teachers" element={<AllTeachers />} />
              <Route path="profile" element={<StudentProfile />} />
              <Route path="departments" element={<AllDepartments />} />
              <Route path="*" element={<Dashboard />} />
          </Routes>
        </Stack>
      </div>
    </BrowserRouter>
  );
}

export default App;
