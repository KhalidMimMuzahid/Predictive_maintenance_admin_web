import { Delete } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

const LearningResource = ({ learningResource }) => {
  <Box
    sx={{
      background: "#FFFFFF",
      height: "480px",
      borderRadius: "20px",
      padding: "40px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      flexDirection: "column",
    }}
  >
    <Box>
      <Delete sx={{ color: "#F15F5F" }} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <img src={learningResource?.img} alt=""/>
        <Typography
          sx={{ color: "#090A0A", fontSize: "16px", fontWeight: "600" }}
        >
          {learningResource?.title}
        </Typography>
        <Typography>{learningResource?.resourceType}</Typography>
      </Box>
    </Box>
    <Typography>{learningResource?.answer}</Typography>
    <Box />
    <Box>
      {" "}
      <Button
        sx={{
          color: "white",
          background: "#24459C",
          textTransform: "none",
          "&:hover": {
            background: "#24459C",
          },
          padding: "8px 10px",
          borderRadius: "20px",
          width: "160px",
        }}
      >
        Edit
      </Button>
    </Box>
  </Box>;
};

export default LearningResource;

// {
//     title: "How do I use Showa pay to pay?",
//     resourceType: "Service",
//     img: img,
//     answer:
//       "Cash or check: Showa may accept cash or checks for payments, but this may vary depending on the location and local laws personal information and washing machine data. We adhere to strict privacy policies and ensure that all data transmissions between your app and the washing machine are encrypted and secure.",
//   },
