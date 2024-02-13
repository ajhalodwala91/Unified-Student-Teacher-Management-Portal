import React from "react";
import { Box, Icon, Stack, Typography } from "@mui/material";
import { Icons } from "../assets/Icons";

function SidebarLink({ icon, name }) {
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      {icon}
      <Typography fontSize={18} fontWeight={700}>{name}</Typography>
    </Stack>
  );
}

function Sidebar() {
  const icons = <Icons />
  return (
    <Box
      height="100vh"
      width="300px"
      p={2}
      borderRight="2px solid #cccccc"
      boxShadow="0px 0px 4px 0px rgba(0, 0, 0, 0.25)"
      display="flex"
      flexDirection="column"
      gap={4}
    >
      <Stack direction="row" alignItems="center" gap={1.5}>
        <img
          src="https://img.freepik.com/free-vector/modern-business-logo-gradient-icon-design_53876-120504.jpg"
          alt="App Logo"
          height="60px"
          width="60px"
          style={{ objectFit: "cover", borderRadius: "15px" }}
        />
        <Typography fontSize={24} fontWeight={700}>
          StudZies
        </Typography>
      </Stack>

      <Stack gap={2}>
        <SidebarLink
          icon={icons.type.sidebar.homeIcon} name="Home"
        />
        <Typography>Students</Typography>
        <Typography>Teacher</Typography>
        <Typography>Department</Typography>
      </Stack>
    </Box>
  );
}

export default Sidebar;
