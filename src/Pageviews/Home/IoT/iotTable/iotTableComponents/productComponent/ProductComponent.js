import React from "react";
import { useStyle } from "../../../styles/iotStyle";

const ProductComponent = ({ props }) => {
  const classes = useStyle();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={classes.tabTitle}>
        {props?.row?.macAddress} {props?.row?.moduleType}
      </div>
      <div className={classes.tabSubtitle}>{props?.row?.name}</div>
    </div>
  );
};

export default ProductComponent;
