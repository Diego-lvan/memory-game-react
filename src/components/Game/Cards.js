import React, { useState, useContext, useEffect } from "react";
import Card from "./Card";
import styled from "styled-components";
import axios from "axios";
import { AppContext } from "../../App";
import secondsToTime from "../../utils/secondsToTime";
import Swal from "sweetalert2";

const URL = "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10";

const Cards = ({ className }) => {
  const [characters, setCharacters] = useState([]);
  const [remaining, setRemaining] = useState([]);
  const [previous, setPrevious] = useState(null);
  const [waiting, setWaiting] = useState(false);

  const { loading, setLoading, seconds, moves, intervalID } = useContext(AppContext);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (remaining.length === 0 && !loading) {
      const time = secondsToTime(seconds - 1);
      const text = `Time: ${time} \n Moves: ${moves}`;
      Swal.fire("You won!", text, "success");
      clearInterval(intervalID);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remaining]);

  if (loading) {
    return <h1 style={{ textAlign: "center", fontSize: "25px" }}>Loading...</h1>;
  }
  return (
    <>
      <div className={className}>
        {characters.map((char, i) => {
          return (
            <Card
              key={i}
              id={char.id}
              index={i}
              characters={characters}
              remaining={remaining}
              setRemaining={setRemaining}
              previous={previous}
              setPrevious={setPrevious}
              waiting={waiting}
              setWaiting={setWaiting}
            />
          );
        })}
      </div>
    </>
  );
};

const CardsStyled = styled(Cards)`
  display: grid;
  grid-template-columns: repeat(4, 90px);
  width: 100%;
  margin: 0 10px 8px 10px;
  justify-content: center;
  gap: 3px;
`;

export default CardsStyled;
