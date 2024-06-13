import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import EachMessage from "./EachMessage/EachMessage";

const Messages = ({
  chat,
  users,
  isSuccessForGetUserInformation,
  messages,
}) => {
  const messages2 = {
    users: {
      admin: {
        name: "Showa Admin",
        photoUrl:
          "https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/386460525_2129430194073992_5529452053896751566_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGqVbwy2wFlzJ2lSvQT3A5ltTD349ZYTkS1MPfj1lhORJtEBKrMN-OkYV32QUb8V1h9S9RtXBK6Qi-og34QeQ3q&_nc_ohc=5iP3HhwMIhEQ7kNvgG3mQ41&_nc_ht=scontent.fdac24-3.fna&oh=00_AYBZpZ7AjFlblkB9_I0aYqF5jwzQ3Wp7CWdHmx3SlrgYfA&oe=66609956",
      },
      user: {
        name: "Khubaibul",
        photoUrl:
          "https://scontent.fdac24-1.fna.fbcdn.net/v/t1.6435-9/39536006_510548886039282_3071061063005896704_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEnDwZrus8gNwUfBDa7s7hzJlABS_hPNiEmUAFL-E82Ieqav3r2Za4IJ0Y2Va38kNEym51ySImu03i9NL8UYx0u&_nc_ohc=cA1gsUh7sPwQ7kNvgEadntO&_nc_ht=scontent.fdac24-1.fna&oh=00_AYBXv4S0gnPBZwsGMxK7oypcaVXHEAtPYujXbUIdH5gjHw&oe=6682CD85",
      },
    },
    messages: [
      { message: "Hello Admin. I need some help.", sender: "user" },
      {
        message: "Thank you for reaching out. Tell us how can we help you?",
        sender: "admin",
      },
      {
        message:
          "My washing machine getting trouble. I'm facing huge problems.",
        sender: "user",
      },
      { message: "What kind of problems are you facing sir?", sender: "admin" },
      {
        message:
          "The washing machine producing huge sounds. My apartment is shaking by this sound",
        sender: "user",
      },
      {
        message:
          "Sorry to hear Mam. Ok. Just send us your location and phone number. One of our engineer is going there to solve the issue. Sorry to hear Mam. Ok. Just send us your location and phone number. One of our engineer is going there to solve the issue.",
        sender: "admin",
      },
      {
        message: "8D, House No. 41, Road No. 02, Charkalibari, Mymensingh City",
        sender: "user",
      },
      { message: "Noted.", sender: "admin" },
      {
        message:
          "Please give me update once when our engineer team will reach there.",
        sender: "admin",
      },
      { message: "ok. I'll", sender: "user" },
      { message: "Thank you for your help.", sender: "user" },
      {
        message: "Yes, they are here and trying to solve the problem.",
        sender: "user",
      },
    ],
  };
  return (
    <Box
      sx={{
        padding: "0px 30px 0px 15px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "100%",
        height: "550px",
        overflow: "scroll",
        paddingTop: "10px",
      }}
    >
      {messages?.data?.map((message) => (
        <EachMessage
          message={message}
          users={users}
          isSuccessForGetUserInformation={isSuccessForGetUserInformation}
        />
      ))}
    </Box>
  );
};

export default Messages;
