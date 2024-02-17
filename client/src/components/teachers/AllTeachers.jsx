import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import TeacherCard from "./TeacherCard";
import CustomButton from "../../CustomButton";
import ListView from "./ListView";
import { teachersList } from "./teachers.config";

function Allteachers() {
  const [teachers, setteachers] = useState([...teachersList]);
  const [filterName, setFilterName] = useState("");
  const [filterID, setFilterID] = useState("");
  const [filterPos, setFilterPos] = useState("");
  const [viewType, setViewType] = useState("Card");

  const filteredteachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(filterName.toLowerCase()) &&
      teacher.id.toString().includes(filterID) &&
      teacher.position.toLowerCase().includes(filterPos.toLowerCase())
  );

  return (
    <Box padding="20px" sx={{ overflow: "auto" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontSize={25} fontWeight={700} colors="#11142d">
          All teachers
        </Typography>

        <CustomButton
          title="Add teacher"
          handleClick={() => {}}
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
                background: "transparent"
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
              placeholder="Filter by Position"
              value={filterPos}
              onChange={(e) => setFilterPos(e.target.value)}
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
          filteredteachers.map((teacher) => (
            <TeacherCard
              key={teacher.id}
              name={teacher.name}
              pos={teacher.pos}
              img={teacher.img}
              id={teacher.id}
              dob={teacher.dob}
              mobileNum={teacher.mobileNum}
              email={teacher.email}
            />
          ))
        ) : (
          <ListView teachers={filteredteachers} />
        )}
      </Box>
    </Box>
  );
}

export default Allteachers;
