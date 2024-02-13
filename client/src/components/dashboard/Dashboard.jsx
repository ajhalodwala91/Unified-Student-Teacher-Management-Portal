import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import PieChart from "./PieChart";
import TotalRevenue from "./TotalRevenue";
import PropertyReferrals from "./PropertyReferrals";

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
      >
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
    </Box>
  );
}

export default Dashboard;
