import { createContext, useContext, useState } from "react";

export const SurveyContext = createContext();

export const useResults = () => {
  return useContext(SurveyContext);
};

export default function SurveyProvider({ children }) {
  const [results, setResults] = useState({});

  return (
    <SurveyContext.Provider
      value={{
        results,
        setResults
      }}
    >
      {children}
    </SurveyContext.Provider>
  )
};