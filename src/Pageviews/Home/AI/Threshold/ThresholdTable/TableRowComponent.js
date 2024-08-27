import {
  Button,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useEditThresholdMutation } from "../../../../../features/ai/aiSlice";
import { toast } from "react-toastify";
import ProgressingLoader from "../../../../../Utils/ProgressingLoader";

const TableRowComponent = ({ threshold, refetch }) => {
  const [editEnable, setEditEnable] = useState(false);
  const [thresholdEditData, setThresholdEditData] = useState({});
  const [editThreshold, { data, isError, error, isLoading, isSuccess }] =
    useEditThresholdMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message);
      refetch();
      setEditEnable(!editEnable);
    } else if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isSuccess, isError]);

  const submitEditThreshold = () => {
    const thresholdDetails = {
      sectionName: threshold?.sectionName,
      temperature:
        thresholdEditData?.temperature === undefined
          ? threshold?.temperature
          : thresholdEditData?.temperature,
      vibrations:
        thresholdEditData?.vibrations === undefined
          ? threshold?.vibrations
          : thresholdEditData?.vibrations,
    };
    editThreshold(thresholdDetails);
  };
  return (
    <TableRow key={threshold?.sectionName}>
      <TableCell
        sx={{
          color: "#4D5983",
          fontSize: "16px",
          border: "none",
          width: "40%",
        }}
      >
        {threshold?.sectionName?.charAt(0)?.toUpperCase() +
          threshold?.sectionName?.slice(1)}
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
            onChange={(e) => {
              setThresholdEditData((prev) => {
                return {
                  ...prev,
                  temperature: Number(e.target?.value),
                };
              });
            }}
            defaultValue={threshold?.temperature}
            variant="outlined"
            size="small"
            type="text"
            required
          />
        ) : (
          <Typography>{threshold?.temperature}</Typography>
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
            defaultValue={threshold?.vibrations}
            variant="outlined"
            size="small"
            type="text"
            required
            onChange={(e) => {
              setThresholdEditData((prev) => {
                return {
                  ...prev,
                  vibrations: Number(e.target?.value),
                };
              });
            }}
          />
        ) : (
          <Typography>{threshold?.vibrations}</Typography>
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
            onClick={() => submitEditThreshold()}
            sx={{
              background: "#8297B6",
              borderRadius: "4px",
              textTransform: "none",
              color: "white",
              fontWeight: "600",
              width: "102px",
              height: "38px",
              padding: "6px 0px",
              "&:hover": {
                background: "#8297B6",
                opacity: "75%",
              },
            }}
          >
            {isLoading ? <ProgressingLoader /> : "Save"}
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
              height: "38px",
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
