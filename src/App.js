import React, { useEffect, useState, createContext } from "react";
import Title from "./components/Title/Title.css";
import Cards from "./components/Cards/Cards";
import axios from "axios";
//styles
import GlobalStyles from "./GlobalStyles";
export const AppContext = createContext();
const URL = "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [remaining, setRemaining] = useState([]);
  const [previous, setPrevious] = useState(null);
  const [loading, setLoading] = useState(true);
  const [waiting, setWaiting] = useState(false);

  const getCharacters = async () => {
    const res = await axios.get(URL);
    const chars = res.data;
    const shuffle1 = chars.sort(() => 0.5 - Math.random());
    const shuffle2 = chars.sort(() => 0.5 - Math.random());

    setCharacters([...shuffle2, ...shuffle1]);
    setRemaining([...shuffle2, ...shuffle1]);
    setLoading(false);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <AppContext.Provider
      value={{
        characters,
        remaining,
        setRemaining,
        previous,
        setPrevious,
        loading,
        waiting,
        setWaiting,
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