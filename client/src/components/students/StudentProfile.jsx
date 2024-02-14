import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ProfileCard from "./ProfileCard";
import StudentDetails from "./StudentDetails";

function StudentProfile() {
  return (
    <Box
      overflow="auto"
      p="40px"
      display="flex"
      alignItems="center"
      height="100%"
      gap={6}
    >
      <ProfileCard />
      <StudentDetails />
    </Box>
  );
}

export default StudentProfile;
