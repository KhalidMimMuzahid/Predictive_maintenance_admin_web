import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { PermIdentity } from "@mui/icons-material";
import { useSelector } from "react-redux";
import Name from "../NameAndMessage/Name";

const Profile = ({
  selectedChat,
  // isSuccessForChatByChat_id, isSuccessForUsers
}) => {
  const { user } = useSelector((state) => state.auth);
  const [profileElement, setProfileElement] = useState(
    <Box>
      <PermIdentity />
    </Box>
  );

  useEffect(() => {
    if (selectedChat?.shouldRefresh) {
      const secondPerson = selectedChat?.users?.find(
        (each) => each?._id !== user?._id
      );
      console.log(secondPerson);

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
          <Box sx={{ display: "flex" }}>
            <img
              src={photoUrl}
              style={{ width: "40px", height: "40px", borderRadius: "100%" }}
              alt=""
            />
            <Name
              users={selectedChat?.users}
              isSuccess={selectedChat?.shouldRefresh}
            />
          </Box>
        );
      }
    }
  }, [selectedChat?.shouldRefresh]);

  return profileElement;
};

export default Profile;
