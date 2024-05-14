import { AddOutlined, Download, MoreVert, Upload } from "@mui/icons-material";
import { useContext, useState } from "react";
import { Button, IconButton } from "@mui/material";
import { useStyle } from "./styleComponents";
import { Outlet } from "react-router-dom";
import { AppContext } from "../../../contextApi/appProvider";
import { downloadTableData } from "../../../Utils/downloadTableData";
const CustomerScreen = () => {
  const { downloadData, setDownloadData } = useContext(AppContext);
  const classes = useStyle();

  const [anchorEl, setAnchorEl] = useState(null);
  const openEl = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.holder}>
      <div className={classes.topHolder}>
        <div>
          <div className={classes.title}>Customer</div>
          <div className={classes.spacerSmall}></div>
          <div style={{ display: "flex" }}>
            <div style={{ color: "black" }} className={classes.subtitle}>
              Dashboard /{" "}
            </div>
            <div style={{ color: "black" }} className={classes.subtitle}>
              {" "}
              Customers /
            </div>
            <div style={{ color: "#24459c" }} className={classes.subtitle}>
              {" "}
              All Customers
            </div>
          </div>
        </div>

        <div className={classes.buttonHolder}>
          <Button
            style={{ backgroundColor: "white", color: "black" }}
            startIcon={<Download />}
          >
            Import
          </Button>
          <div className={classes.spacerSmall} />
          <Button
            onClick={() => downloadTableData(downloadData, setDownloadData)}
            style={{ backgroundColor: "white", color: "black" }}
            startIcon={<Upload />}
          >
            Export
          </Button>
          <div className={classes.spacerSmall} />
          <Button
            style={{ backgroundColor: "#24459c", color: "white" }}
            startIcon={<AddOutlined />}
          >
            Add Customer
          </Button>
        </div>

        <div className={classes.smallMenuHolder}>
          <IconButton onClick={handleClick}>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default CustomerScreen;
