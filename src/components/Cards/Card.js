import React, { useContext } from "react";
import hideenImage from "./../../assets/images/card.jpg";
import styled from "styled-components";
import { AppContext } from "../../App";
import { isAlreadyFlipped } from "../../utils";

const Card = ({ className, id, index, image }) => {
  const { characters, remaining, setRemaining, previous, setPrevious } =
    useContext(AppContext);
  const handleClick = (e) => {
    const target = characters[index];
    if (previous == null && !isAlreadyFlipped(target.id, remaining)) {
      //case: first card flipped
      setPrevious({ index, id, target: e.target, image });
      e.target.src = target.image;
    } else if (previous.id === target.id && previous.index !== index) {
      //case: correct card flipped
      e.target.src = target.image;
      const newRemaining = remaining.filter((char) => char.id !== target.id);
      setRemaining(newRemaining);
      setPrevious(null);
    } else if (previous.id !== target.id && previous.index !== index) {
      //case: wrong card flipped
      e.target.src = target.image;
      setPrevious(null);
      setTimeout(() => {
        e.target.src = hideenImage;
        previous.target.src = hideenImage;
      }, 1300);
    }
  };
  return (
    <div className={className}>
      <img onClick={(e) => handleClick(e, id)} src={hideenImage} alt="" />
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
