import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Select,
  MenuItem,
  TextareaAutosize,
} from "@mui/material";
import { Add } from "@mui/icons-material";

function Form() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNum, setMobileNum] = useState("");
  const [address, setAddress] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      course,
      year,
      email,
      mobileNum,
      address,
    };

    try {
      const response = await fetch("http://localhost:8080/api/addStudent");

      const responseData = await response.json();
      console.log("Success:", responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Box padding="20px" overflow="auto">
        <Typography fontSize={25} fontWeight={700} colors="#11142d">
          Add a Student
        </Typography>

        <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
          <form
            style={{
              marginTop: "20px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <FormControl>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Enter Student Name
              </FormHelperText>
              <TextField
                fullWidth
                required
                id="outlined-basic"
                color="info"
                variant="outlined"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>

            <Stack direction="row" gap={4}>
              <FormControl sx={{ flex: 1 }}>
                <FormHelperText
                  sx={{
                    fontWeight: 500,
                    margin: "10px 0",
                    fontSize: 16,
                    color: "#11142d",
                  }}
                >
                  Select Course
                </FormHelperText>
                <Select
                  variant="outlined"
                  color="info"
                  displayEmpty
                  required
                  inputProps={{ "aria-label": "Without Label" }}
                  defaultValue="FY Comp Diploma"
                  name="course"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                >
                  <MenuItem value="computer">Computer Engineering</MenuItem>
                  <MenuItem value="electrical">Electrical Engineering</MenuItem>
                  <MenuItem value="mechanical">Mechanical Engineering</MenuItem>
                  <MenuItem value="civil">Civil Engineering</MenuItem>
                  <MenuItem value="chemical">Chemical Engineering</MenuItem>
                  <MenuItem value="electronics">
                    Electronics Engineering
                  </MenuItem>
                  <MenuItem value="automobile">Autombile Engineering</MenuItem>
                </Select>
              </FormControl>

              <FormControl>
                <FormHelperText
                  sx={{
                    fontWeight: 500,
                    margin: "10px",
                    fontSize: 16,
                    color: "#11142d",
                  }}
                >
                  Enter Year
                </FormHelperText>
                <TextField
                  fullWidth
                  required
                  id="outlined-basic"
                  type="number"
                  color="info"
                  variant="outlined"
                  name="year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </FormControl>
            </Stack>

            <Stack direction="row" gap={4}>
              <FormControl sx={{ flex: 1 }}>
                <FormHelperText
                  sx={{
                    fontWeight: 500,
                    margin: "10px",
                    fontSize: 16,
                    color: "#11142d",
                  }}
                >
                  Enter Email ID
                </FormHelperText>
                <TextField
                  fullWidth
                  required
                  id="outlined-basic"
                  type="text"
                  color="info"
                  variant="outlined"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl sx={{ width: "40%" }}>
                <FormHelperText
                  sx={{
                    fontWeight: 500,
                    margin: "10px",
                    fontSize: 16,
                    color: "#11142d",
                  }}
                >
                  Enter Mobile Num
                </FormHelperText>
                <TextField
                  fullWidth
                  required
                  id="outlined-basic"
                  type="number"
                  color="info"
                  variant="outlined"
                  name="mobileNum"
                  value={mobileNum}
                  onChange={(e) => setMobileNum(e.target.value)}
                />
              </FormControl>
            </Stack>

            <FormControl>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Enter Location
              </FormHelperText>
              <TextField
                fullWidth
                required
                id="outlined-basic"
                color="info"
                variant="outlined"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </FormControl>

            <Stack direction="column" gap={1} justifyContent="center" mb={2}>
              <Stack direction="row" gap={2}>
                <Typography
                  color="#11142d"
                  fontSize={16}
                  fontWeight={500}
                  my="10px"
                >
                  Student Photo
                </Typography>

                <Button
                  component="label"
                  sx={{
                    width: "fit-content",
                    color: "#2ed480",
                    textTransform: "capitalize",
                    fontSize: 16,
                  }}
                >
                  Upload *
                  <input hidden accept="image/*" type="file" />
                </Button>
              </Stack>
            </Stack>

            <Button
            type="submit"
            onClick={handleSubmit}
              sx={{
                padding: "10px 15px",
                width: "fit-content",
                minWidth: 130,
                bgcolor: "#475be8",
                color: "#fcfcfc",
                fontSize: 16,
                fontWeight: 600,
                gap: "10px",
                textTransform: "capitalize",
                "&:hover": {
                  opacity: 0.9,
                  bgcolor: "#475be8",
                },
              }}
            >
              <Add />
              Add Student
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default Form;
