import React from "react";
import { useStyle } from "../../../styles/iotStyle";

const ProductComponent = ({ props }) => {
  const classes = useStyle();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={classes.tabTitle}>{props?.row?.macId}</div>
      <div className={classes.tabSubtitle}>{props?.row?.module}</div>
    </div>
  );
};

export default ProductComponent;
