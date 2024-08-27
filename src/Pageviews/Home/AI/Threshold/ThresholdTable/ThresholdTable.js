import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
  Paper,
  Typography,
} from "@mui/material";
import TableRowComponent from "./TableRowComponent";

const ThresholdTable = ({ thresholdData, refetch }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{ marginTop: "24px", boxShadow: "none" }}
    >
      <Table sx={{ border: "none" }}>
        <TableHead sx={{ border: "none" }}>
          <TableRow sx={{ border: "none" }}>
            <TableCell
              sx={{
                color: "#4D5983",
                fontSize: "16px",
                border: "none",
                width: "40%",
              }}
            />
            <TableCell
              sx={{
                color: "#4D5983",
                fontSize: "16px",
                border: "none",
                width: "23%",
              }}
            >
              Temperature (°C)
            </TableCell>
            <TableCell
              sx={{
                color: "#4D5983",
                fontSize: "16px",
                border: "none",
                width: "23%",
              }}
            >
              Vibration (Hz)
            </TableCell>
            <TableCell
              sx={{
                color: "#4D5983",
                fontSize: "16px",
                border: "none",
                width: "20%",
              }}
            />
          </TableRow>
        </TableHead>
        <TableBody sx={{ boxShadow: "none" }}>
          {thresholdData.map((threshold) => (
            <TableRowComponent
              key={threshold?.name}
              threshold={threshold}
              refetch={refetch}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ThresholdTable;
