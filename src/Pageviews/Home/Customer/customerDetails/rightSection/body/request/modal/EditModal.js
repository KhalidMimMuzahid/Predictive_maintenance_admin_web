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
          width: "35%",
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
            Edit Request
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
            <TextField
              id="outlined-basic"
              label="Shop Name"
              defaultValue="Mitsubishi Corp LLC"
              variant="filled"
              sx={{
                background: "white",
                width: "100%",
                color: "#65748B",
                fontSize: "16px",
                fontWeight: "700",
              }}
            />
          </Box>
          <Box sx={{ padding: "4px 12px" }}>
            <TextField
              id="outlined-basic"
              label="Shop Address"
              variant="filled"
              defaultValue="291-1215, Miyoshicho, Fuchu-shi, Tokyo, Japan 2387782634"
              sx={{
                background: "white",
                width: "100%",
                color: "#65748B",
                fontSize: "16px",
                fontWeight: "700",
              }}
            />
          </Box>
          <Box sx={{ padding: "4px 12px", display: "flex", gap: "8px" }}>
            <FormControl
              variant="filled"
              fullWidth
              sx={{ background: "white", border: "0px solid" }}
            >
              <InputLabel id="demo-select-small-label">Type of Shop</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-simple-select"
                // value={""}
                label="AType of Shop"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Laundry Shop</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant="filled"
              fullWidth
              sx={{ background: "white", border: "0px solid" }}
            >
              <InputLabel id="demo-select-small-label">
                Select type of washing machine
              </InputLabel>
              <Select
                sx={{ border: "none" }}
                labelId="demo-select-small-label"
                id="demo-simple-select"
                // value={""}
                label="Select type of washing machine"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Container Washing Machine</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ padding: "4px 12px", display: "flex", gap: "8px" }}>
            <FormControl
              variant="filled"
              fullWidth
              sx={{ background: "white", border: "0px solid" }}
            >
              <InputLabel id="demo-select-small-label">Select Brand</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-simple-select"
                // value={""}
                label="Select Brand"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Showa</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant="filled"
              fullWidth
              sx={{ background: "white", border: "0px solid" }}
            >
              <InputLabel id="demo-select-small-label">Select Model</InputLabel>
              <Select
                sx={{ border: "none" }}
                labelId="demo-select-small-label"
                id="demo-simple-select"
                // value={""}
                label="Select Model"
                // onChange={handleChange}
              >
                <MenuItem value={10}>SHEM63W55N</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ padding: "4px 12px", display: "flex", gap: "8px" }}>
            <FormControl
              variant="filled"
              fullWidth
              sx={{ background: "white", border: "0px solid" }}
            >
              <InputLabel id="demo-select-small-label">
                Sensor Section Name
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-simple-select"
                // value={""}
                label="Sensor Section Name"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Level1, Machine 2</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant="filled"
              fullWidth
              sx={{ background: "white", border: "0px solid" }}
            >
              <InputLabel id="demo-select-small-label">
                Sensor Purpose
              </InputLabel>
              <Select
                sx={{ border: "none" }}
                labelId="demo-select-small-label"
                id="demo-simple-select"
                // value={""}
                label="Sensor Purpose"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Left Purpose</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ padding: "4px 12px", width: "47.5%" }}>
            <FormControl
              variant="filled"
              fullWidth
              sx={{ background: "white", border: "0px solid" }}
            >
              <InputLabel id="demo-select-small-label">
                Sensor Section Name
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-simple-select"
                // value={""}
                label="Sensor Section Name"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Level1, Machine 2</MenuItem>
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
              background: "white",
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
