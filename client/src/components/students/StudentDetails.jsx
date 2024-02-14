import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ExpSection from "./ExpSection";
import Divider from '@mui/material/Divider';

function StudentDetails() {
  return (
    <Box flex={1}>
      <Stack pb="30px">
        <Typography fontSize="48px" fontWeight={600} color="#107d31" lineHeight={1.2}>
          Caroline Stokes
        </Typography>
        <Typography fontSize="24px" color="#262626">
          Student - Class 8
        </Typography>
      </Stack>

      <Divider flexItem sx={{border: "1px solid #cccccc"}} />

      <ExpSection />
    </Box>
  );
}

export default StudentDetails;
