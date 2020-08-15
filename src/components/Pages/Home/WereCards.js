import React from "react";
import "../../../css/Main/WereCards.css";
import { reasonsData } from "../../../data";
const WereCards = () => {
  const CARDS = reasonsData.map((data, i) => {
    const { title, description, icon } = data;
    return (
      <article key = {i}>
        <div className="icon">{icon}</div>
        <h2>{title}</h2>
        <p>{description}</p>
      </article>
    );
  });
  return <div className="were-cards">
    {CARDS}
  </div>;
};

export default WereCards;
