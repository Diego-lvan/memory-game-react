import React, { useContext } from "react";
import { AppContext } from "../../App";
import secondsToTime from "../../utils/secondsToTime";

const InfoGame = () => {
  let { seconds, moves } = useContext(AppContext);
  return (
    <div
      className="game-info"
      style={{ background: "white", margin: "auto", width: "fit-content", borderRadius: "8px", padding: "8px", opacity: ".8" }}
    >
      <span style={{ fontSize: "15px", padding: "10px" }}>{secondsToTime(seconds - 1)} </span>
      <span style={{ fontSize: "15px", padding: "10px" }}>Moves: {moves}</span>
      <button
        style={{ cursor: "pointer", background: "#ffff00", padding: "5px", border: "none" }}
        onClick={() => window.location.reload()}
      >
        Reset Game
      </button>
    </div>
  );
};

export default InfoGame;
