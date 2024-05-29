import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useGetMachineDataByIdQuery } from "../../../../../../../../../features/machine/machineSlice";
import editIcon from "../../../../../../../../../Assets/Home/customer/customer_edit.png";

const MachineStatus = ({ customerDetailsData, props }) => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedValues, setEditedValues] = useState({
    email: "",
    phone: "",
    dob: "",
    gender: "",
  });
  const { data: machineData } = useGetMachineDataByIdQuery(props?.machine);
  const handleEdit = () => {
    setEditMode(true);
  };
  console.log(machineData?.data);

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
          Machine Details
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
            Shop Name
          </Typography>
          {!editMode ? (
            <Typography
              variant="p"
              sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
            >
              {machineData?.data?.usedFor?.name}
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
            Address
          </Typography>
          {!editMode ? (
            <Typography
              variant="p"
              sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
            >
              {machineData?.data?.usedFor?.address?.postalCode +
                ", " +
                machineData?.data?.usedFor?.address?.city +
                ", " +
                machineData?.data?.usedFor?.address?.country || "No Data"}
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
            Type of Shop
          </Typography>
          {!editMode ? (
            <Typography
              variant="p"
              sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
            >
              {machineData?.data?.usedFor?.type}
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
            Type of Machine
          </Typography>
          {!editMode ? (
            <Typography
              variant="p"
              sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
            >
              {machineData?.data?.category}
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
            Brand
          </Typography>
          {!editMode ? (
            <Typography
              variant="p"
              sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
            >
              {machineData?.data?.brand}
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
            Model
          </Typography>
          {!editMode ? (
            <Typography
              variant="p"
              sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
            >
              {machineData?.data?.model}
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
            Sensor Section
          </Typography>
          {!editMode ? (
            <Typography
              variant="p"
              sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
            >
              None
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
            Sensor Purpose
          </Typography>
          {!editMode ? (
            <Typography
              variant="p"
              sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
            >
              None
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
            MAC Address
          </Typography>
          {!editMode ? (
            <Typography
              variant="p"
              sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
            >
              None
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

export default MachineStatus;
