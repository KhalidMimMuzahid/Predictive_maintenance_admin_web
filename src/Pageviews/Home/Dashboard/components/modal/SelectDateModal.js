import { Close, DateRange } from "@mui/icons-material";
import { Box, Button, Container, Modal, Typography } from "@mui/material";
import React from "react";
import verticleLine from "../../../../../Assets/Component/verticle_line.png";

const SelectDateModal = ({
  selectDateModal,
  setSelectDateModal,
  selectDate,
  setSelectDate,
}) => {
  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={selectDateModal}
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
          <Button
            sx={{
              color: "#D1D5DB",
              cursor: "pointer",
              position: "absolute",
              top: "0",
              right: "0",
            }}
            onClick={() => {
              setSelectDateModal(!selectDateModal);
              //   setCsvFile(null);
            }}
          >
            <Close />
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "48px",
            padding: "24px",
          }}
        >
          <Box>
            <Typography
              sx={{ color: "#3B4863", fontSize: "24px", fontWeight: "700" }}
            >
              From
            </Typography>
            <Box sx={{ marginTop: "18px" }}>
              <label for="from" sx={{}}>
                <input
                  type="date"
                  id="from"
                  name="from"
                  style={{
                    textTransform: "uppercase",
                    color: "#C6D2F1",
                    fontSize: "18px",
                    border: "1px solid #D8DBEE",
                    padding: "8px",
                    borderRadius: "4px",
                  }}
                />
              </label>
            </Box>
          </Box>
          <img src={verticleLine} alt="" />
          <Box>
            <Typography
              sx={{ color: "#3B4863", fontSize: "24px", fontWeight: "700" }}
            >
              To
            </Typography>
            <Box sx={{ marginTop: "18px" }}>
              <label for="from" sx={{}}>
                <input
                  type="date"
                  id="from"
                  name="from"
                  style={{
                    textTransform: "uppercase",
                    color: "#C6D2F1",
                    fontSize: "18px",
                    border: "1px solid #D8DBEE",
                    padding: "8px",
                    borderRadius: "4px",
                  }}
                />
              </label>
            </Box>
          </Box>
        </Box>
      </Container>
    </Modal>
  );
};

export default SelectDateModal;
