import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Groups2 } from "@mui/icons-material";
import { useSelector } from "react-redux";

const Profile = ({ groupPhotoUrl, users }) => {
  const { width, breakpoint } = useSelector((state) => state.browser);
  const [profileElement, setProfileElement] = useState(
    <Box sx={{ width: "10%" }}>
      <Groups2 />
    </Box>
  );

  useEffect(() => {
    if (groupPhotoUrl) {
      setProfileElement(
        <Box sx={{ width: "10%" }}>
          <img
            src={groupPhotoUrl}
            style={{
              width: breakpoint === "lg" ? "32px" : "40px",
              height: breakpoint === "lg" ? "32px" : "40px",
              borderRadius: "100%",
            }}
            alt=""
          />
        </Box>
      );
    }
  }, [groupPhotoUrl]);

  return profileElement;
};

export default Profile;
