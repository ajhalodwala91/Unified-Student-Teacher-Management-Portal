import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";

function DepartmentCard({ img, value }) {
  const navigate = useNavigate();
  return (
      <Box bgcolor="#fff" borderRadius="15px" p={4}>
        <img src={img} alt={value} height="200px" />
        <Typography fontSize="18px" fontWeight={600}>
          {value}
        </Typography>
      </Box>
  );
}

function AllDepartments() {
  return (
    <Box padding="20px" sx={{ overflow: "auto" }}>
      <Typography fontSize={25} fontWeight={700} colors="#11142d">
        All Departments
      </Typography>

      <Box width="100%" p="20px" display="flex" gap={4} flexWrap="wrap">
        <DepartmentCard
          img="https://img.freepik.com/premium-vector/microchip-manufacturing-illustration-concept-white-background_701961-4226.jpg"
          value="Computer Engineering"
        />

        <DepartmentCard
          img="https://img.freepik.com/premium-vector/lighting-electricity-energy-maintenance-service-technician-electrical-work-illustration_2175-8398.jpg"
          value="Electrical Engineering"
        />

        <DepartmentCard
          img="https://static.vecteezy.com/system/resources/previews/014/618/938/non_2x/mechanical-engineer-illustration-concept-a-flat-illustration-isolated-on-white-background-vector.jpg"
          value="Mechanical Engineering"
        />

        <DepartmentCard
          img="https://img.freepik.com/premium-vector/civil-engineer-illustration-concept-white-background_701961-121.jpg"
          value="Civil Engineering"
        />

        <DepartmentCard
          img="https://img.freepik.com/premium-vector/chemical-engineer-illustration-concept_701961-1945.jpg"
          value="Chemical Engineering"
        />

        <DepartmentCard
          img="https://img.freepik.com/premium-vector/electronic-manufacturing-components-circuit-engineering-design-coordinate-symbols-concept-isometric_255805-387.jpg"
          value="Electronics Engineering"
        />

        <DepartmentCard
          img="https://img.freepik.com/premium-vector/characters-prototyping-car-concept-engineer-designer-perform-automobile-prototype-project-machinery-industrial-projecting-industry-customers-buying-new-auto-cartoon-people-vector-illustration_87771-12255.jpg"
          value="Automobile Engineering"
        />
      </Box>
    </Box>
  );
}

export default AllDepartments;
