import { Box, Typography, Stack } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import { StudentsSeries, StudentsOptions } from "./chart.config";
import React from "react";

function StudentsChart() {
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
        Total Students
      </Typography>

      <ReactApexChart
        series={StudentsSeries}
        type="bar"
        height={300}
        options={StudentsOptions}
      />
    </Box>
  );
}

export default StudentsChart;
