import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CsvUploaderLogo from "../../../../Assets/Home/iot/csv_uploader_logo.svg";
import { useForm } from "react-hook-form";
import {
  useGetAllIotQuery,
  usePostIOTMutation,
} from "../../../../features/iot/iotSlice";
import { toast } from "react-toastify";

const AddNewProductModal = ({
  addNewProductModalOpen,
  setAddNewProductModalOpen,
}) => {
  const [postIOT, { data, isError, error, isLoading, isSuccess }] =
    usePostIOTMutation();
  const { refetch } = useGetAllIotQuery();
  const [csvFile, setCsvFile] = useState(null);
  const inputRef = useRef();

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message);
      refetch();
      setAddNewProductModalOpen(false);
    } else if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isSuccess, isError]);

  // React Hook Form
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData, e) => {
    if (formData?.macAddress?.endsWith(" ")) {
      toast.error("MAC ID can't have a space at the end.");
      return;
    }
    e.preventDefault();
    postIOT(formData);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setCsvFile(event.dataTransfer.files);
  };

  let fileName;
  if (csvFile) {
    fileName = csvFile[0]?.name;
  } else {
    fileName = "Drop files here or click to upload.";
  }
  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={addNewProductModalOpen}
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
            Add IoT Sensor
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
              setAddNewProductModalOpen(!addNewProductModalOpen);
              //   setCsvFile(null);
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
            <input
              {...register("name")}
              style={{
                background: "#F6F6F6",
                padding: "16px",
                border: "none",
                borderRadius: "4px",
                color: "#65748B",
                fontSize: "16px",
                fontWeight: "700",
              }}
              id="outlined-basic"
              type="text"
              label="Sensor Name"
              placeholder="Sensor Name"
            />
            <select
              {...register("moduleType")}
              style={{
                background: "#F6F6F6",
                padding: "16px",
                border: "none",
                borderRadius: "4px",
                color: "#65748B",
                fontSize: "16px",
                fontWeight: "700",
              }}
              select
              id="demo-simple-select"
              label="Module"
              size="medium"
            >
              <option value="module-1">Module 1</option>
              <option value="module-2">Module 2</option>
              <option value="module-3">Module 3</option>
              <option value="module-4">Module 4</option>
            </select>

            <input
              style={{
                background: "#F6F6F6",
                padding: "16px",
                border: "none",
                borderRadius: "4px",
                color: "#65748B",
                fontSize: "16px",
                fontWeight: "700",
              }}
              size="medium"
              placeholder="MAC ID"
              label="MAC ID"
              {...register("macAddress")}
            />
          </Box>

          {/* CSV */}
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
                accept=".csv"
                onChange={(event) => setCsvFile(event.target.files)}
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
                You can upload CSV file
              </Box>
            </Box>
          </Box>
          {/* CSV */}
          {isError && <Typography>{error?.message}</Typography>}
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
                setAddNewProductModalOpen(!addNewProductModalOpen);
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
              disabled={isLoading}
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
              {isLoading ? "Saving..." : "Save"}
            </button>
          </Box>
        </form>
      </Container>
    </Modal>
  );
};

export default AddNewProductModal;
