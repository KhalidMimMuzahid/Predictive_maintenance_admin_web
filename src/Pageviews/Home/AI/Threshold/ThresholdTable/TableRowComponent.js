import {
  Button,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const TableRowComponent = ({ row }) => {
  const [editEnable, setEditEnable] = useState(false);
  return (
    <TableRow key={row.name}>
      <TableCell
        sx={{
          color: "#4D5983",
          fontSize: "16px",
          border: "none",
          width: "40%",
        }}
      >
        {row.name}
      </TableCell>
      <TableCell
        sx={{
          color: "#4D5983",
          fontSize: "16px",
          border: "none",
          width: "23%",
        }}
      >
        {editEnable ? (
          <TextField
            defaultValue={row.temperature}
            variant="outlined"
            size="small"
          />
        ) : (
          <Typography>{row.temperature}</Typography>
        )}
      </TableCell>
      <TableCell
        sx={{
          fontSize: "16px",
          border: "none",
          width: "23%",
        }}
      >
        {editEnable ? (
          <TextField
            defaultValue={row.vibration}
            variant="outlined"
            size="small"
          />
        ) : (
          <Typography>{row.vibration}</Typography>
        )}
      </TableCell>
      <TableCell
        sx={{
          width: "20%",
          border: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {editEnable ? (
          <Button
            sx={{
              background: "#8297B6",
              borderRadius: "4px",
              textTransform: "none",
              color: "white",
              fontWeight: "600",
              width: "102px",
              padding: "6px 0px",
              "&:hover": {
                background: "#8297B6",
                opacity: "75%",
              },
            }}
          >
            Save
          </Button>
        ) : (
          <Button
            onClick={() => setEditEnable(!editEnable)}
            sx={{
              background: "#F0F1F3",
              borderRadius: "4px",
              textTransform: "none",
              color: "#4D5983",
              fontWeight: "600",
              width: "102px",
              padding: "6px 0px",
              "&:hover": {
                background: "#F0F1F3",
                opacity: "75%",
              },
            }}
          >
            Edit
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
};

export default TableRowComponent;
