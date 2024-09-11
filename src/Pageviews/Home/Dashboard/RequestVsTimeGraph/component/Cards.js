import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import img1 from "../../../../../../src/Assets/Component/DashboardOrder.png";
import img2 from "../../../../../../src/Assets/Component/dashboardMaintenance.png";
import img3 from "../../../../../../src/Assets/Component/DashboardCompleteOrder.png";
import img4 from "../../../../../../src/Assets/Component/DashboardCancel.png";
import img5 from "../../../../../../src/Assets/Component/DashboardRevinue.png";
import MovingIcon from "@mui/icons-material/Moving";
import { useSelector } from "react-redux";

const Cards = () => {
  const { width, breakpoint } = useSelector((state) => state.browser);

  return (
    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
      {/* card 1 */}
      <Card
        style={{
          borderRadius: "12px",
          backgroundColor: "#F1F4FB",
          width: breakpoint === "lg" ? "300px" : "330px",
          boxShadow: "none",
        }}
      >
        <CardContent sx={{ paddingInline: "25px", paddingBlock: "50px" }}>
          <Box
            sx={{
              display: "flex",
              gap: "50px",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                style={{
                  color: "#243972",
                  fontSize: "18px",
                  fontWeight: "400",
                }}
              >
                Order Received
              </Typography>
              <Typography
                style={{
                  color: "#243972",
                  fontSize: "40px",
                  fontWeight: "700",
                }}
              >
                7,890
              </Typography>
            </Box>
            <img
              style={{ width: "60px", height: "60px" }}
              src={img1}
              alt="webscript"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              marginTop: "10px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                color: "#14B8A6",
                display: "flex",
                gap: "3px",
                fontSize: "18px",
                fontWeight: "400",
              }}
            >
              <MovingIcon />
              <p>20%</p>
            </div>
            <p style={{ color: "gray", fontSize: "14px", fontWeight: "400" }}>
              Since Last Month
            </p>
          </Box>
        </CardContent>
      </Card>

      {/* card 2  */}
      <Card
        style={{
          borderRadius: "12px",
          backgroundColor: "#F1F4FB",
          width: breakpoint === "lg" ? "300px" : "330px",
          boxShadow: "none",
        }}
      >
        <CardContent sx={{ paddingInline: "25px", paddingBlock: "50px" }}>
          <Box
            sx={{
              display: "flex",
              gap: "50px",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                style={{
                  color: "#243972",
                  fontSize: "18px",
                  fontWeight: "400",
                }}
              >
                Maintenance{" "}
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
              style={{ width: "60px", height: "60px" }}
              src={img2}
              alt="webscript"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              marginTop: "10px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                color: "#14B8A6",
                display: "flex",
                gap: "3px",
                fontSize: "18px",
                fontWeight: "400",
              }}
            >
              <MovingIcon />
              <p>20%</p>
            </div>
            <p style={{ color: "gray", fontSize: "14px", fontWeight: "400" }}>
              Since Last Month
            </p>
          </Box>
        </CardContent>
      </Card>

      {/* card 3  */}

      <Card
        style={{
          borderRadius: "12px",
          backgroundColor: "#F1F4FB",
          width: breakpoint === "lg" ? "300px" : "330px",
          boxShadow: "none",
        }}
      >
        <CardContent sx={{ paddingInline: "25px", paddingBlock: "50px" }}>
          <Box
            sx={{
              display: "flex",
              gap: "50px",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                style={{
                  color: "#243972",
                  fontSize: "18px",
                  fontWeight: "400",
                }}
              >
                Complete Orders
              </Typography>
              <Typography
                style={{
                  color: "#243972",
                  fontSize: "40px",
                  fontWeight: "700",
                }}
              >
                2,678
              </Typography>
            </Box>
            <img
              style={{ width: "60px", height: "60px" }}
              src={img3}
              alt="webscript"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              marginTop: "10px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                color: "#14B8A6",
                display: "flex",
                gap: "3px",
                fontSize: "18px",
                fontWeight: "400",
              }}
            >
              <MovingIcon />
              <p>20%</p>
            </div>
            <p style={{ color: "gray", fontSize: "14px", fontWeight: "400" }}>
              Since Last Month
            </p>
          </Box>
        </CardContent>
      </Card>

      {/* card 4*/}
      <Card
        style={{
          borderRadius: "12px",
          backgroundColor: "#F1F4FB",
          width: breakpoint === "lg" ? "300px" : "330px",
          boxShadow: "none",
        }}
      >
        <CardContent sx={{ paddingInline: "25px", paddingBlock: "50px" }}>
          <Box
            sx={{
              display: "flex",
              gap: "50px",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                style={{
                  color: "#243972",
                  fontSize: "18px",
                  fontWeight: "400",
                }}
              >
                Cancellation
              </Typography>
              <Typography
                style={{
                  color: "#243972",
                  fontSize: "40px",
                  fontWeight: "700",
                }}
              >
                7,890
              </Typography>
            </Box>
            <img
              style={{ width: "60px", height: "60px" }}
              src={img4}
              alt="webscript"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              marginTop: "10px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                color: "#F15F5F",
                display: "flex",
                gap: "3px",
                fontSize: "18px",
                fontWeight: "400",
              }}
            >
              <MovingIcon style={{ transform: "rotate(180deg)" }} />
              <p>20%</p>
            </div>
            <p style={{ color: "gray", fontSize: "14px", fontWeight: "400" }}>
              Since Last Month
            </p>
          </Box>
        </CardContent>
      </Card>

      {/* card 5 */}
      <Card
        style={{
          borderRadius: "12px",
          backgroundColor: "#F1F4FB",
          width: breakpoint === "lg" ? "300px" : "330px",
          boxShadow: "none",
        }}
      >
        <CardContent sx={{ paddingInline: "25px", paddingBlock: "50px" }}>
          <Box
            sx={{
              display: "flex",
              gap: "50px",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                style={{
                  color: "#243972",
                  fontSize: "18px",
                  fontWeight: "400",
                }}
              >
                Revenue
              </Typography>
              <Typography
                style={{
                  color: "#243972",
                  fontSize: "40px",
                  fontWeight: "700",
                }}
              >
                ¥78034
              </Typography>
            </Box>
            <img
              style={{ width: "60px", height: "60px" }}
              src={img5}
              alt="webscript"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              marginTop: "10px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                color: "#14B8A6",
                display: "flex",
                gap: "3px",
                fontSize: "18px",
                fontWeight: "400",
              }}
            >
              <MovingIcon />
              <p>20%</p>
            </div>
            <p style={{ color: "gray", fontSize: "14px", fontWeight: "400" }}>
              Since Last Month
            </p>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cards;
