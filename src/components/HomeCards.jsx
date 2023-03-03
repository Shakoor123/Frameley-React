import React from "react";
import HomeCard from "./HomeCard";
import "./HomeCards.css";
const HomeCards = () => {
  let homeCardss = [
    {
      id: 0,
      imageUrl: "https://frameley.com/images/ctruck.png",
      title: "Free Shipping",
      text: "While being in the present, transport your senses to the amazing experiences of the past. We offer Fast & Free shipping all over India.",
    },
    {
      id: 1,
      imageUrl: "https://frameley.com/images/cframe.png",
      title: "Multiple Sizes",
      text: "We have a wide selection of standard and personalized photo frames, from heart-shaped to rectangle frames, that you can get online to give your loved ones on important occasions as a gesture of love and beautiful memories.",
    },
    {
      id: 2,
      imageUrl: "https://frameley.com/images/feather.png",
      title: "Thin & Light",
      text: "We have a huge collection of handcrafted thin-profile premium frames that make you and your loved ones smile.",
    },
    {
      id: 3,
      imageUrl: "https://frameley.com/images/customer-satisfaction.png",
      title: "Satisfaction Guaranteed",
      text: "We strive to fulfill your desires. We only offer goods that are of the highest caliber at affordable prices. When it comes to your images, we want you to have the greatest online experience possible.",
    },
  ];
  return (
    <div className="section">
      <div className="homeCards">
        {homeCardss.map((card) => (
          <HomeCard card={card} />
        ))}
      </div>
    </div>
  );
};

export default HomeCards;
