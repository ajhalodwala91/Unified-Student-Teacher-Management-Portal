import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Icons } from "../assets/Icons";
import { IoSchoolOutline, IoSettingsOutline } from "react-icons/io5";
import { PiStudent } from "react-icons/pi";
import { VscGroupByRefType } from "react-icons/vsc";

function SidebarLink({ icon, name }) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={1}
      p={1}
      borderRadius="10px"
      sx={{
        "&:hover": {
          backgroundColor: "#cccccc",
        },
      }}
    >
      <Box width={35}>{icon}</Box>
      <Typography fontWeight={600}>{name}</Typography>
    </Stack>
  );
}

function Sidebar() {
  const icons = <Icons />;
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
      <Stack direction="row" alignItems="center" gap={1.5} >
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
        <SidebarLink icon={icons.type.sidebar.homeIcon} name="Home" />
        <SidebarLink icon={<PiStudent fontSize={30} />} name="Students" />
        <SidebarLink icon={<IoSchoolOutline fontSize={30} />} name="Teachers" />
        <SidebarLink
          icon={<VscGroupByRefType fontSize={30} />}
          name="Departments"
        />
        <SidebarLink
          icon={icons.type.sidebar.announcementIcon}
          name="Announcements"
        />
        <SidebarLink
          icon={<IoSettingsOutline fontSize={28} />}
          name="Settings"
        />
      </Stack>
    </Box>
  );
}

export default Sidebar;
