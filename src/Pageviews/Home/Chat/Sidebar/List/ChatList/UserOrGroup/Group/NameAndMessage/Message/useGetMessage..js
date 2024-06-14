import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useGetMessage = ({ lastMessage, lastMessageIsSuccess }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState(lastMessage?.message || null);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (lastMessageIsSuccess) {
      if (lastMessage?.type === "message") {
        setMessage(lastMessage?.message);
      } else if (lastMessage?.type === "event") {
        // console.log("For event");
        const event = lastMessage?.event;
        if (event?.type === "creatingGroup") {
          const creatingGroup = event?.creatingGroup;
          const { createdByUser } = creatingGroup;
          //
        } else if (event?.type === "addingMember") {
          const addingMember = event?.addingMember;
          const { addedByUser, addedUser } = addingMember;

          (async () => {
            let addedByUserFirstName, addedUserFirstName;
            const token = localStorage.getItem("user-token");
            const responseForAddedByUser = await fetch(
              `${process.env.REACT_APP_BASE_URL}/user/get-user?_id=${addedByUser}`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  authorization: `Bearer ${JSON.parse(token)}`,
                },
              }
            );
            const responseForAddedUser = await fetch(
              `${process.env.REACT_APP_BASE_URL}/user/get-user?_id=${addedUser}`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  authorization: `Bearer ${JSON.parse(token)}`,
                },
              }
            );

            const addedByUserResData = await responseForAddedByUser.json();
            const addedUserResData = await responseForAddedUser.json();
            const addedByUserData = addedByUserResData?.data;
            const addedUserData = addedUserResData?.data;

            const roleForAddedByUser = addedByUserData?.role;
            addedByUserFirstName =
              addedByUserData[
                roleForAddedByUser === "showaUser" ||
                roleForAddedByUser === "showaAdmin" ||
                roleForAddedByUser === "showaSubAdmin"
                  ? "showaUser"
                  : roleForAddedByUser
              ].name?.firstName;

            const roleForAddedUser = addedUserData?.role;

            addedUserFirstName =
              addedUserData[
                roleForAddedUser === "showaUser" ||
                roleForAddedUser === "showaAdmin" ||
                roleForAddedUser === "showaSubAdmin"
                  ? "showaUser"
                  : roleForAddedUser
              ].name?.firstName;
            setMessage(
              `${
                addedByUser === user?._id ? "You" : addedByUserFirstName
              } added ${addedUser === user?._id ? "You" : addedUserFirstName}`
            );
            setIsLoading(false);
          })();
        } else if (event?.type === " removingMember") {
          const removingMember = event?.removingMember;
          const { removedByUser, removedUser } = removingMember;
        }
      }

      setIsLoading(false);
    }
  }, [lastMessageIsSuccess, lastMessage?._id]);

  return { isLoading, message };
};
