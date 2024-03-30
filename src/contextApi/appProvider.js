import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [downloadData, setDownloadData] = useState([]);
  const info = { downloadData, setDownloadData };

  return <AppContext.Provider value={info}>{children}</AppContext.Provider>;
};

export default AppProvider;
