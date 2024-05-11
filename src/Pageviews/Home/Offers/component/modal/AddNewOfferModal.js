import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import uploaderLogo from "../../../../../Assets/Home/iot/csv_uploader_logo.svg";

const AddNewOfferModal = ({
  addNewOfferModalOpen,
  setAddNewOfferModalOpen,
}) => {
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
      open={addNewOfferModalOpen}
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
            Add New Offer
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
              setAddNewOfferModalOpen(!addNewOfferModalOpen);
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
              {...register("offer_title")}
              id="outlined-basic"
              label="Offer Title"
              variant="outlined"
              sx={{
                background: "#F6F6F6",
                border: "none",
                borderRadius: "4px",
                color: "#65748B",
                fontSize: "16px",
                fontWeight: "700",
              }}
            />
            <TextField
              {...register("details")}
              id="outlined-basic"
              label="Details"
              variant="outlined"
              sx={{
                background: "#F6F6F6",
                border: "none",
                borderRadius: "4px",
                color: "#65748B",
                fontSize: "16px",
                fontWeight: "700",
              }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
            <TextField
              {...register("details")}
              id="outlined-basic"
              label="Price (Yen)"
              variant="outlined"
              sx={{
                background: "#F6F6F6",
                border: "none",
                borderRadius: "4px",
                color: "#65748B",
                fontSize: "16px",
                fontWeight: "700",
                width: "50%",
              }}
            />
            <TextField
              {...register("details")}
              id="outlined-basic"
              label="Promo Code"
              variant="outlined"
              sx={{
                background: "#F6F6F6",
                border: "none",
                borderRadius: "4px",
                color: "#65748B",
                fontSize: "16px",
                fontWeight: "700",
                width: "50%",
              }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
            <TextField
              {...register("details")}
              id="outlined-basic"
              label="Date"
              variant="outlined"
              sx={{
                background: "#F6F6F6",
                border: "none",
                borderRadius: "4px",
                color: "#65748B",
                fontSize: "16px",
                fontWeight: "700",
                width: "50%",
              }}
            />
            <TextField
              {...register("details")}
              id="outlined-basic"
              label="Off %"
              variant="outlined"
              sx={{
                background: "#F6F6F6",
                border: "none",
                borderRadius: "4px",
                color: "#65748B",
                fontSize: "16px",
                fontWeight: "700",
                width: "50%",
              }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
            <TextField
              {...register("details")}
              id="outlined-basic"
              label="Active On App"
              variant="outlined"
              sx={{
                background: "#F6F6F6",
                border: "none",
                borderRadius: "4px",
                color: "#65748B",
                fontSize: "16px",
                fontWeight: "700",
                width: "50%",
              }}
            />
            <TextField
              {...register("details")}
              id="outlined-basic"
              label="Select Offer Type"
              variant="outlined"
              sx={{
                background: "#F6F6F6",
                border: "none",
                borderRadius: "4px",
                color: "#65748B",
                fontSize: "16px",
                fontWeight: "700",
                width: "50%",
              }}
            />
          </Box>

          {/* CSV */}
          <Box
            // onDragOver={handleDragOver}
            // onDrop={handleDrop}
            // onClick={() => inputRef.current.click()}
            sx={{
              display: "flex",
              gap: "10px",
              background: "#F1FAFF",
              padding: "8px 14px",
              border: "dashed 1px #009EF7",
              borderRadius: "7px",
              cursor: "pointer",
            }}
          >
            <img src={uploaderLogo} alt="" />
            <Box>
              <input
                type="file"
                accept=".png"
                // onChange={(event) => setCsvFile(event.target.files)}
                hidden
                // ref={inputRef}
              />
              <Box
                style={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                {/* {fileName} */}
                Upload an image from your device
              </Box>
              <Box
                style={{
                  color: "#009EF7",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Image must be in either the jpg, jpeg, gif or png format
              </Box>
            </Box>
          </Box>
          {/* CSV */}
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
                setAddNewOfferModalOpen(!addNewOfferModalOpen);
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
              Update
            </button>
          </Box>
        </form>
      </Container>
    </Modal>
  );
};

export default AddNewOfferModal;
