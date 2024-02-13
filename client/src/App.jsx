import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/dashboard/Dashboard";
import { Stack } from "@mui/material";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Sidebar />
        <Stack flex={1}>
          <Header />

          <Routes>
            <Route index element={<Dashboard />} />
            {/* <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} /> */}
          </Routes>
        </Stack>
      </BrowserRouter>
    </div>
  );
}

export default App;
