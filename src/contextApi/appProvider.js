import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [downloadData, setDownloadData] = useState({});
  const [bid_id, setBid_id] = useState("");
  const info = {
    downloadData,
    setDownloadData,
    bid_id,
    setBid_id,
  };

  return <AppContext.Provider value={info}>{children}</AppContext.Provider>;
};

export default AppProvider;
