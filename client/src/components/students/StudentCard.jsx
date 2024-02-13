import React from "react";
import { Box, Stack, Typography } from "@mui/material";

function CardField({ name, value }) {
  return (
    <Stack direction="row" flexWrap="wrap">
      <Typography fontSize="12px" fontWeight={700}>
        {name}&nbsp;
      </Typography>
      <Typography fontSize="12px">{value}</Typography>
    </Stack>
  );
}

function StudentCard({ name, year, img }) {
  return (
    <Stack
      borderRadius="15px"
      p="30px 20px"
      gap={2}
      overflow="hidden"
      bgcolor="#fcfcfc"
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <img
          src={img}
          alt="Student Image"
          height="100px"
          width="100px"
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            marginLeft: "5px",
          }}
        />
      </Box>
      <Stack gap={0.5} alignItems="center">
        <Typography fontSize="18px" fontWeight={600}>
          {name}
        </Typography>
        <Typography fontSize="14px" fontWeight={500}>
          {year}
        </Typography>
      </Stack>

      <Stack gap={0.5}>
        <CardField name="Student ID:" value="2116350069" />
        <CardField name="DOB:" value="01/01/2000" />
        <CardField name="Mobile No.:" value="98765 43210" />
        <CardField name="Email ID:" value="chingchonglee@gmail.com" />
      </Stack>
    </Stack>
  );
}

export default StudentCard;
