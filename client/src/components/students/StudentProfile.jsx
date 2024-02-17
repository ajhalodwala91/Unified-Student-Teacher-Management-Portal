import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ProfileCard from "./ProfileCard";
import StudentDetails from "./StudentDetails";

function StudentProfile() {
  return (
    <Box
      p="40px"
      display="flex"
      alignItems="center"
      height="90vh" // set a specific height, adjust as needed
      gap={6}
      overflow="hidden"
    >
      <ProfileCard />
      <StudentDetails />
    </Box>
  );
}

export default StudentProfile;
