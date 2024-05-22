import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import editIcon from "../../../../../../../../../Assets/Home/customer/customer_edit.png";
import { useGetCustomerDetailsQuery } from "../../../../../../../../../features/customers/customersSlice";

const Address = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedValues, setEditedValues] = useState({
    postalCode: "",
    prefecture: "",
    address1: "",
    address2: "",
    occupation: "",
  });
  const { _id } = useParams();
  const { data: customerDetailsData } = useGetCustomerDetailsQuery(_id);

  const handleEdit = () => {
    setEditedValues({
      postalCode: user?.postalCode,
      prefecture: user?.prefecture,
      address1: user?.streetAddress,
      address2: user?.cityAddress,
      occupation: user?.occupation,
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
          Address
        </Typography>

        {!editMode && (
          <Button onClick={handleEdit}>
            <img src={editIcon} alt="" />
          </Button>
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
          Postal Code:
        </Typography>

        {!editMode ? (
          <Typography
            variant="p"
            sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
          >
            {
              customerDetailsData?.data?.showaUser?.addresses[0].address
                ?.postalCode
            }
          </Typography>
        ) : (
          <TextField
            defaultValue={
              customerDetailsData?.data?.showaUser?.addresses[0].address
                ?.postalCode
            }
            onChange={(e) => handleChange("postalCode", e.target.value)}
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
          Prefecture
        </Typography>

        {!editMode ? (
          <Typography
            variant="p"
            sx={{
              fontWeight: "600",
              color: "#6B7280",
              fontSize: "14px",
              textTransform: "uppercase",
            }}
          >
            {
              customerDetailsData?.data?.showaUser?.addresses[0].address
                ?.prefecture
            }
          </Typography>
        ) : (
          <TextField
            defaultValue={
              customerDetailsData?.data?.showaUser?.addresses[0].address
                ?.prefecture
            }
            onChange={(e) => handleChange("prefecture", e.target.value)}
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
          Address1:
        </Typography>

        {!editMode ? (
          <Typography
            variant="p"
            sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
          >
            {customerDetailsData?.data?.showaUser?.addresses[0].address
              ?.roomNumber +
              ", " +
              customerDetailsData?.data?.showaUser?.addresses[0].address
                ?.buildingName +
              "," +
              customerDetailsData?.data?.showaUser?.addresses[0].address
                ?.street}
          </Typography>
        ) : (
          <TextField
            defaultValue={
              customerDetailsData?.data?.showaUser?.addresses[0].address
                ?.roomNumber +
              ", " +
              customerDetailsData?.data?.showaUser?.addresses[0].address
                ?.buildingName +
              "," +
              customerDetailsData?.data?.showaUser?.addresses[0].address?.street
            }
            variant="outlined"
            onChange={(e) => handleChange("address1", e.target.value)}
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
          Address2:
        </Typography>
        {!editMode ? (
          <Typography variant="p">
            <Typography
              variant="p"
              sx={{
                fontWeight: "600",
                color: "#6B7280",
                fontSize: "14px",
                textTransform: "uppercase",
              }}
            >
              {customerDetailsData?.data?.showaUser?.addresses[0].address
                ?.city +
                ", " +
                customerDetailsData?.data?.showaUser?.addresses[0].address
                  ?.country}
            </Typography>
          </Typography>
        ) : (
          <TextField
            defaultValue={
              customerDetailsData?.data?.showaUser?.addresses[0].address?.city +
              ", " +
              customerDetailsData?.data?.showaUser?.addresses[0].address
                ?.country
            }
            onChange={(e) => handleChange("cityAddress", e.target.value)}
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
          Occupation:
        </Typography>
        {!editMode ? (
          <Typography variant="p">
            <Typography
              variant="p"
              sx={{
                fontWeight: "600",
                color: "#6B7280",
                fontSize: "14px",
              }}
            >
              {customerDetailsData?.data?.showaUser?.occupation}
            </Typography>
          </Typography>
        ) : (
          <TextField
            defaultValue={customerDetailsData?.data?.showaUser?.occupation}
            onChange={(e) => handleChange("occupation", e.target.value)}
            variant="outlined"
            fullWidth
          />
        )}
      </Box>
      <hr style={{ background: "#E6E8F0", opacity: "20%" }} />

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

export default Address;
