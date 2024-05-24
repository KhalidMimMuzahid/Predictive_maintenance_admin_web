import { Close } from "@mui/icons-material";
import { Box, Button, Container, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InvitationModal from "../../ServiceProvider/component/InvitationModal";

const AddCustomerModal = ({
  addCustomerModalOpen,
  setAddCustomerModalOpen,
}) => {
  const [invitationModal, setInvitationModal] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData, e) => {
    e.preventDefault();
  };
  return (
    <>
      {invitationModal && (
        <InvitationModal
          invitationModal={invitationModal}
          setInvitationModal={setInvitationModal}
        />
      )}
      <Modal
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        open={addCustomerModalOpen}
      >
        <Container
          sx={{
            width: "35%",
            background: "white",
            borderRadius: "20px",
            padding: "24px",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#24459C",
                textAlign: "center",
              }}
            >
              Add Customer
            </Typography>
            <Button
              sx={{
                color: "#D1D5DB",
                cursor: "pointer",
                position: "absolute",
                top: "0",
                right: "0",
              }}
              onClick={() => {
                setAddCustomerModalOpen(!addCustomerModalOpen);
                //   setCsvFile(null);
              }}
            >
              <Close />
            </Button>
          </Box>

          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              paddingTop: "16px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                mb: "8px",
              }}
            >
              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "#F6F6F6",
                  padding: "16px",
                  border: "none",
                  borderRadius: "4px",
                  color: "#65748B",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                <Typography sx={{ color: "#C7CCD8", fontWeight: "400" }}>
                  Customer Name
                </Typography>
                <input
                  {...register("customer_name")}
                  style={{
                    background: "#F6F6F6",
                    color: "#65748B",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                  className="no-outline-on-input-focus"
                  size="medium"
                  name="customer_name"
                  placeholder="Khubaibul Islam  "
                  label="customer_name"
                />
              </label>

              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "#F6F6F6",
                  padding: "16px",
                  border: "none",
                  borderRadius: "4px",
                  color: "#65748B",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                <Typography sx={{ color: "#C7CCD8", fontWeight: "400" }}>
                  Email Address
                </Typography>
                <input
                  {...register("email")}
                  style={{
                    background: "#F6F6F6",
                    color: "#65748B",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                  className="no-outline-on-input-focus"
                  size="medium"
                  name="email"
                  placeholder="antt.dev@gmail.com"
                  label="Email Address"
                />
              </label>

              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "#F6F6F6",
                  padding: "16px",
                  border: "none",
                  borderRadius: "4px",
                  color: "#65748B",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                <Typography sx={{ color: "#C7CCD8", fontWeight: "400" }}>
                  Phone
                </Typography>
                <input
                  {...register("phone")}
                  style={{
                    color: "#65748B",
                    fontSize: "16px",
                    fontWeight: "700",
                    background: "#F6F6F6",
                  }}
                  className="no-outline-on-input-focus"
                  name="phone"
                  label="Phone"
                  placeholder="+880123544847"
                />
              </label>

              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "#F6F6F6",
                  padding: "16px",
                  border: "none",
                  borderRadius: "4px",
                  color: "#65748B",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                <Typography sx={{ color: "#C7CCD8", fontWeight: "400" }}>
                  Machine
                </Typography>
                <input
                  {...register("machine")}
                  style={{
                    color: "#65748B",
                    fontSize: "16px",
                    fontWeight: "700",
                    background: "#F6F6F6",
                  }}
                  className="no-outline-on-input-focus"
                  name="machine"
                  label="machine"
                  placeholder="08"
                />
              </label>
            </Box>

            {/* {isError && <Typography>{error?.message}</Typography>} */}
            <Box
              sx={{
                padding: "12px 28px",
                display: "flex",
                justifyContent: "end",
                gap: "24px",
              }}
            >
              <Button
                onClick={() => {
                  setAddCustomerModalOpen(!addCustomerModalOpen);
                  //   setCsvFile(null);
                }}
                sx={{
                  width: "160px",
                  height: "36px",
                  borderRadius: "20px",
                  padding: "8px 10px",
                  background: "white",
                  fontSize: "14px",
                  color: "#959596",
                }}
              >
                Cancel
              </Button>
              <button
                onClick={() => setInvitationModal(!invitationModal)}
                type="submit"
                //   disabled={isLoading}
                style={{
                  width: "160px",
                  height: "36px",
                  borderRadius: "20px",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px 10px",
                  background: "#24459C",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#FFFFFF",
                  "&:hover": {
                    background: "#24459C",
                  },
                }}
              >
                Save
                {/* {isLoading ? "Saving..." : "Save"} */}
              </button>
            </Box>
          </form>
        </Container>
      </Modal>
    </>
  );
};

export default AddCustomerModal;
