import { Box, Button, Typography } from "@mui/material";
import React from "react";
import currentOffer from "../../../../../../Assets/Home/feed/current_offer.png";
import OfferIcon from "../../../../../../Assets/Home/feed/offer_icon.png";

const CurrentOffer = () => {
  return (
    <Box sx={{ background: "white", padding: "20px", borderRadius: "4px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: "#5A6872", fontWeight: "600" }}>
          Current Offer
        </Typography>
        <Button
          sx={{
            textTransform: "none",
          }}
        >
          See More
        </Button>
      </Box>
      <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
      <Box
        sx={{
          display: "flex",
          padding: "20px",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={currentOffer} className="current_offer_i" alt="" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                gap: "8px",
              }}
            >
              <img src={OfferIcon} alt="" />
              <Typography sx={{ fontSize: "12px" }}>
                New customer: Sign-up & get. <br />
                15% off your first order...
              </Typography>
            </Box>
            <Box
              className="current_offer_off"
              sx={{
                background: "#24459C",
                borderRadius: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography className="off_text" sx={{ color: "white" }}>
                OFF
              </Typography>
              <Typography className="off_text" sx={{ color: "white" }}>
                15%
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={currentOffer} className="current_offer_i" alt="" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                gap: "8px",
              }}
            >
              <img src={OfferIcon} alt="" />
              <Typography sx={{ fontSize: "12px" }}>
                New customer: Sign-up & get. <br />
                15% off your first order...
              </Typography>
            </Box>
            <Box
              className="current_offer_off"
              sx={{
                background: "#24459C",
                borderRadius: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography className="off_text" sx={{ color: "white" }}>
                OFF
              </Typography>
              <Typography className="off_text" sx={{ color: "white" }}>
                15%
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CurrentOffer;
