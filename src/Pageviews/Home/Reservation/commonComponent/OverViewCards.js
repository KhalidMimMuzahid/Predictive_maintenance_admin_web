import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import MovingIcon from "@mui/icons-material/Moving";
import totalIcon from "../../../../Assets/Home/reservation/total_res.png";
import OnDemand from "../../../../Assets/Home/reservation/on_demand.png";
import accepted from "../../../../Assets/Home/reservation/accepted.png";
import ongoing from "../../../../Assets/Home/reservation/ongoing.png";
import completed from "../../../../Assets/Home/reservation/completed.png";
import canceled from "../../../../Assets/Home/reservation/canceled.png";
import { useGetReservationOverviewQuery } from "../../../../features/reservation/reservationSlice";
import { useSelector } from "react-redux";

const OverViewCards = () => {
  const { width, breakpoint } = useSelector((state) => state.browser);
  const { data: reservationOverviewData } =
    useGetReservationOverviewQuery("washing-machine");
  return (
    <div
      style={{
        display: "flex",
        gap: "40px",
        flexWrap: "wrap",
        marginTop: "24px",
      }}
    >
      {/* card 1 */}
      <Card
        style={{
          borderRadius: "12px",
          backgroundColor: "#F1F4FB",
          width: breakpoint === "lg" ? "280px" : "350px",
          height: breakpoint === "lg" ? "130px" : "150px",
          boxShadow: "none",
        }}
      >
        <CardContent sx={{ padding: "24px" }}>
          <Box
            sx={{
              display: "flex",
              gap: "24px",
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
                Total Reservation <br /> Request
              </Typography>
              <Typography
                style={{
                  color: "#243972",
                  fontSize: "40px",
                  fontWeight: "700",
                }}
              >
                {reservationOverviewData?.data?.all}
              </Typography>
            </Box>
            <Box
              sx={{
                width: "60px",
                height: "60px",
                borderRadius: "10px",
                background: "#3CBB8F",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={totalIcon} alt="webscript" />
            </Box>
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
          width: breakpoint === "lg" ? "280px" : "350px",
          height: breakpoint === "lg" ? "130px" : "150px",
          boxShadow: "none",
        }}
      >
        <CardContent sx={{ padding: "24px" }}>
          <Box
            sx={{
              display: "flex",
              gap: "24px",
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
                Total On-Demand <br /> Request
              </Typography>
              <Typography
                style={{
                  color: "#243972",
                  fontSize: "40px",
                  fontWeight: "700",
                }}
              >
                {reservationOverviewData?.data?.onDemand}
              </Typography>
            </Box>
            <Box
              sx={{
                width: "60px",
                height: "60px",
                borderRadius: "10px",
                background: "#4B68B1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={OnDemand} alt="webscript" />
            </Box>
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
          width: breakpoint === "lg" ? "280px" : "350px",
          height: breakpoint === "lg" ? "130px" : "150px",
          boxShadow: "none",
        }}
      >
        <CardContent sx={{ padding: "24px" }}>
          <Box
            sx={{
              display: "flex",
              gap: "24px",
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
                Total Accepted <br /> Request
              </Typography>
              <Typography
                style={{
                  color: "#243972",
                  fontSize: "40px",
                  fontWeight: "700",
                }}
              >
                {reservationOverviewData?.data?.accepted}
              </Typography>
            </Box>
            <Box
              sx={{
                width: "60px",
                height: "60px",
                borderRadius: "10px",
                background: "#F57E20",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={accepted} alt="webscript" />
            </Box>
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
          width: breakpoint === "lg" ? "280px" : "350px",
          height: breakpoint === "lg" ? "130px" : "150px",
          boxShadow: "none",
        }}
      >
        <CardContent sx={{ padding: "24px" }}>
          <Box
            sx={{
              display: "flex",
              gap: "24px",
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
                Total Ongoing <br /> Maintenance
              </Typography>
              <Typography
                style={{
                  color: "#243972",
                  fontSize: "40px",
                  fontWeight: "700",
                }}
              >
                {reservationOverviewData?.data?.ongoing}
              </Typography>
            </Box>
            <Box
              sx={{
                width: "60px",
                height: "60px",
                borderRadius: "10px",
                background: "#9C8563",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={ongoing} alt="webscript" />
            </Box>
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
          width: breakpoint === "lg" ? "280px" : "350px",
          height: breakpoint === "lg" ? "130px" : "150px",
          boxShadow: "none",
        }}
      >
        <CardContent sx={{ padding: "24px" }}>
          <Box
            sx={{
              display: "flex",
              gap: "24px",
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
                Total Completed <br /> Request
              </Typography>
              <Typography
                style={{
                  color: "#243972",
                  fontSize: "40px",
                  fontWeight: "700",
                }}
              >
                {reservationOverviewData?.data?.completed}
              </Typography>
            </Box>
            <Box
              sx={{
                width: "60px",
                height: "60px",
                borderRadius: "10px",
                background: "#6024E4",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={completed} alt="webscript" />
            </Box>
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
      {/* card 6 */}
      <Card
        style={{
          borderRadius: "12px",
          backgroundColor: "#F1F4FB",
          width: breakpoint === "lg" ? "280px" : "350px",
          height: breakpoint === "lg" ? "130px" : "150px",
          boxShadow: "none",
        }}
      >
        <CardContent sx={{ padding: "24px" }}>
          <Box
            sx={{
              display: "flex",
              gap: "24px",
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
                Total Canceled <br /> Request
              </Typography>
              <Typography
                style={{
                  color: "#243972",
                  fontSize: "40px",
                  fontWeight: "700",
                }}
              >
                {reservationOverviewData?.data?.canceled}
              </Typography>
            </Box>
            <Box
              sx={{
                width: "60px",
                height: "60px",
                borderRadius: "10px",
                background: "#D74D88",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={canceled} alt="webscript" />
            </Box>
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
              <MovingIcon sx={{ color: "#F15F5F" }} />
              <p style={{ color: "#F15F5F" }}>20%</p>
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

export default OverViewCards;
