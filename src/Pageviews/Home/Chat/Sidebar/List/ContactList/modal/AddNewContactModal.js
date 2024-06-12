import { Close, Done } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  useGetMyAllChatListQuery,
  usePostCreatePersonalChatByEmailOrPhoneMutation,
} from "../../../../../../../features/chat/chatSlice";
import { toast } from "react-toastify";

const AddNewContactModal = ({
  isAddNewContactModalOpen,
  setIsAddNewContactModalOpen,
  setChatOrContact,
}) => {
  const [
    postCreatePersonalChat,
    { data, isError, error, isLoading, isSuccess },
  ] = usePostCreatePersonalChatByEmailOrPhoneMutation();
  const { refetch: refetchMyChatList } = useGetMyAllChatListQuery();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message);
      refetchMyChatList();
      setChatOrContact("chat");
    } else if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isSuccess, isError]);

  const onSubmit = (formData, e) => {
    e.preventDefault();
    postCreatePersonalChat(formData?.mobile_numberOrEmail);
    console.log(formData);
  };
  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={isAddNewContactModalOpen}
    >
      <Container
        sx={{
          width: "30%",
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
            Add New Contact
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
              setIsAddNewContactModalOpen(!isAddNewContactModalOpen);
              //   setCsvFile(null);
            }}
          >
            <Close />
          </Button>
        </Box>

        {isSuccess ? (
          <Box>
            <Box
              sx={{
                padding: "48px",
                display: "flex",
                flexDirection: "column",
                gap: "20px 0",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  border: "2px solid #03A600",
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "100%",
                }}
              >
                <Done sx={{ color: "#03A600", fontSize: "36px" }}></Done>
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px 0",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ fontSize: "24px", color: "#646565", fontWeight: "700" }}
                >
                  Saved
                </Typography>
                <Typography
                  sx={{ fontSize: "14px", color: "#9BA1AD", fontWeight: "400" }}
                >
                  A new contact has been saved in you contact.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                padding: "12px 28px",
                display: "flex",
                justifyContent: "end",
                gap: "24px",
              }}
            >
              <Button
                onClick={() =>
                  setIsAddNewContactModalOpen(!isAddNewContactModalOpen)
                }
                sx={{
                  textTransform: "none",
                  width: "160px",
                  height: "36px",
                  borderRadius: "20px",
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
                Okay
              </Button>
            </Box>
          </Box>
        ) : (
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
                gap: "16px",
                mb: "8px",
              }}
            >
              <TextField
                size="small"
                id="outlined-basic"
                variant="outlined"
                {...register("mobile_numberOrEmail")}
                sx={{
                  background: "#F6F6F6",
                  border: "none",
                  borderRadius: "4px",
                  color: "#65748B",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
                type="text"
                label="Mobile Number Or Email"
              />
            </Box>
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
                  setIsAddNewContactModalOpen(!isAddNewContactModalOpen);
                }}
                sx={{
                  textTransform: "none",
                  width: "160px",
                  height: "36px",
                  borderRadius: "20px",
                  padding: "8px 10px",
                  background: "#F6F6F6",
                  fontSize: "14px",
                  color: "#959596",
                }}
              >
                Cancel
              </Button>
              <Button
                sx={{
                  textTransform: "none",
                  width: "160px",
                  height: "36px",
                  borderRadius: "20px",
                  padding: "8px 10px",
                  background: "#24459C",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#FFFFFF",
                  "&:hover": {
                    background: "#24459C",
                  },
                }}
                type="submit"
              >
                Send
              </Button>
            </Box>
          </form>
        )}
      </Container>
    </Modal>
  );
};

export default AddNewContactModal;
