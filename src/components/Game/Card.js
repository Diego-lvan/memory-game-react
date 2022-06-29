import React, { useContext } from "react";
import hideenImage from "./../../assets/images/card.jpg";
import styled from "styled-components";
import { isAlreadyFlipped } from "../../utils/isAlreadyFlipped";
import Swal from "sweetalert2";
import secondsToTime from "../../utils/secondsToTime";
import { AppContext } from "../../App";

const Card = ({ className, id, index, characters, remaining, setRemaining, previous, setPrevious, waiting, setWaiting }) => {
  let { moves, seconds, setSeconds, setMoves } = useContext(AppContext);
  const flipCard = (e) => {
    const cur = characters[index];
    const inRemaining = remaining.includes(cur);
    if (waiting || inRemaining === false) return;
    if (previous?.index !== index) setMoves(++moves);
    if (moves === 1) {
      setInterval(() => setSeconds(++seconds), 1000);
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

  if (remaining.length === 0) {
    const time = secondsToTime(seconds);
    Swal.fire("You won!", time, "success");
  }
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
