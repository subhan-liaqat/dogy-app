import { createContext, useState } from "react";

export const DogyContext = createContext();

export default function DogyContextProvider({ children }) {
  const [data, setData] = useState(null);

  return (
    <DogyContext.Provider value={{ data, setData }}>
      {children}
    </DogyContext.Provider>
  );
}
