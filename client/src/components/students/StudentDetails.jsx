import { Box, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import ExpSection from "./ExpSection";
import TestMarksChart from "./TestMarksChart";
import AttendanceChart from "./AttendanceChart";
import Overview from "./Overview";

function StudentDetails() {
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/student/65cf6fc84f9e66f6a5567f24");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setStudentData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box
      flex={1}
      pr="30px"
      height="100%"
      sx={{
        overflow: "auto",
        "&::-webkit-scrollbar": { width: "8px" },
        "&::-webkit-scrollbar-track": {
          bgcolor: "rgba(204, 204, 204, 0.25)",
          borderRadius: "20px",
        },
        "::-webkit-scrollbar-thumb": {
          bgcolor: "#cccccc",
          borderRadius: "20px",
        },
      }}
    >
      <Stack pb="30px">
        <Typography
          fontSize="48px"
          fontWeight={600}
          color="#107d31"
          lineHeight={1.3}
        >
          {studentData ? studentData.name : "Unavailable"}
        </Typography>
        <Typography fontSize="24px" color="#262626">
          {studentData
            ? studentData.academics.class + " - " + studentData.studID
            : "Unavailable"}
        </Typography>
      </Stack>

      <Box display="flex" flexDirection="column" gap="25px">
        <Stack direction="row" gap="25px">
          <TestMarksChart />
          <Overview />
        </Stack>
        <AttendanceChart />
      </Box>
    </Box>
  );
}

export default StudentDetails;
