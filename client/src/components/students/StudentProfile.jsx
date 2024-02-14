import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ProfileCard from "./ProfileCard";

function StudentProfile() {
  return (
    <Box overflow="auto" p="40px" display="flex" alignItems="center" height="100%">
      <ProfileCard />
    </Box>
  );
}

export default StudentProfile;
