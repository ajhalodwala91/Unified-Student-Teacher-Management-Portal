import React, { useState } from "react";
import { Button, TextField, Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddNotice = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddNotice = async () => {
    try {
      const currentDate = new Date();
      const noticeData = {
        title,
        description,
        date: new Date(), // Convert date to string (format: 'yyyy-MM-ddTHH:mm:ss.sssZ')
      };

      // Make a POST request to your server endpoint to add the notice
      const response = await axios.post(
        "http://localhost:8080/api/addNotice",
        noticeData
      );

      // Handle the response from the server
      if (response.status === 201) {
        console.log("Notice added successfully:", response.data.notice);
        // Pass the new notice to the parent component or perform any necessary actions
      } else {
        console.error("Failed to add notice:", response.data.error);
      }
    } catch (error) {
      console.error("Error adding notice:", error.message);
    }

    // Clear the form fields
    setTitle("");
    setDescription("");
    navigate("/notices");
  };

  return (
    <Box m={4} bgcolor="#fcfcfc" p={4} borderRadius="15px" mt="25px">
      <Typography fontSize={25} fontWeight={700} colors="#11142d">
        Add Notice
      </Typography>
      <Stack mt="25px" gap={2}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleAddNotice}>
          Add Notice
        </Button>
      </Stack>
    </Box>
  );
};

export default AddNotice;
