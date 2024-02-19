import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Icons } from "../../../assets/Icons";

function ExpCard({ key, years, position, name, address }) {
  return (
    <Stack key={key} gap={0.5}>
      <Typography
        bgcolor="#cccccc"
        borderRadius="10px"
        width="fit-content"
        px="10px"
        mb="10px"
        fontSize="12px"
      >
        {years}
      </Typography>

      <Typography color="#107d31" fontWeight={700}>
        {position}
      </Typography>

      <Typography fontWeight={700}>{name}</Typography>

      <Typography fontStyle="italic">{address}</Typography>
    </Stack>
  );
}

function ExpSection() {
  let icons = <Icons />;
  icons = icons.type.profile;

  let teacherExp = [
    {
      id: 0,
      years: "2005-2007",
      position: "Asst. Teacher",
      name: "Mount Carmel High School",
      address: "Vasai, Maharashtra",
    },
    {
      id: 1,
      years: "2008-2011",
      position: "Senior Teacher",
      name: "Don Bosco High School",
      address: "Boisar, Maharashtra",
      key: 1,
    },
    {
      id: 2,
      years: "2011-2013",
      position: "HOD",
      name: "Podar International School",
      address: "Jaipur, Rajasthan",
      key: 2,
    },
  ];

  return (
    <Box py="20px">
      <Stack direction="row" gap={1.5}>
        {icons.expIcon}
        <Typography color="#107d31" fontSize="24px" fontWeight={600} mb="25px">
          Past Experience
        </Typography>
      </Stack>

      <Box display="flex" flexWrap="wrap" gap={5}>
        {teacherExp.map((exp) => {
          return (
            <ExpCard
              key={exp.id}
              years={exp.years}
              position={exp.position}
              name={exp.name}
              address={exp.address}
            />
          );
        })}
      </Box>
    </Box>
  );
}

export default ExpSection;
