import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/dashboard/Dashboard";
import { Stack } from "@mui/material";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllStudents from "./components/students/AllStudents";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <Stack flex={1}>
          <Header />

          <Routes>
            <Route path="/" element={<AllStudents />}>
              <Route index element={<AllStudents />} />
              <Route
                path="students/AllStudents"
                element={<AllStudents />}
              />
              {/* <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Routes>
        </Stack>
      </div>
    </BrowserRouter>
  );
}

export default App;
