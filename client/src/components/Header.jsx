import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Icons } from "../assets/Icons";

function Header() {
  let icons = <Icons />;
  icons = icons.type.header;
  return (
    <Box
      height={70}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      borderBottom="2px solid #cccccc"
      boxShadow="0px 0px 4px 0px rgba(0, 0, 0, 0.25)"
    >
      <Stack direction="row" gap="10px" flex={1}>
        {icons.searchIcon}
        <input
          style={{
            backgroundColor: "transparent",
            border: "none",
            outline: "none",
            flex: 1,
          }}
          type="text"
          placeholder="Search for students or classes"
        />
      </Stack>

      <Stack direction="row" alignItems="center" gap={2}>
        <img
          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
          alt="Profile"
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            height: "48px",
            width: "48px",
          }}
        />
        <Stack>
          <Typography fontSize="14px" fontWeight={700} color="#808191">
            Caroline Stokes
          </Typography>
          <Typography fontSize="14px" color="#11142d" fontWeight={700}>
            Administrator
          </Typography>
        </Stack>
        {icons.downArrowIcon}
      </Stack>
    </Box>
  );
}

export default Header;
