import { Add, Category, Upload } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import offer from "../../../Assets/Home/service_provider/offers.png";
import { useState } from "react";
import AddNewOfferModal from "./component/modal/AddNewOfferModal";

const OffersScreen = () => {
  const [addNewOfferModalOpen, setAddNewOfferModalOpen] = useState(false);
  return (
    <>
      <AddNewOfferModal
        addNewOfferModalOpen={addNewOfferModalOpen}
        setAddNewOfferModalOpen={setAddNewOfferModalOpen}
      />
      <Box sx={{ padding: "40px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
              Offers
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Typography>Dashboard / </Typography>
              <Typography sx={{ color: "#24459C", fontWeight: "600" }}>
                Offers
              </Typography>
            </Box>
          </Box>
          <Box sx={{ gap: "12px" }}>
            <Button
              style={{
                backgroundColor: "white",
                color: "black",
                marginRight: "12px",
              }}
            >
              <Upload sx={{ marginRight: "8px" }} />
              Import
            </Button>
            <Button
              style={{
                backgroundColor: "white",
                color: "black",
                marginRight: "12px",
              }}
            >
              <Category sx={{ marginRight: "8px" }} />
              Category
            </Button>
            <Button
              onClick={() => setAddNewOfferModalOpen(!addNewOfferModalOpen)}
              style={{ backgroundColor: "#24459c", color: "white" }}
            >
              <Add sx={{ marginRight: "8px" }} />
              Add New Offer
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "24px",
            padding: "24px 0",
            borderRadius: "4px",
          }}
        >
          <Box
            sx={{ background: "white", width: "322px", borderRadius: "4px" }}
          >
            <img src={offer} alt="" />
            <Box
              sx={{
                padding: "16px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{ color: "#111F42", fontSize: "16px", fontWeight: "600" }}
              >
                WASHMAN2023
              </Typography>
              <Typography
                sx={{
                  background: "#D5DDF3",
                  color: "#24459C",
                  borderRadius: "20px",
                  fontSize: "14px",
                  padding: "2px 8px",
                }}
              >
                Maintenance
              </Typography>
            </Box>
            <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
            <Box
              sx={{
                padding: "16px",
              }}
            >
              <Typography
                sx={{ color: "#4A5982", fontSize: "14px", fontWeight: "400" }}
              >
                20% Discount on your maintenance package (up to ¥5000) for basic
                packages.
              </Typography>
              <Typography
                sx={{ color: "#4A5982", fontSize: "12px", fontWeight: "400" }}
              >
                Valid till January 06, 2023
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{ background: "white", width: "322px", borderRadius: "4px" }}
          >
            <img src={offer} alt="" />
            <Box
              sx={{
                padding: "16px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{ color: "#111F42", fontSize: "16px", fontWeight: "600" }}
              >
                WASHMAN2023
              </Typography>
              <Typography
                sx={{
                  background: "#D5DDF3",
                  color: "#24459C",
                  borderRadius: "20px",
                  fontSize: "14px",
                  padding: "2px 8px",
                }}
              >
                Maintenance
              </Typography>
            </Box>
            <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
            <Box
              sx={{
                padding: "16px",
              }}
            >
              <Typography
                sx={{ color: "#4A5982", fontSize: "14px", fontWeight: "400" }}
              >
                20% Discount on your maintenance package (up to ¥5000) for basic
                packages.
              </Typography>
              <Typography
                sx={{ color: "#4A5982", fontSize: "12px", fontWeight: "400" }}
              >
                Valid till January 06, 2023
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{ background: "white", width: "322px", borderRadius: "4px" }}
          >
            <img src={offer} alt="" />
            <Box
              sx={{
                padding: "16px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{ color: "#111F42", fontSize: "16px", fontWeight: "600" }}
              >
                WASHMAN2023
              </Typography>
              <Typography
                sx={{
                  background: "#D5DDF3",
                  color: "#24459C",
                  borderRadius: "20px",
                  fontSize: "14px",
                  padding: "2px 8px",
                }}
              >
                Maintenance
              </Typography>
            </Box>
            <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
            <Box
              sx={{
                padding: "16px",
              }}
            >
              <Typography
                sx={{ color: "#4A5982", fontSize: "14px", fontWeight: "400" }}
              >
                20% Discount on your maintenance package (up to ¥5000) for basic
                packages.
              </Typography>
              <Typography
                sx={{ color: "#4A5982", fontSize: "12px", fontWeight: "400" }}
              >
                Valid till January 06, 2023
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{ background: "white", width: "322px", borderRadius: "4px" }}
          >
            <img src={offer} alt="" />
            <Box
              sx={{
                padding: "16px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{ color: "#111F42", fontSize: "16px", fontWeight: "600" }}
              >
                WASHMAN2023
              </Typography>
              <Typography
                sx={{
                  background: "#D5DDF3",
                  color: "#24459C",
                  borderRadius: "20px",
                  fontSize: "14px",
                  padding: "2px 8px",
                }}
              >
                Maintenance
              </Typography>
            </Box>
            <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
            <Box
              sx={{
                padding: "16px",
              }}
            >
              <Typography
                sx={{ color: "#4A5982", fontSize: "14px", fontWeight: "400" }}
              >
                20% Discount on your maintenance package (up to ¥5000) for basic
                packages.
              </Typography>
              <Typography
                sx={{ color: "#4A5982", fontSize: "12px", fontWeight: "400" }}
              >
                Valid till January 06, 2023
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default OffersScreen;
