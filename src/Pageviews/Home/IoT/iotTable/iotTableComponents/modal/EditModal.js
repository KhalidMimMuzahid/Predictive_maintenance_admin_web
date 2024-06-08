import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const EditModal = ({ editOpen, setEditOpen, props }) => {
  const handleChange = (e) => {};
  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={editOpen}
    >
      <Container
        sx={{
          width: "30%",
          background: "white",
          borderRadius: "20px",
          padding: "24px",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#24459C",
              textAlign: "center",
            }}
          >
            Edit IoT Sensor
          </Typography>
          <Button
            sx={{
              color: "#D1D5DB",
              cursor: "pointer",
              position: "absolute",
              top: "0",
              right: "0",
            }}
            onClick={() => {
              setEditOpen(!editOpen);
            }}
          >
            <Close />
          </Button>
        </Box>

        <Box sx={{ padding: "8px 16px" }}>
          <Box sx={{ padding: "4px 12px" }}>
            <FormControl
              fullWidth
              sx={{ background: "#F6F6F6", border: "0px solid" }}
            >
              <InputLabel id="demo-select-small-label">Module Type</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-simple-select"
                // value={""}
                label="Module Type"
                onChange={handleChange}
              >
                <MenuItem value={10}>Type A</MenuItem>
                <MenuItem value={10}>Type B</MenuItem>
                <MenuItem value={10}>Type C</MenuItem>
                <MenuItem value={10}>Type D</MenuItem>
                <MenuItem value={10}>Type E</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ padding: "4px 12px" }}>
            <Box component="form" noValidate autoComplete="off">
              <TextField
                sx={{ width: "100%", background: "#F6F6F6" }}
                id="outlined-basic"
                label="MAC Address"
                variant="outlined"
              />
            </Box>
          </Box>
          <Box sx={{ padding: "4px 12px" }}>
            <FormControl
              fullWidth
              sx={{ background: "#F6F6F6", border: "0px solid" }}
            >
              <InputLabel id="demo-select-small-label">Machine Type</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-simple-select"
                // value={""}
                label="Machine Type"
                onChange={handleChange}
              >
                <MenuItem value={10}>General Machine</MenuItem>
                <MenuItem value={10}>Washing Machine</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Box
          sx={{
            padding: "12px 28px",
            display: "flex",
            justifyContent: "end",
            gap: "24px",
          }}
        >
          <Button
            onClick={() => {
              setEditOpen(!editOpen);
            }}
            sx={{
              width: "160px",
              height: "36px",
              borderRadius: "20px",
              padding: "8px 10px",
              background: "#F6F6F6",
              fontSize: "14px",
              color: "#959596",
            }}
          >
            Cancel
          </Button>
          <Button
            sx={{
              width: "160px",
              height: "36px",
              borderRadius: "20px",
              padding: "8px 10px",
              background: "#24459C",
              fontSize: "14px",
              fontWeight: "600",
              color: "#FFFFFF",
              "&:hover": {
                background: "#24459C",
              },
            }}
          >
            Save
          </Button>
        </Box>
      </Container>
    </Modal>
  );
};

export default EditModal;
