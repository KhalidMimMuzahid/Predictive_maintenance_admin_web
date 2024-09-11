import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { PermIdentity } from "@mui/icons-material";
import { useSelector } from "react-redux";

const Profile = ({ users, isSuccess }) => {
  const { user } = useSelector((state) => state.auth);
  const { width, breakpoint } = useSelector((state) => state.browser);
  const [profileElement, setProfileElement] = useState(
    <Box sx={{ width: "10%" }}>
      <PermIdentity />
    </Box>
  );

  useEffect(() => {
    if (isSuccess) {
      const secondPerson = users?.find((each) => each?._id !== user?._id);

      const role = secondPerson?.role;
      const photoUrl =
        secondPerson[
          role === "showaUser" ||
          role === "showaAdmin" ||
          role === "showaSubAdmin"
            ? "showaUser"
            : role
        ]?.photoUrl;
      if (photoUrl) {
        setProfileElement(
          <Box sx={{ width: "10%" }}>
            <img
              src={photoUrl}
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
    }
  }, [isSuccess]);

  return profileElement;
};

export default Profile;
