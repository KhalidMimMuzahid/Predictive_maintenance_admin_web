import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CsvUploaderLogo from "../../../../../Assets/Home/iot/csv_uploader_logo.svg";
import { useForm } from "react-hook-form";

const PostAddModal = ({ postAddModalOpen, setPostAddModalOpen }) => {
  const [image, setImage] = useState(null);
  const inputRef = useRef();

  //   useEffect(() => {
  //     if (isSuccess) {
  //       toast.success(data?.message);
  //       refetch();
  //       setAddNewProductModalOpen(false);
  //     } else if (isError) {
  //       toast.error(error?.data?.message);
  //     }
  //   }, [isSuccess, isError]);

  // React Hook Form
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData, e) => {
    e.preventDefault();
    // postIOT(formData);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setImage(event.dataTransfer.files);
  };

  let fileName;
  if (image) {
    fileName = image[0]?.name;
  } else {
    fileName = "Upload an image from your device";
  }

  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={postAddModalOpen}
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
            Post Ad
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
              setPostAddModalOpen(!postAddModalOpen);
            }}
          >
            <Close />
          </Button>
        </Box>
        <Box
          sx={{
            marginY: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <TextField
            id="filled-helperText"
            label="Title"
            defaultValue="New Year Promotion"
            variant="filled"
            InputProps={{
              disableUnderline: true,
              color: "#65748B",
              fontWeight: "600",
              fontSize: "24px",
            }}
            fullWidth
          />
          <TextField
            id="filled-helperText"
            label="Subtitle"
            defaultValue="New year 2nd sale only on Showa"
            variant="filled"
            InputProps={{
              disableUnderline: true,
              color: "#65748B",
              fontWeight: "600",
              fontSize: "24px",
            }}
            fullWidth
          />
          <TextField
            id="filled-helperText"
            label="Details"
            defaultValue="20% Discount on your maintenance package (up to ¥5000) for basic packages. Please reserve your seat as soon as possible. Offer ending soon!"
            multiline={true}
            rows={4}
            variant="filled"
            InputProps={{
              disableUnderline: true,
              color: "#65748B",
              fontWeight: "600",
              fontSize: "24px",
            }}
            fullWidth
          />
          <Box>
            <label>
              <Typography>Starting Time</Typography>
              <input type="date" />
            </label>
          </Box>
          <Box
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => inputRef.current.click()}
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
            <img src={CsvUploaderLogo} alt="" />
            <Box>
              <input
                type="file"
                accept="image/*"
                onChange={(event) => setImage(event.target.files)}
                hidden
                ref={inputRef}
              />
              <Box
                style={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                {fileName}
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
              setPostAddModalOpen(!postAddModalOpen);
            }}
            sx={{
              width: "160px",
              height: "36px",
              borderRadius: "20px",
              padding: "8px 10px",
              background: "#F6F6F6",
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
            Post
          </Button>
        </Box>
      </Container>
    </Modal>
  );
};

export default PostAddModal;
