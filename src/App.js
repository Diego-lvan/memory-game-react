import React, { useState, createContext } from "react";
import Title from "./components/Title/Title.css";
import Cards from "./components/Game/Cards";
//styles
import GlobalStyles from "./GlobalStyles";
import InfoGame from "./components/Game/InfoGame";
export const AppContext = createContext();

const App = () => {
  const [loading, setLoading] = useState(true);
  const [moves, setMoves] = useState(0);
  const [seconds, setSeconds] = useState(1);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        moves,
        setMoves,
        seconds,
        setSeconds,
      }}
    >
      <div>
        <GlobalStyles />
        <Title />
        <Cards />
        <InfoGame />
      </div>
    </AppContext.Provider>
  );
};

export default App;
