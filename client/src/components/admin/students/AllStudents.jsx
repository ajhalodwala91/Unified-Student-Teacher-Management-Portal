import React, { useState, useEffect } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import StudentCard from "./StudentCard";
import CustomButton from "../../../CustomButton";
import ListView from "./ListView";
import { studentsList } from "./students.config";
import { useNavigate } from "react-router-dom";

function AllStudents() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterID, setFilterID] = useState("");
  const [filterClass, setFilterClass] = useState("");
  const [viewType, setViewType] = useState("Card");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/students");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error.message);
      }
    };

    fetchStudents();
  }, []);
  
  // const filteredStudents = students.filter(
  //   (student) =>
  //     student.name.toLowerCase().includes(filterName.toLowerCase()) &&
  //     student.studID.toString().includes(filterID) &&
  //     student.year.toLowerCase().includes(filterClass.toLowerCase())
  // );

  return (
    <Box padding="20px" sx={{ overflow: "auto" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontSize={25} fontWeight={700} colors="#11142d">
          All Students
        </Typography>

        <CustomButton
          title="Add Student"
          handleClick={() => {navigate("/addStudent")}}
          backgroundColor="#475be8"
          color="#fcfcfc"
          icon={<Add />}
        />
      </Stack>

      <Box p="20px">
        <Box
          p="20px"
          bgcolor="#fcfcfc"
          display="flex"
          borderRadius="15px"
          gap={4}
        >
          <Stack direction="row" gap={2} alignItems="center">
            <Typography>Name</Typography>
            <input
              type="text"
              placeholder="Filter by name"
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
              style={{
                padding: "5px",
                borderRadius: "5px",
                border: "1px solid #000",
              }}
            />
          </Stack>

          <Stack direction="row" gap={2} alignItems="center">
            <Typography>ID</Typography>
            <input
              type="text"
              placeholder="Filter by ID"
              value={filterID}
              onChange={(e) => setFilterID(e.target.value)}
              style={{
                padding: "5px",
                borderRadius: "5px",
                border: "1px solid #000",
              }}
            />
          </Stack>

          <Stack direction="row" gap={2} alignItems="center">
            <Typography>Class</Typography>
            <input
              type="text"
              placeholder="Filter by Class"
              value={filterClass}
              onChange={(e) => setFilterClass(e.target.value)}
              style={{
                padding: "5px",
                borderRadius: "5px",
                border: "1px solid #000",
              }}
            />
          </Stack>

          <Stack direction="row" gap={2} alignItems="center">
            <label htmlFor="viewType">View Type:</label>
            <select
              id="viewType"
              value={viewType}
              onChange={(e) => setViewType(e.target.value)}
              style={{ borderRadius: "5px", height: "30px" }}
            >
              <option value="Card">Card</option>
              <option value="List">List</option>
            </select>
          </Stack>
        </Box>
      </Box>

      <Box width="100%" p="20px" display="flex" gap={4} flexWrap="wrap">
        {viewType === "Card" ? (
          students.map((student) => (
            <StudentCard
              key={student.id}
              name={student.name}
              year={student.year}
              img={student.img}
              id={student.id}
              dob={student.dob}
              mobileNum={student.mobileNum}
              email={student.email}
            />
          ))
        ) : (
          <ListView students={students} />
        )}
      </Box>
    </Box>
  );
}

export default AllStudents;
