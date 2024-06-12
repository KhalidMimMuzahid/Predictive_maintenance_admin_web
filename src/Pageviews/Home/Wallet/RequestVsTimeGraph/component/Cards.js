import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import img1 from "../../../../../../src/Assets/Component/withdraw.png";
import img2 from "../../../../../../src/Assets/Component/balance.png";
import img3 from "../../../../../../src/Assets/Component/point.png";

const Cards = () => {
  return (
    <div style={{ display: "flex", gap: "40px", marginTop: "24px" }}>
      {/* card 1  */}
      <Card style={{ borderRadius: "10px", boxShadow: "none" }}>
        <CardContent sx={{ paddingInline: "20px", paddingBlock: "50px" }}>
          <Box sx={{ display: "flex", gap: "50px" }}>
            <Box>
              <Typography
                style={{
                  color: "#243972",
                  fontSize: "18px",
                  fontWeight: "400",
                }}
              >
                Withdraw Request
              </Typography>
              <Typography
                style={{
                  color: "#243972",
                  fontSize: "40px",
                  fontWeight: "700",
                }}
              >
                7,89
              </Typography>
            </Box>
            <img
              src={img1}
              style={{ width: "80px", height: "80px" }}
              alt="webscript"
            />
          </Box>
        </CardContent>
      </Card>

      {/* card 2  */}
      <Card style={{ borderRadius: "10px", boxShadow: "none" }}>
        <CardContent sx={{ paddingInline: "20px", paddingBlock: "50px" }}>
          <Box sx={{ display: "flex", gap: "50px" }}>
            <Box>
              <Typography
                style={{
                  color: "#243972",
                  fontSize: "18px",
                  fontWeight: "400",
                }}
              >
                Showa Balance
              </Typography>
              <Typography
                style={{
                  color: "#243972",
                  fontSize: "40px",
                  fontWeight: "700",
                }}
              >
                ¥17340
              </Typography>
            </Box>
            <img
              src={img2}
              style={{ width: "80px", height: "80px" }}
              alt="webscript"
            />
          </Box>
        </CardContent>
      </Card>

      {/* card 3  */}
      <Card style={{ borderRadius: "10px", boxShadow: "none" }}>
        <CardContent sx={{ paddingInline: "20px", paddingBlock: "50px" }}>
          <Box sx={{ display: "flex", gap: "50px" }}>
            <Box>
              <Typography
                style={{
                  color: "#243972",
                  fontSize: "18px",
                  fontWeight: "400",
                }}
              >
                Showa Point
              </Typography>
              <Typography
                style={{
                  color: "#243972",
                  fontSize: "40px",
                  fontWeight: "700",
                }}
              >
                17340
              </Typography>
            </Box>
            <img
              src={img3}
              style={{ width: "80px", height: "80px" }}
              alt="webscript"
            />
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cards;
