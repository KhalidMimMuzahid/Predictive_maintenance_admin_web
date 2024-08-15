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
import { useForm } from "react-hook-form";
import uploaderLogo from "../../../../../Assets/Home/iot/csv_uploader_logo.svg";

const NewReport = ({ newReport, setNewReport }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData, e) => {
    e.preventDefault();
  };
  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={newReport}
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
            Add New Report
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
              setNewReport(!newReport);
            }}
          >
            <Close />
          </Button>
        </Box>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            paddingTop: "16px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              mb: "8px",
            }}
          >
            <TextField
              {...register("report_name")}
              style={{
                background: "#F6F6F6",
                border: "0 px",
                color: "#65748B",
                fontSize: "16px",
                fontWeight: "700",
              }}
              id="outlined-basic"
              type="text"
              label="Report Name"
              placeholder="Yamete Kudasai"
            />

            <TextField
              {...register("description")}
              style={{
                background: "#F6F6F6",
                border: "none",
                color: "#65748B",
                fontSize: "16px",
                fontWeight: "700",
              }}
              placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              label="Description"
            />
          </Box>
          <Box sx={{ display: "flex", gap: "8px" }}>
            <FormControl fullWidth sx={{ background: "#F6F6F6" }}>
              <InputLabel id="demo-simple-select-label">
                Type of shop
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={""}
                label="Type of shop"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ background: "#F6F6F6" }}>
              <InputLabel id="demo-simple-select-label">
                Select type of washing machine
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={""}
                label="Select type of washing machine"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", gap: "8px" }}>
            <FormControl fullWidth sx={{ background: "#F6F6F6" }}>
              <InputLabel id="demo-simple-select-label">
                Select Brand
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={""}
                label="Select Brand"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ background: "#F6F6F6" }}>
              <InputLabel id="demo-simple-select-label">
                Select Model
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={""}
                label="Select Model"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", gap: "8px" }}>
            <FormControl sx={{ background: "#F6F6F6", width: "49.5%" }}>
              <InputLabel id="demo-simple-select-label">
                Sensor Purpose
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={""}
                label="Sensor Purpose"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
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
                setNewReport(!newReport);
              }}
              sx={{
                width: "160px",
                height: "36px",
                borderRadius: "20px",
                padding: "8px 10px",
                background: "white",
                fontSize: "14px",
                color: "#959596",
                textTransform: "none",
              }}
            >
              Cancel
            </Button>
            <button
              type="submit"
              style={{
                width: "160px",
                height: "36px",
                borderRadius: "20px",
                border: "none",
                cursor: "pointer",
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
              Create
            </button>
          </Box>
        </form>
      </Container>
    </Modal>
  );
};

export default NewReport;
