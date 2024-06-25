import { Delete, MoreHoriz, Upload } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import img from "../../../../../Assets/Home/helpai/unsplash_9wY2ofzQ9Us.png";
import LearningResource from "./LearningResource";
import { useState } from "react";
import CreateNewResourcesModal from "./modal/CreateNewResourcesModal";

const LearningResources = () => {
  const [learningResourcesOpen, setLearningResourcesOpen] = useState(false)
  const learningResources = [
    {
      title: "How do I use Showa pay to pay?",
      resourceType: "Service",
      img: img,
      answer:
        "Cash or check: Showa may accept cash or checks for payments, but this may vary depending on the location and local laws personal information and washing machine data. We adhere to strict privacy policies and ensure that all data transmissions between your app and the washing machine are encrypted and secure.",
    },
    {
      title: "How do I use Showa pay to pay?",
      resourceType: "Service",
      img: img,
      answer:
        "Cash or check: Showa may accept cash or checks for payments, but this may vary depending on the location and local laws personal information and washing machine data. We adhere to strict privacy policies and ensure that all data transmissions between your app and the washing machine are encrypted and secure.",
    },
    {
      title: "How do I use Showa pay to pay?",
      resourceType: "Service",
      img: img,
      answer:
        "Cash or check: Showa may accept cash or checks for payments, but this may vary depending on the location and local laws personal information and washing machine data. We adhere to strict privacy policies and ensure that all data transmissions between your app and the washing machine are encrypted and secure.",
    },
    {
      title: "How do I use Showa pay to pay?",
      resourceType: "Service",
      img: img,
      answer:
        "Cash or check: Showa may accept cash or checks for payments, but this may vary depending on the location and local laws personal information and washing machine data. We adhere to strict privacy policies and ensure that all data transmissions between your app and the washing machine are encrypted and secure.",
    },
  ];
  return (
<>
  {
    learningResourcesOpen && <CreateNewResourcesModal learningResourcesOpen={learningResources} setLearningResourcesOpen={setLearningResourcesOpen}/>
  }    
  <Box sx={{ padding: "40px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
            Learning Resources
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Typography>Dashboard / </Typography>
            <Typography sx={{ color: "#24459C", fontWeight: "600" }}>
              Learning Resources
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Button
            onClick={() =>
              setLearningResourcesOpen(!learningResourcesOpen)
            }
            sx={{
              backgroundColor: "#24459c",
              color: "white",
              textTransform: "none",
              borderRadius: "8px",
              padding: "6px 32px",
              fontWeight: "500",
              "&:hover": {
                background: "#24459C",
              },
            }}
          >
            Create New Resources
          </Button>
          <FormControl
            sx={{
              m: 1,
              minWidth: 180,
              backgroundColor: "white",
              borderRadius: "10px",
            }}
            size="small"
          >
            <InputLabel id="demo-select-small-label">All Resources</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              //   value={provider}
              label="All Resources"
              //   onChange={handleChange}
            >
              <MenuItem value={"All Resources"}>All Resources</MenuItem>
              <MenuItem value={"App"}>App</MenuItem>
              <MenuItem value={"Service"}>Service</MenuItem>
              <MenuItem value={"Security"}>Security</MenuItem>
            </Select>
          </FormControl>
          <MoreHoriz />
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "24px", marginTop: "12px" }}>
        {learningResources?.map((learningResource) => (
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
              position: "relative",
            }}
          >
            <Box>
              <Delete
                sx={{
                  color: "#F15F5F",
                  position: "absolute",
                  top: "24px",
                  right: "24px",
                }}
              />
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
          </Box>
        ))}
      </Box>
    </Box>

</>
  );
};

export default LearningResources;
