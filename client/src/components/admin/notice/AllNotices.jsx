import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Notice from "./Notice";
import { Add } from "@mui/icons-material";
import CustomButton from "../../../CustomButton";
import { useNavigate } from "react-router-dom";

function AllNotices() {
  const navigate = useNavigate();
  return (
    <Box padding="20px" sx={{ overflow: "auto" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontSize={25} fontWeight={700} colors="#11142d">
          All Notices
        </Typography>

        <CustomButton
          title="Add Notice"
          handleClick={() => {navigate('/addNotice')}}
          backgroundColor="#475be8"
          color="#fcfcfc"
          icon={<Add />}
        />
      </Stack>

      <Box
        bgcolor="#fcfcfc"
        width="100%"
        p={4}
        display="flex"
        flexDirection="column"
        borderRadius="15px"
        mt="25px"
      >
        <Notice />
      </Box>
    </Box>
  );
}

export default AllNotices;
