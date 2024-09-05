import React, { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

export const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  const { user } = useSelector((state) => state.auth);
  console.log("Socket", user);
  useEffect(() => {
    setSocket(io("http://localhost:5000"));
  }, []);

  useEffect(() => {
    if (user?._id && socket) {
      console.log("registered");
      socket.emit("register", user?._id);
    }
  }, [socket, user?._id]);

  const info = { socket };
  return (
    <SocketContext.Provider value={info}>{children}</SocketContext.Provider>
  );
};

export default SocketProvider;
