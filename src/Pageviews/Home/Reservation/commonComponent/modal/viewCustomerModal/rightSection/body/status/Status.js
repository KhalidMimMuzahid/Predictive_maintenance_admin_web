import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import editIcon from "../../../../../../../../../Assets/Home/customer/customer_edit.png";

const Status = () => {
  const [editMode, setEditMode] = useState(false);
  const [editedValues, setEditedValues] = useState({
    email: "",
    phone: "",
    dob: "",
    gender: "",
  });
  const handleEdit = () => {
    setEditMode(true);
  };

  const handleChange = (field, value) => {
    setEditedValues((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    setEditMode(false); // exit edit mode
  };

  return (
    <>
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
            Machine Status
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
              Machine Status
            </Typography>
            {!editMode ? (
              <Typography
                variant="p"
                sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
              >
                {/* {customerDetailsData?.data?.email} */}
              </Typography>
            ) : (
              <TextField
                // defaultValue={user?.email}
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
              Temperature 1
            </Typography>
            {!editMode ? (
              <Typography
                variant="p"
                sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
              >
                {/* {customerDetailsData?.data?.showaUser?.phone} */}
              </Typography>
            ) : (
              <TextField
                // defaultValue={user?.phone}
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
              Vibration 1
            </Typography>
            {!editMode ? (
              <Typography
                variant="p"
                sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
              >
                {/* {customerDetailsData?.data?.showaUser?.phone} */}
              </Typography>
            ) : (
              <TextField
                // defaultValue={user?.phone}
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
              flexDirection: "column",
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
              }}
            >
              Temperature Chart
            </Typography>
            <Box>Chart Is Coming...</Box>
          </Box>
          <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
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
              }}
            >
              Vibration Chart
            </Typography>
            <Box>Chart Is Coming...</Box>
          </Box>
          <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
        </Box>

        {editMode && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "16px",
            }}
          >
            <Button onClick={handleSubmit} variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Status;
