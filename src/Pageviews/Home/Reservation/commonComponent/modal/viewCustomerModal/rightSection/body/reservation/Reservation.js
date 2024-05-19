import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import editIcon from "../../../../../../../../../Assets/Home/customer/customer_edit.png";
import CreateInvoiceModal from "../../../../../../../Invoice/modal/CreateInvoiceModal";
import IssuesModal from "../../../../../../Connected/AllReservation/component/modal/IssuesModal";
import AssignServiceProviderModal from "../../../../AssignServiceProviderModal";

const Reservation = ({ customerDetailsData, props }) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [issuesModalOpen, setIssuesModalOpen] = useState(false);
  const [assignServiceProviderModalOpens, setAssignServiceProviderModalOpens] =
    useState(false);
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
  console.log(props);

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
    <>
      {isCreateModalOpen && (
        <CreateInvoiceModal
          isCreateModalOpen={isCreateModalOpen}
          setIsCreateModalOpen={setIsCreateModalOpen}
        />
      )}
      {issuesModalOpen && (
        <IssuesModal
          issuesModalOpen={issuesModalOpen}
          setIssuesModalOpen={setIssuesModalOpen}
          problem={props?.problem}
        />
      )}
      {assignServiceProviderModalOpens && (
        <AssignServiceProviderModal
          assignServiceProviderModalOpens={assignServiceProviderModalOpens}
          setAssignServiceProviderModalOpens={
            setAssignServiceProviderModalOpens
          }
        />
      )}
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
            Reservation Details
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
              Status
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
              Schedule
            </Typography>
            {!editMode ? (
              <Typography
                variant="p"
                sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
              >
                {customerDetailsData?.data?.showaUser?.phone}
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
              alignItems: "center",
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
              Invoice
            </Typography>
            <Button
              onClick={() => setIsCreateModalOpen(!isCreateModalOpen)}
              sx={{
                fontWeight: "600",
                color: "#2196F3",
                fontSize: "14px",
                padding: "0px",
                textTransform: "none",
              }}
            >
              Create
            </Button>
          </Box>
          <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
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
              Issues
            </Typography>
            <Button
              onClick={() => setIssuesModalOpen(!issuesModalOpen)}
              sx={{
                fontWeight: "600",
                color: "#7FC008",
                fontSize: "14px",
                padding: "0px",
                textTransform: "none",
              }}
            >
              View Issues List
            </Button>
          </Box>
          <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
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
              Assign
            </Typography>
            <Button
              onClick={() =>
                setAssignServiceProviderModalOpens(
                  !assignServiceProviderModalOpens
                )
              }
              sx={{
                fontWeight: "600",
                color: "#24459C",
                fontSize: "14px",
                padding: "0px",
                textTransform: "none",
              }}
            >
              Assign Vendor
            </Button>
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

export default Reservation;
