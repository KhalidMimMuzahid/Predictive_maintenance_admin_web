import { Avatar, Box, Typography } from "@mui/material";

const CustomerNameEmailComponent = (props) => {
  const dummyPhoto = "https://i.ibb.co/85Nc6x7/handsome-boy.webp";
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
          alt={`${props?.value?.firstNameAlphabet}`}
          src={props?.value?.photoAddress || dummyPhoto}
        />
      </Box>
      <Box>
        <Typography
          variant="h6"
          component="h6"
          sx={{ fontSize: "12px", fontWeight: "900" }}
        >
          {props?.value?.firstNameAlphabet ||
            "" + props?.value?.lastNameAlphabet ||
            ""}
        </Typography>{" "}
        <Typography variant="h6" component="h6" sx={{ fontSize: "12px" }}>
          phone
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomerNameEmailComponent;
