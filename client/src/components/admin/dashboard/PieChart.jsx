import { Box, Typography, Stack } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import React from "react";

function PieChart({ title, value, series, colors }) {
  return (
    <Box
      id="chart"
      bgcolor="#fcfcfc"
      flex={1}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      pl={3.5}
      py={2}
      gap={2}
      borderRadius="15px"
      minHeight="110px"
      width="fit-content"
    >
      <Stack direction="column">
        <Typography fontSize={14} color="#808191">
          {title}
        </Typography>
        <Typography fontSize={24} fontWeight={700} color="#11142d" mt={1}>
          {value}
        </Typography>
      </Stack>

      <ReactApexChart
        options={{
          chart: { type: "donut" },
          colors,
          legend: { show: false },
          dataLabels: { enabled: false },
        }}
        series={series}
        type="donut"
        width="120px"
      />
    </Box>
  );
}

export default PieChart;
