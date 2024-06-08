import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Groups2 } from "@mui/icons-material";

const Profile = ({ groupPhotoUrl, users }) => {
  const [profileElement, setProfileElement] = useState(
    <Box sx={{ width: "20%" }}>
      <Groups2 />
    </Box>
  );

  useEffect(() => {
    if (groupPhotoUrl) {
      setProfileElement(
        <Box sx={{ width: "20%" }}>
          <img
            src={groupPhotoUrl}
            style={{ width: "40px", height: "40px" }}
            alt=""
          />
        </Box>
      );
    }
  }, [groupPhotoUrl]);

  return profileElement;
};

export default Profile;
