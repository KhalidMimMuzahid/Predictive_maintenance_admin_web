import { Avatar, Box, Typography } from "@mui/material";

const CustomerNameEmailComponent = ({ props }) => {
  const dummyPhoto = "https://i.ibb.co/85Nc6x7/handsome-boy.webp";
  console.log(props?.row);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        alignItems: "center",
        gap: "17px",
      }}
    >
      <Box>
        <Avatar
          sx={{ width: "36px" }}
          src={props?.row?.showaUser?.photoUrl || dummyPhoto}
        />
      </Box>
      <Box>
        <Typography
          variant="h6"
          component="h6"
          sx={{ fontSize: "12px", fontWeight: "900" }}
        >
          {props?.row?.showaUser?.name?.firstName +
            " " +
            props?.row?.showaUser?.name?.lastName}
        </Typography>{" "}
        <Typography variant="h6" component="h6" sx={{ fontSize: "12px" }}>
          {props?.row?.phone}
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomerNameEmailComponent;
