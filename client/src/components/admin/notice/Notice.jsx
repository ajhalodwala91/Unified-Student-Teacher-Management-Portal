import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { format } from "date-fns";
import { Box, Stack, Typography } from "@mui/material";

const columns = [
  { field: "title", headerName: "Title", width: 200 },
  { field: "description", headerName: "Description", width: 500 },
  {
    field: "date",
    headerName: "Date",
    width: 170,
    date: new Date().toISOString().split("T")[0],
  },
];

function Notice() {
  let [notices, setNotices] = useState([]);

  useEffect(() => {
    // Fetch notices from the server when the component mounts
    const fetchNotices = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/notices");
        console.log(notices);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setNotices(data);
      } catch (error) {
        console.error("Error fetching notices:", error.message);
      }
    };

    fetchNotices();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  notices = notices.map((notice) => ({
    ...notice,
    id: notice._id ? notice._id.toString() : Math.random().toString(),
  }));

  return (
    <Box sx={{ height: "400px" }}>
      <DataGrid
        rows={notices}
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

export default Notice;
