import React from "react";
import titleImg from "./../../assets/images/title.png";
const Title = ({ className }) => {
  return (
    <div className={className}>
      <img src={titleImg} alt="title" />
    </div>
  );
};

export default Title;
