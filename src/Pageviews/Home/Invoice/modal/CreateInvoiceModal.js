import React, { useState } from "react";
import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import logo_full_black from "../../../../Assets/Component/logo_full_black.svg";
import logo from "../../../../Assets/Component/logo_small.svg";
import user from "../../../../Assets/Home/service_provider/request_user.png";
import CustomerListModal from "./CustomerListModal/CustomerListModal";

const CreateInvoiceModal = ({
  isCreateModalOpen,
  setIsCreateModalOpen,
  // props,
}) => {
  const [isCustomerListOpen, setIsCustomerListOpen] = useState(false);
  return (
    <Box>
      {isCustomerListOpen && (
        <CustomerListModal
          isCustomerListOpen={isCustomerListOpen}
          setIsCustomerListOpen={setIsCustomerListOpen}
        />
      )}
      <Modal
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        open={isCreateModalOpen}
      >
        <Container
          sx={{
            width: "60%",
            background: "white",
            borderRadius: "20px",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 16px",
            }}
          >
            <Box>
              <img src={logo_full_black} alt="" />
              <Typography sx={{ fontSize: "22px" }}>www.showa.com</Typography>
            </Box>
            <Box
              sx={{
                padding: "12px 0px",
                display: "flex",
                justifyContent: "end",
                gap: "24px",
              }}
            >
              <Button
                onClick={() => {
                  setIsCreateModalOpen(!isCreateModalOpen);
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
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 16px",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "20px", color: "#5A6872" }}>
                FROM
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "start",
                  gap: "25px",
                  marginTop: "10px",
                }}
              >
                <img src={logo} style={{ marginTop: "8px" }} alt="" />
                <Box>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#5A6872",
                    }}
                  >
                    Showa Company Ltd
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#5A6872",
                    }}
                  >
                    442-1227, Tsukuno, Minamiuonuma-shi, Niigata Japan
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#5A6872",
                    }}
                  >
                    Company No. 4675933 | EU VAT No. 949 67545 45
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#5A6872",
                    }}
                  >
                    accounts@devias.io | (+40) 652 3456 23
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "20px", color: "#5A6872" }}>
                TO
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "start",
                  gap: "25px",
                  marginTop: "10px",
                }}
              >
                <Button
                  onClick={() => setIsCustomerListOpen(!isCustomerListOpen)}
                  sx={{
                    border: "1px dashed #4D5983",
                    padding: "6px 20px",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  Select Customer / Service Provider
                </Button>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
              padding: "0 16px",
            }}
          >
            <Box>
              <Typography
                sx={{ fontSize: "16px", fontWeight: "700", color: "#5A6872" }}
              >
                Invoice No. 098784
              </Typography>
              <Typography
                sx={{ fontSize: "16px", fontWeight: "700", color: "#5A6872" }}
              >
                Invoice Date: Mar 19th, 2022
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: "16px", fontWeight: "700", color: "#5A6872" }}
              >
                Due: Mar 19th, 2022
              </Typography>
            </Box>
          </Box>

          {/* Table Start */}
          <Box sx={{ padding: "0 16px" }}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ITEM</TableCell>
                    <TableCell align="right">HRS/QTY</TableCell>
                    <TableCell align="right">RATE</TableCell>
                    <TableCell align="right">TAX</TableCell>
                    <TableCell align="right">SUBTOTAL</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <input
                        type="text"
                        style={{
                          width: "100%",
                          padding: "14px 0",
                          border: "2px solid #D1D5DB",
                          borderRadius: "4px",
                        }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <input
                        type="text"
                        style={{
                          width: "100%",
                          padding: "14px 0",
                          border: "2px solid #D1D5DB",
                          borderRadius: "4px",
                        }}
                      />
                    </TableCell>
                    <TableCell align="left">
                      {" "}
                      <input
                        type="text"
                        style={{
                          width: "100%",
                          padding: "14px 0",
                          border: "2px solid #D1D5DB",
                          borderRadius: "4px",
                        }}
                      />
                    </TableCell>
                    <TableCell align="right">
                      {" "}
                      <input
                        type="text"
                        style={{
                          width: "100%",
                          padding: "14px 0",
                          border: "2px solid #D1D5DB",
                          borderRadius: "4px",
                        }}
                      />
                    </TableCell>
                    <TableCell align="right">
                      {" "}
                      <input
                        type="text"
                        style={{
                          width: "100%",
                          padding: "14px 0",
                          border: "2px solid #D1D5DB",
                          borderRadius: "4px",
                        }}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          {/* Table End */}

          <Box sx={{ padding: "0 16px" }}>
            <input
              type="text"
              placeholder="Description"
              style={{
                width: "100%",
                padding: "14px 0",
                border: "2px solid #D1D5DB",
                borderRadius: "4px",
                color: "#D1D5DB",
                fontWeight: "600",
              }}
            />
          </Box>

          <Box sx={{ padding: "0 16px", display: "flex" }}>
            <Button
              sx={{
                width: "100%",
                fontSize: "20px",
                fontWeight: "600",
                color: "#8B8B8B",
                border: "1px dashed #D1D5DB",
              }}
            >
              Add new invoice Item
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
              padding: "0 16px",
            }}
          >
            <Box>
              <Typography
                sx={{ fontSize: "18px", color: "#65748B", fontWeight: "500" }}
              >
                In word
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "#65748B", fontWeight: "500" }}
              >
                twenty five thousand Yen only
              </Typography>
            </Box>
            <Box sx={{ width: "320px" }}>
              <Typography
                sx={{
                  background: "#F4F2FF",
                  padding: "10px 0",
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Invoice Summary
              </Typography>
              <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 12px",
                }}
              >
                <Typography
                  sx={{ fontWeight: "500", fontSize: "18", color: "#5A6872" }}
                >
                  Subtotal
                </Typography>
                <Typography
                  sx={{ fontWeight: "600", fontSize: "18", color: "#5A6872" }}
                >
                  1250
                </Typography>
              </Box>
              <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 12px",
                }}
              >
                <Typography
                  sx={{ fontWeight: "500", fontSize: "18", color: "#5A6872" }}
                >
                  Subtotal
                </Typography>
                <Typography
                  sx={{ fontWeight: "600", fontSize: "18", color: "#5A6872" }}
                >
                  1250
                </Typography>
              </Box>
              <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 12px",
                }}
              >
                <Typography
                  sx={{ fontWeight: "500", fontSize: "18", color: "#5A6872" }}
                >
                  Total {"(Yen)"}
                </Typography>
                <Typography
                  sx={{ fontWeight: "600", fontSize: "18", color: "#5A6872" }}
                >
                  2250
                </Typography>
              </Box>
              <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
            </Box>
          </Box>
        </Container>
      </Modal>
    </Box>
  );
};

export default CreateInvoiceModal;
