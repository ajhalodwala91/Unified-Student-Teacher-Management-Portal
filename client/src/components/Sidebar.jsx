import React from "react";
import "../App.css";
import { Box, Stack, Typography } from "@mui/material";
import { Icons } from "../assets/Icons";
import { IoSchoolOutline, IoSettingsOutline } from "react-icons/io5";
import { PiStudent, PiTable } from "react-icons/pi";
import { VscGroupByRefType } from "react-icons/vsc";
import { Link, useLocation } from "react-router-dom";

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
  let icons = <Icons />;
  icons = icons.type.sidebar;

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <Box
      height="100vh"
      width="250px"
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

      <Stack gap={2.5}>
        <Link
          to="/home"
          style={{
            textDecoration: "none",
            color: "black",
          }}
          className={splitLocation[1] === "home" ? "active" : ""}
        >
          <SidebarLink icon={icons.homeIcon} name="Home" />
        </Link>

        <Link
          to="/students"
          style={{ textDecoration: "none", color: "black" }}
          className={splitLocation[1] === "students" ? "active" : ""}
        >
          <SidebarLink icon={<PiStudent fontSize={30} />} name="Students" />
        </Link>

        <Link
          to="/teachers"
          style={{ textDecoration: "none", color: "black" }}
          className={splitLocation[1] === "teachers" ? "active" : ""}
        >
          <SidebarLink
            icon={<IoSchoolOutline fontSize={30} />}
            name="Teachers"
          />
        </Link>

        <Link
          to="/departments"
          style={{ textDecoration: "none", color: "black" }}
          className={splitLocation[1] === "departments" ? "active" : ""}
        >
          <SidebarLink
            icon={<VscGroupByRefType fontSize={30} />}
            name="Departments"
          />
        </Link>

        <Link
          to="/notices"
          style={{ textDecoration: "none", color: "black" }}
          className={splitLocation[1] === "notices" ? "active" : ""}
        >
          <SidebarLink icon={icons.announcementIcon} name="Announcements" />
        </Link>
      </Stack>
    </Box>
  );
}

export default Sidebar;
