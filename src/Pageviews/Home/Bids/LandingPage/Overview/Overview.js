import React from "react";
import { Moving } from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";
import img1 from "../../../../../Assets/Component/message.png";
import img2 from "../../../../../Assets/Component/on_demand.png";
import img3 from "../../../../../Assets/Component/accepted.png";
import img4 from "../../../../../Assets/Component/ongoing.png";
import img5 from "../../../../../Assets/Component/completed.png";
import img6 from "../../../../../Assets/Component/canceled.png";
import img7 from "../../../../../Assets/Component/earning.png";

const Overview = () => {
  return (
    <Box
      sx={{
        background: "white",
        marginTop: "24px",
        padding: "20px",
        borderRadius: "4px",
      }}
    >
      <Box>
        <Typography>Overview</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          marginTop: "24px",
        }}
      >
        {/* card 1 */}
        <Card
          sx={{
            borderRadius: "12px",
            backgroundColor: "#F1F4FB",
            width: "350px",
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
                  Total Bidding
                </Typography>
                <Typography
                  style={{
                    color: "#243972",
                    fontSize: "40px",
                    fontWeight: "700",
                  }}
                >
                  07
                </Typography>
              </Box>
              <Box>
                <Box
                  sx={{
                    background: "#3CBB8F",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src={img1}
                    alt="webscript"
                  />
                </Box>
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
                <Moving />
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
            width: "350px",
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
                  Total On-Demand <br /> Bidding
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
              <Box>
                <Box
                  sx={{
                    background: "#4B68B1",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src={img2}
                    alt="webscript"
                  />
                </Box>
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
                <Moving />
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
            width: "350px",
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
                  Total Accepted Bidding
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
              <Box>
                <Box
                  sx={{
                    background: "#F57E20",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src={img3}
                    alt="webscript"
                  />
                </Box>
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
                <Moving />
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
            width: "350px",
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
                  Total Ongoing Bidding
                </Typography>
                <Typography
                  style={{
                    color: "#243972",
                    fontSize: "40px",
                    fontWeight: "700",
                  }}
                >
                  7,890{" "}
                </Typography>
              </Box>
              <Box>
                <Box
                  sx={{
                    background: "#9C8563",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src={img4}
                    alt="webscript"
                  />
                </Box>
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
                <Moving style={{ transform: "rotate(180deg)" }} />
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
            width: "350px",
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
                  Total Completed Bidding
                </Typography>
                <Typography
                  style={{
                    color: "#243972",
                    fontSize: "40px",
                    fontWeight: "700",
                  }}
                >
                  2,678{" "}
                </Typography>
              </Box>
              <Box>
                <Box
                  sx={{
                    background: "#6024E4",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src={img5}
                    alt="webscript"
                  />
                </Box>
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
                <Moving />
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
            width: "350px",
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
                  Total Canceled Bidding
                </Typography>
                <Typography
                  style={{
                    color: "#243972",
                    fontSize: "40px",
                    fontWeight: "700",
                  }}
                >
                  50
                </Typography>
              </Box>
              <Box>
                <Box
                  sx={{
                    background: "#D74D88",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src={img6}
                    alt="webscript"
                  />
                </Box>
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
                <Moving />
                <p>20%</p>
              </div>
              <p style={{ color: "gray", fontSize: "14px", fontWeight: "400" }}>
                Since Last Month
              </p>
            </Box>
          </CardContent>
        </Card>

        {/* card 7 */}
        <Card
          style={{
            borderRadius: "12px",
            backgroundColor: "#F1F4FB",
            width: "350px",
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
                  Total Amount Earn from Bidding{" "}
                </Typography>
                <Typography
                  style={{
                    color: "#243972",
                    fontSize: "40px",
                    fontWeight: "700",
                  }}
                >
                  27,890
                </Typography>
              </Box>
              <Box>
                <Box
                  sx={{
                    background: "#14B8A6 ",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src={img7}
                    alt="webscript"
                  />
                </Box>
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
                <Moving />
                <p>20%</p>
              </div>
              <p style={{ color: "gray", fontSize: "14px", fontWeight: "400" }}>
                Since Last Month
              </p>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Overview;
