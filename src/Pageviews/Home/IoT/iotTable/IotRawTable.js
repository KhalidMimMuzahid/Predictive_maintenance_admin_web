import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import OptionsComponent from "./iotTableComponents/optionsComponent/OptionsComponent";

const IotRawTable = ({ data }) => {
  console.table(data);
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ background: "#F4F2FF" }}>
            <TableCell
              sx={{ width: "20%", color: "#6E6893", fontWeight: "600" }}
            >
              Product
            </TableCell>
            <TableCell
              sx={{ width: "20%", color: "#6E6893", fontWeight: "600" }}
            >
              STATE
            </TableCell>
            <TableCell
              sx={{ width: "20%", color: "#6E6893", fontWeight: "600" }}
            >
              CUSTOMER
            </TableCell>
            <TableCell
              sx={{ width: "25%", color: "#6E6893", fontWeight: "600" }}
            >
              STATUS
            </TableCell>
            <TableCell
              sx={{ width: "15%", color: "#6E6893", fontWeight: "600" }}
            >
              Action
            </TableCell>
          </TableHead>
          <TableBody>
            {data?.map((bid, i) => (
              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  <Typography sx={{ color: "#25213B", fontWeight: "600" }}>
                    {bid?.name}
                  </Typography>
                  <Typography sx={{ fontSize: "12px" }}>
                    {bid?.macAddress}
                  </Typography>
                </TableCell>
                <TableCell component="th" scope="row">
                  {bid?.isDeleted?.value ? "TRUE" : "FALSE"}
                </TableCell>
                <TableCell component="th" scope="row">
                  {bid?.serviceProviderCompany?.companyName}
                </TableCell>
                <TableCell component="th" scope="row">
                  {bid?.status === "sold-out" && (
                    <Typography
                      sx={{
                        background: "#FDCCD1",
                        width: "100px",
                        textAlign: "center",
                        padding: "1px 4px",
                        borderRadius: "20px",
                      }}
                    >
                      🔴 {bid?.status}
                    </Typography>
                  )}
                  {bid?.status === "in-stock" && (
                    <Typography
                      sx={{
                        color: "#7FC008",
                        background: "#F3FAE8",
                        width: "100px",
                        textAlign: "center",
                        padding: "1px 4px",
                        borderRadius: "20px",
                      }}
                    >
                      🟢 {bid?.status}
                    </Typography>
                  )}
                </TableCell>
                <TableCell component="th" scope="row">
                  <OptionsComponent />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default IotRawTable;
