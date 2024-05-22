import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import RightSection from "./rightSection/RightSection";
import { useOutletContext, useParams } from "react-router-dom";
import LeftSection from "./leftSection/LeftSection";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MessageModal from "./modal/MessageModal";
import CallModal from "./modal/CallModal";

const ServiceProviderDetails = () => {
  const [isRootServiceProviderPage, setIsRootServiceProviderPage] =
    useOutletContext();
  const [serviceProviderDetails, setServiceProviderDetails] = useState({});
  const [messageModalOpen, setMessageModalOpen] = useState(false);
  const [callModalOpen, setCallModalOpen] = useState(false);

  useEffect(() => {
    setIsRootServiceProviderPage(false);
  }, [isRootServiceProviderPage, setIsRootServiceProviderPage]);

  return (
    <>
      {messageModalOpen && (
        <MessageModal
          messageModalOpen={messageModalOpen}
          setMessageModalOpen={setMessageModalOpen}
        />
      )}
      {callModalOpen && (
        <CallModal
          callModalOpen={callModalOpen}
          setCallModalOpen={setCallModalOpen}
        />
      )}
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0px 0 32px 0",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <Box sx={{ fontSize: "24px", fontWeight: "700", color: "#000000" }}>
              {serviceProviderDetails?.companyBasicInfo?.companyName ||
                "No Company Name Found"}
            </Box>
            <Box sx={{ display: "flex", gap: "4px" }}>
              <Box>Dashboard / </Box>
              <Box> Service Provider /</Box>
              <Box sx={{ fontWeight: "600", color: "#24459C" }}>
                {" "}
                {serviceProviderDetails?.companyBasicInfo?.companyName ||
                  "No Company Name Found"}
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "12px" }}>
            <Button
              onClick={() => {
                setMessageModalOpen(!messageModalOpen);
              }}
              sx={{
                height: "48px",
                width: "48px",
                background: "#DEE5F7",
                borderRadius: "6px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#565B95",
              }}
            >
              <EmailOutlinedIcon />
            </Button>
            <Button
              onClick={() => {
                setCallModalOpen(!callModalOpen);
              }}
              sx={{
                height: "48px",
                width: "48px",
                background: "#DEE5F7",
                borderRadius: "6px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#565B95",
              }}
            >
              <PhoneOutlinedIcon />
            </Button>
            <Button
              sx={{
                height: "48px",
                width: "48px",
                background: "#24459C",
                borderRadius: "6px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                "&:hover": {
                  background: "#24459C",
                },
              }}
            >
              <InfoOutlinedIcon />
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          {/* left sidebar  */}
          <Box
            sx={{
              bgcolor: "white",
              padding: "12px",
              width: "22%",
              borderRadius: "5px",
            }}
          >
            <LeftSection serviceProviderDetails={serviceProviderDetails} />
          </Box>
          {/* right sidebar  */}
          <Box
            sx={{
              bgcolor: "white",
              width: "100%",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              borderRadius: "5px",
            }}
          >
            <RightSection serviceProviderDetails={serviceProviderDetails} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ServiceProviderDetails;
