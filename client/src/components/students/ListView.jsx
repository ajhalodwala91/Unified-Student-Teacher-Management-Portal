import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const columns = [
  {
    field: "img",
    headerName: "",
    width: 60,
    renderCell: (params) => (
      <img
        src={params.row.img}
        alt="Student Photo"
        style={{
          width: "40px",
          height: "40px",
          objectFit: "cover",
          borderRadius: "50%",
        }}
      />
    ),
  },
  { field: "id", headerName: "ID", width: 120 },
  { field: "name", headerName: "Name", width: 150 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 60,
  },
  { field: "dob", headerName: "Date of Birth", width: 150 },
  { field: "mobileNum", headerName: "Mobile No.", width: 150 },
  { field: "email", headerName: "Email ID", width: 150 },
];

function ListView({students}) {
  return (
    <Box
      bgcolor="#fcfcfc"
      width="100%"
      p={4}
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <DataGrid
        rows={students.map((student) => ({
          ...student,
          id: student.id.toString(),
        }))}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
      />
    </Box>
  );
}

export default ListView;