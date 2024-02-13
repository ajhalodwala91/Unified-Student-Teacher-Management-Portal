import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import StudentCard from "./StudentCard";
import CustomButton from "../../CustomButton";

function AllStudents() {
  return (
    <Box padding="20px" sx={{overflow: "auto"}}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontSize={25} fontWeight={700} colors="#11142d">
          All Students
        </Typography>

        <CustomButton
          title="Add Student"
          handleClick={() => {}}
          backgroundColor="#475be8"
          color="#fcfcfc"
          icon={<Add />}
        />
      </Stack>

      <Box width="100%" p="20px" display="flex" gap={4} flexWrap="wrap">
        <StudentCard
          name="Ching Chong Lee"
          year="TY Comp Diploma"
          img="https://menlocoa.org/wp-content/uploads/2012/10/Tinyen-RSp.jpg"
        />
        <StudentCard
          name="Rachel Green"
          year="TY Comp Diploma"
          img="https://home.adelphi.edu/~ji21632/rachel.png"
        />
        <StudentCard
          name="Monica Geller"
          year="TY Comp Diploma"
          img="https://www.sosyncd.com/wp-content/uploads/2022/03/19.png"
        />
        <StudentCard
          name="Chandler Bing"
          year="TY Comp Diploma"
          img="https://static.wixstatic.com/media/01d533_b05a1bda7a1849338b0206fffa52a81e~mv2.webp"
        />
        <StudentCard
          name="Joey Tribbiani"
          year="TY Comp Diploma"
          img="https://upload.wikimedia.org/wikipedia/en/d/da/Matt_LeBlanc_as_Joey_Tribbiani.jpg"
        />
        <StudentCard
          name="Phoebe Buffay"
          year="TY Comp Diploma"
          img="https://upload.wikimedia.org/wikipedia/en/f/f6/Friendsphoebe.jpg"
        />
        <StudentCard
          name="Ross Geller"
          year="TY Comp Diploma"
          img="https://assets2.cbsnewsstatic.com/hub/i/r/2014/09/17/5bb25a75-a598-4bd1-82da-57d32eed3048/thumbnail/640x833/5d3fbd0647d782aff070cfe852e8e96f/schwimmer-ross.jpg?v=82ad4e2325e43ceb15c3334435d40e92"
        />
      </Box>
    </Box>
  );
}

export default AllStudents;
