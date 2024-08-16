import React from "react";
import { Add, Close, DeleteOutline } from "@mui/icons-material";
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

const CreateNewPackageModal = ({
  createNewPackageModal,
  setCreateNewPackageModal,
}) => {
  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={createNewPackageModal}
    >
      <Container
        sx={{
          width: "40%",
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
            Create New Package
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
              setCreateNewPackageModal(!createNewPackageModal);
            }}
          >
            <Close />
          </Button>
        </Box>

        <Box sx={{ padding: "8px 8px" }}>
          <Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "",
                  padding: "16px 32px",
                }}
              >
                <Typography
                  sx={{
                    color: "#5A6B85",
                    fontSize: "18px",
                    fontWeight: "700",
                  }}
                >
                  Package Details
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: "0px 32px",
                  display: "flex",
                  gap: "14px",
                }}
              >
                <TextField
                  sx={{
                    width: "100%",
                    background: "#F6F6F6",
                    borderRadius: "4px",
                  }}
                  id="standard-helperText"
                  label="Title of The Package"
                  variant="standard"
                  placeholder="Special Package"
                  InputProps={{ disableUnderline: true }}
                />
                <TextField
                  sx={{
                    width: "100%",
                    background: "#F6F6F6",
                    borderRadius: "4px",
                  }}
                  id="standard-helperText"
                  label="Header Title"
                  variant="standard"
                  InputProps={{ disableUnderline: true }}
                />
              </Box>
              <Box
                sx={{
                  padding: "0px 32px",
                  display: "flex",
                  gap: "14px",
                }}
              >
                <FormControl
                  variant="standard"
                  sx={{ width: "50%", border: "10px", background: "#F6F6F6" }}
                >
                  <InputLabel id="demo-simple-select-label">
                    Package Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label=" Package Type"
                    // onChange={handleChange}
                    InputProps={{ disableUnderline: true }}
                  >
                    <MenuItem value={"weekly"}>Weekly</MenuItem>
                    <MenuItem value={"monthly"}>Monthly</MenuItem>
                    <MenuItem value={"yearly"}>Yearly</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  sx={{
                    width: "50%",
                    background: "#F6F6F6",
                    borderRadius: "4px",
                  }}
                  id="standard-helperText"
                  label="Price"
                  variant="standard"
                  InputProps={{ disableUnderline: true }}
                />
              </Box>
              <Box
                sx={{
                  padding: "0px 32px",
                  display: "flex",
                  gap: "14px",
                }}
              >
                <FormControl
                  variant="standard"
                  sx={{ width: "50%", border: "10px", background: "#F6F6F6" }}
                >
                  <InputLabel id="demo-simple-select-label">
                    Validation
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label=" Validation"
                    // onChange={handleChange}
                    InputProps={{ disableUnderline: true }}
                  >
                    <MenuItem value={"30days"}>30days</MenuItem>
                    <MenuItem value={"15days"}>15days</MenuItem>
                    <MenuItem value={"7days"}>7days</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  sx={{
                    width: "50%",
                    background: "#F6F6F6",
                    borderRadius: "4px",
                  }}
                  id="standard-helperText"
                  label="Price"
                  variant="standard"
                  InputProps={{ disableUnderline: true }}
                />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "",
                padding: "16px 32px",
              }}
            >
              <Typography
                sx={{
                  color: "#5A6B85",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                Package Comes with
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Box
                sx={{
                  padding: "0px 32px",
                  display: "flex",
                  gap: "14px",
                }}
              >
                <TextField
                  sx={{
                    width: "90%",
                    background: "#F6F6F6",
                    borderRadius: "4px",
                  }}
                  id="standard-helperText"
                  label="Price"
                  variant="standard"
                  placeholder="Each Machine 6,500 yen"
                  InputProps={{ disableUnderline: true }}
                />
                <Button
                  sx={{
                    width: "10%",
                    background: "#F6F6F6",
                    borderRadius: "4px",
                  }}
                >
                  <DeleteOutline sx={{ color: "red", fontWeight: "36px" }} />
                </Button>
              </Box>
              <Box
                sx={{
                  padding: "0px 32px",
                  display: "flex",
                  gap: "14px",
                }}
              >
                <TextField
                  sx={{
                    width: "90%",
                    background: "#F6F6F6",
                    borderRadius: "4px",
                  }}
                  id="standard-helperText"
                  label="Inventory"
                  variant="standard"
                  placeholder="Package Inventory List"
                  InputProps={{ disableUnderline: true }}
                />
                <Button
                  sx={{
                    width: "10%",
                    background: "#F6F6F6",
                    borderRadius: "4px",
                  }}
                >
                  <Add
                    sx={{
                      color: "white",
                      fontWeight: "36px",
                      background: "#24459C",
                      borderRadius: "100%",
                    }}
                  />
                </Button>
              </Box>
            </Box>
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
              setCreateNewPackageModal(!createNewPackageModal);
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
              textTransform: "none",
            }}
          >
            Save
          </Button>
        </Box>
      </Container>
    </Modal>
  );
};

export default CreateNewPackageModal;
