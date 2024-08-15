import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import editIcon from "../../../../../../../../../Assets/Home/customer/customer_edit.png";

const Wallet = () => {
  const [wallet, setWallet] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [editedValue, setEditedValue] = useState("");
  const { uid } = useParams();

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/customer/wallet/get-user-wallet-info/${uid}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.message === "success") {
          setWallet(data?.user_wallet_info);
        } else {
          // throw error
        }
      });
  }, [uid]);

  console.log(wallet);

  const handleEdit = () => {
    setEditedValue(wallet?.uid);
    setEditMode(true);
  };

  const handleSubmit = () => {
    console.log("Submitted value:", editedValue);
    setEditMode(false);
  };

  return (
    <Box sx={{ paddingY: "12px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "16px 24px",
        }}
      >
        <Typography
          sx={{ fontSize: "18px", fontWeight: "700", color: "#111827" }}
        >
          Wallet
        </Typography>
        {/* {!editMode && (
          <Button onClick={handleEdit}>
            <img src={editIcon} alt="" />
          </Button>
        )} */}
      </Box>
      <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          padding: "16px 24px",
        }}
      >
        <Typography
          variant="p"
          sx={{
            fontWeight: "700",
            color: "#111827",
            fontSize: "14px",
            width: "15%",
          }}
        >
          Account No.
        </Typography>
        {editMode ? (
          //  input field that show when edit button is clicked
          <TextField
            value={editedValue}
            onChange={(e) => setEditedValue(e.target.value)}
            variant="outlined"
            fullWidth
          />
        ) : (
          <Typography
            variant="p"
            sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
          >
            {wallet?.uid || "No Account No."}
          </Typography>
        )}
      </Box>

      {/* submit button  */}
      {editMode && (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "16px" }}
        >
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Wallet;
