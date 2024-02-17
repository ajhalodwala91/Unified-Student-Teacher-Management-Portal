import { Box, Typography, Stack } from "@mui/material";
import { StudentOverview } from "./chart.config";
import React from "react";

function ProgressBar({ title, percentage, color }) {
  return (
    <Box width="100%">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography fontSize={16} fontWeight={500} color="#11142d">
          {title}
        </Typography>
        <Typography fontSize={16} fontWeight={500} color="#11142d">
          {percentage}%
        </Typography>
      </Stack>

      <Box
        mt={2}
        position="relative"
        width="100%"
        height="8px"
        borderRadius={1}
        bgcolor="#e4e8ef"
      >
        <Box
          width={percentage + "%"}
          bgcolor={color}
          position="absolute"
          height="100%"
          borderRadius={1}
        />
      </Box>
    </Box>
  );
}

function PropertyReferrals() {
  return (
    <Box
      id="chart"
      p={4}
      width="40%"
      bgcolor="#fcfcfc"
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize="18px" fontWeight={600} color="#11142d">
        Overview
      </Typography>

      <Stack my="20px" direction="column" gap={4}>
        {StudentOverview.map((bar) => (
          <ProgressBar key={bar.title} {...bar} />
        ))}
      </Stack>
    </Box>
  );
}

export default PropertyReferrals;
