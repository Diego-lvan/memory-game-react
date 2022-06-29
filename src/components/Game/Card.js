import React, { useContext } from "react";
import hideenImage from "./../../assets/images/card.jpg";
import styled from "styled-components";
import { isAlreadyFlipped } from "../../utils/isAlreadyFlipped";
import { AppContext } from "../../App";

const Card = ({ className, id, index, characters, remaining, setRemaining, previous, setPrevious, waiting, setWaiting }) => {
  let { moves, seconds, setSeconds, setMoves, setIntervalID } = useContext(AppContext);
  const flipCard = (e) => {
    const cur = characters[index];
    const inRemaining = remaining.includes(cur);
    if (waiting || inRemaining === false) return;
    if (previous?.index !== index) setMoves(++moves);
    if (moves === 1) {
      setIntervalID(setInterval(() => setSeconds(++seconds), 1000));
    }

    if (previous == null && !isAlreadyFlipped(cur.id, remaining)) {
      //case: first card flipped
      setPrevious({ index, id, target: e.target });
      e.target.src = cur.image;
    } else if (previous.id === cur.id && previous.index !== index) {
      //case: correct card flipped
      e.target.src = cur.image;
      const newRemaining = remaining.filter((char) => char.id !== cur.id);
      setRemaining(newRemaining);
      setPrevious(null);
    } else if (previous.id !== cur.id && previous.index !== index) {
      //case: wrong card flipped
      e.target.src = cur.image;
      setPrevious(null);
      setWaiting(true);
      setTimeout(() => {
        e.target.src = hideenImage;
        previous.target.src = hideenImage;
        setWaiting(false);
      }, 1300);
    }
  };

  return (
    <div className={className}>
      <img onClick={(e) => flipCard(e, id)} src={hideenImage} alt="" />
    </div>
  );
};

const CardStyled = styled(Card)`
  width: 80px;
  img {
    width: 80px;
    cursor: pointer;
  }
`;
export default CardStyled;
