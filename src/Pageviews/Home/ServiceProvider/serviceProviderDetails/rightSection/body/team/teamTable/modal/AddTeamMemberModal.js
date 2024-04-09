import React from "react";
import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  Modal,
  NativeSelect,
  TextField,
  Typography,
  VisuallyHiddenInput,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const AddTeamMemberModal = ({ addMemberOpen, setAddMemberOpen, props }) => {
  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={addMemberOpen}
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
            Add Member
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
              setAddMemberOpen(!addMemberOpen);
            }}
          >
            <Close />
          </Button>
        </Box>

        <Box sx={{ padding: "8px 16px" }}>
          <Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "16px 32px",
                }}
              >
                <Typography
                  sx={{
                    color: "#111827",
                    fontSize: "14px",
                    fontWeight: "600",
                    width: "40%",
                  }}
                >
                  Profile Picture
                </Typography>
                {/* <PermIdentityIcon
                  sx={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "100%",
                    background: "#D9E3FF",
                    padding: "8px",
                  }}
                /> */}
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                >
                  Upload file
                  {/* <VisuallyHiddenInput type="file" /> */}
                </Button>
              </Box>
              <Box
                sx={{
                  padding: "0px 32px",
                }}
              >
                <TextField
                  sx={{
                    width: "100%",
                    background: "#F6F6F6",
                    borderRadius: "4px",
                  }}
                  id="standard-helperText"
                  label="Member Name"
                  defaultValue={"Enter Member Name"}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  padding: "0px 32px",
                }}
              >
                <FormControl sx={{ width: "100%", background: "#F6F6F6" }}>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Position
                  </InputLabel>
                  <NativeSelect>
                    <option>Owner</option>
                    <option>Admin</option>
                    <option>Support Engineer</option>
                    <option>Shop Executive</option>
                  </NativeSelect>
                </FormControl>
              </Box>
              <Box
                sx={{
                  padding: "0px 32px",
                }}
              >
                <TextField
                  sx={{
                    width: "100%",
                    background: "#F6F6F6",
                    borderRadius: "4px",
                  }}
                  id="standard-helperText"
                  label="Phone"
                  defaultValue={"Enter Phone Number"}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  padding: "0px 32px",
                }}
              >
                <TextField
                  sx={{
                    width: "100%",
                    background: "#F6F6F6",
                    borderRadius: "4px",
                  }}
                  id="standard-helperText"
                  label="Serviced"
                  defaultValue={"Enter Serviced Number"}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  padding: "0px 32px",
                }}
              >
                <TextField
                  sx={{
                    width: "100%",
                    background: "#F6F6F6",
                    borderRadius: "4px",
                  }}
                  id="standard-helperText"
                  label="Joined"
                  defaultValue={"Enter Joined Date"}
                  variant="standard"
                />
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
              setAddMemberOpen(!addMemberOpen);
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

export default AddTeamMemberModal;
