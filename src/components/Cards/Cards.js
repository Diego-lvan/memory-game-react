import React, { useContext } from "react";
import Card from "./Card";
import styled from "styled-components";
import { AppContext } from "./../../App";

const Cards = ({ className }) => {
  const { characters, loading } = useContext(AppContext);
  if (loading) {
    return <h1 style={{ textAlign: "center", fontSize: "25px" }}>Loading...</h1>;
  }
  return (
    <div className={className}>
      {characters.map((char, i) => {
        return <Card id={char.id} index={i} />;
      })}
    </div>
  );
};

const CardsStyled = styled(Cards)`
  display: grid;
  grid-template-columns: repeat(4, 90px);
  width: 100%;
  margin: 0 10px 20px 10px;
  justify-content: center;
  gap: 3px;
`;

export default CardsStyled;
