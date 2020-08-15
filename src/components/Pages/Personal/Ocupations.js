import React from "react";
import "../../../css/Main/Ocupations.css";
import { ocupationsData } from "../../../data";
const Ocupations = () => {
  return (
    <section className="ocupations-wrapper">
      <h2>Dr. Giuseppe A. Coiro</h2>
      <div className="ocupations-list">
        {ocupationsData.map((article, i) => (
          <article key={i}>
            {" "}
            {article.icon} <p>{article.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Ocupations;
