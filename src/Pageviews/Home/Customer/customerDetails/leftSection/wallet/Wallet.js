import { Box, List, ListItem, ListItemText } from "@mui/material";
import React from "react";

const Wallet = ({ wallet }) => {
  return (
    <Box sx={{ border: "1px solid black", bgcolor: "white", padding: "12px" }}>
      <h3>Wallet</h3>
      <List sx={{ padding: "12px" }}>
        <ListItem>
          <div>
            <ListItemText primary="Showa Balance" />
            {/* <img src={} alt="" />
             */}
          </div>
        </ListItem>
      </List>
    </Box>
  );
};

export default Wallet;
