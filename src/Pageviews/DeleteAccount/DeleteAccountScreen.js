import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import logo from "../../Assets/Component/logo.png";
import name from "../../Assets/Component/project_logo.png";
import { useForm } from "react-hook-form";
import { useDeleteMyAccountMutation } from "../../features/extraData/extraDataSlice";
import { toast } from "react-toastify";

const DeleteAccountScreen = () => {
  const [deleteMyAccount, { data, isError, error, isLoading, isSuccess }] =
    useDeleteMyAccountMutation();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data?.name_or_email);
    deleteMyAccount(data?.name_or_email);
  };

  useEffect(() => {
    if (isSuccess) {
      reset();
      toast.success(data?.message);
    } else if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isSuccess, isError]);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: "40%",
          background: "#D5DCED",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={logo} alt="" />
        <img src={name} alt="" />
      </Box>
      <Box
        sx={{
          width: "60%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "28px", fontWeight: "700" }}>
            Submit Request for Delete account and <br /> associated data of your
            account
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "12px",
                width: "100%",
                marginY: "21px",
              }}
            >
              <Typography
                sx={{
                  background: "#90F9D5",
                  padding: "10px 16px",
                  border: "1.5px solid #BBBBBB",
                  borderRadius: "4px",
                }}
              >
                Account Information
              </Typography>
              <input
                {...register("name_or_email")}
                placeholder="Registered email/mobile number"
                type="text"
                style={{ width: "63%", border: "1.5px solid #BBBBBB" }}
              />
            </Box>
            <input
              type="submit"
              style={{
                width: "100%",
                backgroundColor: "#24459c",
                color: "white",
                textTransform: "none",
                borderRadius: "8px",
                padding: "12px 0px",
                border: "none",
                fontWeight: "500",
                "&:hover": {
                  background: "#24459C",
                },
              }}
            />
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default DeleteAccountScreen;
