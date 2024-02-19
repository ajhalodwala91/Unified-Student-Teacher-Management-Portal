import { Box, Typography, Stack } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import { TestMarksSeries, TestMarksOptions } from "./chart.config";
import React from "react";

function TestMarksChart() {
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
        Test Marks
      </Typography>

      <ReactApexChart
        series={TestMarksSeries}
        type="bar"
        height={300}
        options={TestMarksOptions}
      />
    </Box>
  );
}

export default TestMarksChart;
