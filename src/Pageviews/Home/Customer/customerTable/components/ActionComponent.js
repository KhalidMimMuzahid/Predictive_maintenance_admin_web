import {
  Box,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ActionComponent = (props) => {
  const navigate = useNavigate();
  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.value === "view") {
      navigate(`/customer/${props?.row?.details?.uid}`);
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Action"
          onChange={handleChange}
        >
          <option value="view">view</option>
          <option value="edit">edit</option>
        </select>
      </FormControl>
    </Box>
  );
};

export default ActionComponent;
