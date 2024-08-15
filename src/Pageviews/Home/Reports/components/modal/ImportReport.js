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
import CsvUploaderLogo from "../../../../../Assets/Home/iot/csv_uploader_logo.svg";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ImportReport = ({ importReportModal, setImportReportModal }) => {
  //   const [postIOT, { data, isError, error, isLoading, isSuccess }] =
  //     usePostIOTMutation();
  //   const { refetch } = useGetAllIotQuery();
  const [csvFile, setCsvFile] = useState(null);
  const inputRef = useRef();

  // React Hook Form
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData, e) => {
    e.preventDefault();
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
      open={importReportModal}
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
            Import Reports
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
              setImportReportModal(!importReportModal);
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
          {/* {isError && <Typography>{error?.message}</Typography>} */}
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
                setImportReportModal(!importReportModal);
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
              //   disabled={isLoading}
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
              {/* {isLoading ? "Saving..." : "Save"} */}
              Save
            </button>
          </Box>
        </form>
      </Container>
    </Modal>
  );
};

export default ImportReport;
