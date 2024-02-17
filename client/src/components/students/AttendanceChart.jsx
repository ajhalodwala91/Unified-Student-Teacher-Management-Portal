import { Box, Typography, Stack } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import { AttendanceSeries, AttendanceOptions } from "./chart.config";
import React from "react";

function AttendanceChart() {
  return (
    <Box
      id="chart"
      p={4}
      flex={1}
      bgcolor="#fcfcfc"
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize="18px" fontWeight={600} color="#11142d">
        Attendance
      </Typography>

      <ReactApexChart
        series={AttendanceSeries}
        type="line"
        height={300}
        options={AttendanceOptions}
      />
    </Box>
  );
}

export default AttendanceChart;
