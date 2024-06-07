import { Checkbox } from "@mui/material";
import React from "react";

const AssignCheckboxComponent = ({ props }) => {
  const handleOnSelect = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <input
        onChange={handleOnSelect}
        type="radio"
        name="assignVendor"
        value={props?._id}
        className="option-input checkbox"
      />
    </div>
  );
};

export default AssignCheckboxComponent;
