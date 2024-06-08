import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import editIcon from "../../../../../../../../../Assets/Home/customer/customer_edit.png";
const Details = ({ customerDetailsData }) => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedValues, setEditedValues] = useState({
    email: "",
    phone: "",
    dob: "",
    gender: "",
  });
  const handleEdit = () => {
    setEditedValues({
      email: user?.email,
      phone: user?.phone,
      dob: user?.dob,
      gender: user?.gender,
    });
    setEditMode(true);
  };

  const handleChange = (field, value) => {
    setEditedValues((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Edited fields:", editedValues);
    setEditMode(false); // exit edit mode
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
          Customer Details
        </Typography>

        {!editMode && (
          <Button onClick={handleEdit}>
            <img src={editIcon} alt="" />
          </Button>
        )}
      </Box>
      <Box>
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
            Email
          </Typography>
          {!editMode ? (
            <Typography
              variant="p"
              sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
            >
              {customerDetailsData?.email}
            </Typography>
          ) : (
            <TextField
              defaultValue={user?.email}
              onChange={(e) => handleChange("email", e.target.value)}
              variant="outlined"
              fullWidth
            />
          )}
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
            Phone
          </Typography>
          {!editMode ? (
            <Typography
              variant="p"
              sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
            >
              {customerDetailsData?.showaUser?.phone}
            </Typography>
          ) : (
            <TextField
              defaultValue={user?.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              variant="outlined"
              fullWidth
            />
          )}
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
            Country
          </Typography>
          {!editMode ? (
            <Typography
              variant="p"
              sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
            >
              {customerDetailsData?.showaUser?.addresses[0].address?.country}
            </Typography>
          ) : (
            <TextField
              defaultValue={user?.dob}
              onChange={(e) => handleChange("dob", e.target.value)}
              variant="outlined"
              fullWidth
            />
          )}
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
            State/Region
          </Typography>
          {!editMode ? (
            <Typography
              variant="p"
              sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
            >
              {customerDetailsData?.showaUser?.addresses[0].address?.city}
            </Typography>
          ) : (
            <TextField
              defaultValue={user?.gender}
              onChange={(e) => handleChange("gender", e.target.value)}
              variant="outlined"
              fullWidth
            />
          )}
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
            Address 1
          </Typography>
          {!editMode ? (
            <Typography
              variant="p"
              sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
            >
              {customerDetailsData?.showaUser?.addresses[0].address
                ?.postalCode +
                ", " +
                customerDetailsData?.showaUser?.addresses[0].address
                  ?.prefecture}
            </Typography>
          ) : (
            <TextField
              defaultValue={user?.gender}
              onChange={(e) => handleChange("gender", e.target.value)}
              variant="outlined"
              fullWidth
            />
          )}
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
            Address 2
          </Typography>
          {!editMode ? (
            <Typography
              variant="p"
              sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
            >
              {customerDetailsData?.showaUser?.addresses[0].address
                ?.roomNumber +
                ", " +
                customerDetailsData?.showaUser?.addresses[0].address?.details}
            </Typography>
          ) : (
            <TextField
              defaultValue={user?.gender}
              onChange={(e) => handleChange("gender", e.target.value)}
              variant="outlined"
              fullWidth
            />
          )}
        </Box>
        <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
      </Box>

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

export default Details;
