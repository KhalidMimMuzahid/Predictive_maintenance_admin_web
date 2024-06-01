import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useGetCustomerDetailsBySelectQueryQuery } from "../../../../../../../../../../features/customers/customersSlice";

const Message = ({ lastMessage, lastMessageIsSuccess, users }) => {
  const [message, setMessage] = useState(lastMessage?.message || "");
  // console.log(lastMessage);

  const { data: addedByUserData, refetch: addedByUserRefetch } =
    useGetCustomerDetailsBySelectQueryQuery();
  console.log(addedByUserData);

  useEffect(() => {
    if (lastMessageIsSuccess) {
      if (lastMessage?.type === "event") {
        console.log("For event")
        const event = lastMessage?.event;
        if (event?.type === "creatingGroup") {
          const creatingGroup = event?.creatingGroup;
          const { createdByUser } = creatingGroup;
          //
        } else if (event?.type === "addingMember") {
        
          const addingMember = event?.addingMember;
          const { addedByUser, addedUser } = addingMember;
          console.log("For addingMember")
          addedByUserRefetch({
            _id: addedByUser,
            rootUserField: "role",
            extendedUserFields: "name photoUrl",
          });
          //
        } else if (event?.type === " removingMember") {
          const removingMember = event?.removingMember;
          const { removedByUser, removedUser } = removingMember;
        }
      }
    }
  }, [lastMessageIsSuccess]);

  return (
    <Box>
      <Typography
        sx={{
          color: "#56638D",
          fontSize: "12px",
          fontWeight: "500",
          textAlign: "start",
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default Message;
