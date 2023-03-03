import React from "react";
import "./HomeCard.css";
const HomeCard = ({ card }) => {
  return (
    <div className="homeCard">
      <img src={card.imageUrl} alt="" className="homeCardImage" />
      <span className="homecardTitle">{card.title}</span>
      <span className="homecardText">{card.text}</span>
    </div>
  );
};

export default HomeCard;
