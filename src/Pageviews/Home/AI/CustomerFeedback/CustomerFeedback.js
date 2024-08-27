import { Box, Button, Rating, Typography } from "@mui/material";
import React from "react";
import customer_photo from "../../../../Assets/Home/customer/chat_girl.png";

const CustomerFeedback = () => {
  const feedbacks = [
    {
      user: {
        userPhotoUrl: customer_photo,
        name: "John Doe",
      },
      date: {
        date: "2024-08-20",
        daysAgo: 3,
      },
      ratings: 4.5,
      message:
        "I had a really positive experience with the service. The staff was incredibly helpful and attentive, and they made sure all my needs were met. I would definitely recommend this to my friends and family. There were a few minor issues, but overall, it was a great experience.",
    },
    {
      user: {
        userPhotoUrl: customer_photo,
        name: "Jane Smith",
      },
      date: {
        date: "2024-08-19",
        daysAgo: 4,
      },
      ratings: 3.8,
      message:
        "The service was good, but there were a few areas that could be improved. While the staff was friendly, there were times when I felt that my concerns were not fully addressed. I believe there is potential for growth, and with a few adjustments, this could be a top-notch service.",
    },
    {
      user: {
        userPhotoUrl: customer_photo,
        name: "Alice Johnson",
      },
      date: {
        date: "2024-08-18",
        daysAgo: 5,
      },
      ratings: 5.0,
      message:
        "This service exceeded all my expectations. From the moment I arrived, I was treated with the utmost care and attention. The staff went above and beyond to ensure that I was comfortable and satisfied with everything. I can't recommend this place enough—I'll definitely be returning in the future!",
    },
    {
      user: {
        userPhotoUrl: customer_photo,
        name: "Alice Johnson",
      },
      date: {
        date: "2024-08-18",
        daysAgo: 5,
      },
      ratings: 5.0,
      message:
        "This service exceeded all my expectations. From the moment I arrived, I was treated with the utmost care and attention. The staff went above and beyond to ensure that I was comfortable and satisfied with everything. I can't recommend this place enough—I'll definitely be returning in the future!",
    },
    {
      user: {
        userPhotoUrl: customer_photo,
        name: "Alice Johnson",
      },
      date: {
        date: "2024-08-18",
        daysAgo: 5,
      },
      ratings: 5.0,
      message:
        "This service exceeded all my expectations. From the moment I arrived, I was treated with the utmost care and attention. The staff went above and beyond to ensure that I was comfortable and satisfied with everything. I can't recommend this place enough—I'll definitely be returning in the future!",
    },
  ];

  return (
    <Box
      sx={{
        background: "#FFFFFF",
        padding: "20px",
        borderRadius: "8px",
        width: "100%",
      }}
    >
      <Typography sx={{ fontSize: "24px", fontWeight: "600", color: "black" }}>
        Customer Feedback
      </Typography>
      <Box sx={{ marginTop: "24px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            height: "220px",
            overflow: "scroll",
          }}
        >
          {feedbacks?.map((feedback, i) => (
            <Box sx={{ display: "flex", alignItems: "center", gap: "32px" }}>
              <img src={feedback?.user?.userPhotoUrl} alt="" />
              <Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <Typography
                    sx={{
                      color: "#000000",
                      fontSize: "17px",
                      fontWeight: "600",
                    }}
                  >
                    {feedback?.user?.name}
                  </Typography>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                  >
                    <Typography sx={{ color: "#BDBDBD", fontSize: "14px" }}>
                      {feedback?.date?.date}
                    </Typography>
                    <span style={{ color: "#BDBDBD", fontSize: "14px" }}>
                      |
                    </span>
                    <Typography sx={{ color: "#BDBDBD", fontSize: "14px" }}>
                      {feedback?.date?.daysAgo}
                    </Typography>
                  </Box>
                </Box>
                <Rating
                  name="simple-controlled"
                  value={feedback?.ratings}
                  sx={{ fontSize: "14px" }}
                />
                <Typography sx={{ color: "#090A0A" }}>
                  {feedback?.message}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Button
          sx={{ color: "#090A0A", textTransform: "none", marginTop: "24px" }}
        >
          + Show More Reviews
        </Button>
      </Box>
    </Box>
  );
};

export default CustomerFeedback;
