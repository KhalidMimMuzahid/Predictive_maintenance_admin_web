import { Delete } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const LearningResource = ({ learningResource }) => {
  <Box sx={{ background: "red" }}>
    <Delete sx={{ color: "#F15F5F" }} />
    <Box>
      <img src={learningResource?.img} />
      <Typography>{learningResource?.title}</Typography>
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
