import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import PieChart from "./PieChart";
import StudentsChart from "./StudentsChart";

function Dashboard() {
  return (
    <Box padding="20px" overflow="auto">
      <Typography fontSize={25} fontWeight={700} colors="#11142d">
        Dashboard
      </Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Students"
          value={684}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart
          title="Teachers"
          value={550}
          series={[60, 40]}
          colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart
          title="Departments"
          value={12}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart
          title="Subjects"
          value={18}
          series={[40, 65]}
          colors={["#475be8", "#e4e8ef"]}
        />
      </Box>

      <Stack
        mt="25px"
        width="100%"
        direction={{ xs: "column", lg: "row" }}
        gap={4}
        height={410}
      >
        <StudentsChart />
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

export default Dashboard;
