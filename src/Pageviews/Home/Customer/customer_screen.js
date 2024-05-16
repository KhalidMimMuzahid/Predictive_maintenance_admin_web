import { AddOutlined, Download, MoreVert, Upload } from "@mui/icons-material";
import { useContext, useState } from "react";
import { Box, Button, IconButton } from "@mui/material";
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

        <Box sx={{ display: "flex" }}>
          <Button
            onClick={() => downloadTableData(downloadData, setDownloadData)}
            sx={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "8px",
              padding: "0 12px",
            }}
            startIcon={<Upload />}
          >
            Export
          </Button>
          <div className={classes.spacerSmall} />
          <Button
            sx={{
              backgroundColor: "#24459c",
              color: "white",
              borderRadius: "8px",
              "&:hover": {
                background: "#24459C",
              },
            }}
            startIcon={<AddOutlined />}
          >
            Add Customer
          </Button>
        </Box>

        {/* <div className={classes.smallMenuHolder}>
          <IconButton onClick={handleClick}>
            <MoreVert />
          </IconButton>
        </div> */}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default CustomerScreen;
