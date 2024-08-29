import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { usePostControlPanelReservationRequestStatusMutation } from "../../../../../features/predefined/predefinedSlice";
import { toast } from "react-toastify";
import ProgressingLoader from "../../../../../Utils/ProgressingLoader";

const AddStatusModal = ({ addStatusModal, setAddStatusModal }) => {
  const [status, setStatus] = useState("");
  const [postStatus, { data, isError, error, isLoading, isSuccess }] =
    usePostControlPanelReservationRequestStatusMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message);
      setAddStatusModal(!addStatusModal);
    } else if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isSuccess, isError]);

  const submitStatus = () => {
    postStatus(status);
  };
  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={addStatusModal}
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
            Add Status
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
              setAddStatusModal(!addStatusModal);
            }}
          >
            <Close />
          </Button>
        </Box>

        <Box sx={{ padding: "24px 0px" }}>
          <TextField
            fullWidth
            size="small"
            placeholder="Status Type"
            label="Status Type"
            //   value={newStatus}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          />
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
              setAddStatusModal(!addStatusModal);
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
            onClick={() => submitStatus()}
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
            {isLoading ? <ProgressingLoader /> : "Add"}
          </button>
        </Box>
      </Container>
    </Modal>
  );
};

export default AddStatusModal;
