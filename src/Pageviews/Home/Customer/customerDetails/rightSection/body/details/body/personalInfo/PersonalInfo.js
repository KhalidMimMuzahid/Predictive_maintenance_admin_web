import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import editIcon from "../../../../../../../../../Assets/Home/customer/customer_edit.png";
import { useGetCustomerDetailsQuery } from "../../../../../../../../../features/customers/customersSlice";

const PersonalInfo = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedValues, setEditedValues] = useState({
    email: "",
    phone: "",
    dob: "",
    gender: "",
  });

  const { _id } = useParams();
  const { data: customerDetailsData } = useGetCustomerDetailsQuery(_id);
  console.log(customerDetailsData?.data?.phone);

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
          Personal Info
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
            Name
          </Typography>
          {!editMode ? (
            <Typography
              variant="p"
              sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
            >
              {customerDetailsData?.data?.showaUser?.name?.firstName +
                " " +
                customerDetailsData?.data?.showaUser?.name?.lastName}
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
            Email
          </Typography>
          {!editMode ? (
            <Typography
              variant="p"
              sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
            >
              {customerDetailsData?.data?.email}
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
              {customerDetailsData?.data?.phone}
            </Typography>
          ) : (
            <TextField
              defaultValue={customerDetailsData?.data?.phone}
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
            Date Of Birth
          </Typography>
          {!editMode ? (
            <Typography
              variant="p"
              sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
            >
              {customerDetailsData?.data?.showaUser?.dateOfBirth}
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
            Gender
          </Typography>
          {!editMode ? (
            <Typography
              variant="p"
              sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
            >
              {customerDetailsData?.data?.showaUser?.gender
                .charAt(0)
                .toUpperCase() +
                customerDetailsData?.data?.showaUser?.gender.slice(1)}
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

export default PersonalInfo;
