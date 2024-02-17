import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import {useNavigate} from "react-router-dom";

function CardField({ name, value }) {
  return (
    <Stack direction="row" flexWrap="wrap" overflow="hidden">
      <Typography fontSize="12px" fontWeight={700}>
        {name}&nbsp;
      </Typography>
      <Typography fontSize="12px">{value}</Typography>
    </Stack>
  );
}

function StudentCard({ name, year, img, id, dob, mobileNum, email }) {
  const navigate = useNavigate();
  return (
    <Stack
      borderRadius="15px"
      p="20px"
      gap={2}
      overflow="hidden"
      bgcolor="#fcfcfc"
      width="250px"
      onClick={() => navigate("/profile")}
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <img
          src={img}
          alt="Student Image"
          
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            marginLeft: "5px",
            height:"100px",
            width:"100px"
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
        <CardField name="Student ID:" value={id} />
        <CardField name="DOB:" value={dob} />
        <CardField name="Mobile No.:" value={mobileNum} />
        <CardField name="Email ID:" value={email} />
      </Stack>
    </Stack>
  );
}

export default StudentCard;
