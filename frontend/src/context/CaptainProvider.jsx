import { createContext, useState } from "react";

export const CaptainContext = createContext(); // ✅ Correct export

const CaptainProvider = ({ children }) => {
  const [captain, setCaptain] = useState({});

  return (
    <CaptainContext.Provider value={{ captain, setCaptain }}>
      {children}
    </CaptainContext.Provider>
  );
};

export default CaptainProvider; // ✅ Export as CaptainProvider
