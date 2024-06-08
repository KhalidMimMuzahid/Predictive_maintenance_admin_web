import React, { useContext } from "react";
import { AppContext } from "../../../../../../../../contextApi/appProvider";

const AssignCheckboxComponent = ({ bid_id }) => {
  const { setBid_id } = useContext(AppContext);
  const handleOnSelect = (e) => {
    setBid_id(e?.target?.value);
  };
  return (
    <div>
      <input
        onChange={handleOnSelect}
        type="radio"
        name="assignVendor"
        value={bid_id}
        className="option-input checkbox"
      />
    </div>
  );
};

export default AssignCheckboxComponent;
