import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/admin/dashboard/Dashboard";
import { Stack } from "@mui/material";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllStudents from "./components/admin/students/AllStudents";
import AllTeachers from "./components/admin/teachers/AllTeachers";
import StudentProfile from "./components/admin/students/StudentProfile";
import AllDepartments from "./components/admin/departments/AllDepartments";
import Login from "./components/admin/login/LoginPage";
import AllNotices from "./components/admin/notice/AllNotices";
import AddNotice from "./components/admin/notice/AddNotice";
import AddStudent from "./components/admin/students/AddStudent";
import TeacherProfile from "./components/admin/teachers/TeacherProfile";
import StudentDashboard from "./components/student/dashboard/StudentDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/*"
          element={
            <div className="app">
              <Sidebar />
              <Stack flex={1}>
                <Header />
                <Routes>
                  <Route index path="home" element={<Dashboard />} />
                  <Route path="studentDashboard" element={<StudentDashboard />} />
                  <Route path="students" element={<AllStudents />} />
                  <Route path="teachers" element={<AllTeachers />} />
                  <Route path="departments" element={<AllDepartments />} />
                  <Route path="notices" element={<AllNotices />} />
                  <Route path="student/profile" element={<StudentProfile />} />
                  <Route path="teacher/profile" element={<TeacherProfile />} />
                  <Route path="addNotice" element={<AddNotice  />} />
                  <Route path="addStudent" element={<AddStudent  />} />
                  <Route path="*" element={<Dashboard />} />
                </Routes>
              </Stack>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
