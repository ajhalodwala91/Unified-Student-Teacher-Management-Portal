import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

function StudentDashboard() {
  return (
    <Box padding="20px" overflow="auto">
      <Typography fontSize={25} fontWeight={700} colors="#11142d">
        Dashboard
      </Typography>
  
      <Stack
        mt="25px"
        width="100%"
        direction={{ xs: "column", lg: "row" }}
        gap={4}
        height={410}
      >
        {/* <StudentsChart /> */}
        <Box
          p={4}
          bgcolor="#fcfcfc"
          display="flex"
          flexDirection="column"
          borderRadius="15px"
        >
          <Typography fontSize="20px" fontWeight={700} color="#11142d">
            Academic Calendar
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
          </LocalizationProvider>
        </Box>
      </Stack>
    </Box>
  );
}

export default StudentDashboard;
