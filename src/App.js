import React, { useState, createContext } from "react";
import Title from "./components/Title/Title.css";
import Cards from "./components/Cards/Cards";
//styles
import GlobalStyles from "./GlobalStyles";
export const AppContext = createContext();

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      <div>
        <GlobalStyles />
        <Title />

        <Cards />
      </div>
    </AppContext.Provider>
  );
};

export default App;
