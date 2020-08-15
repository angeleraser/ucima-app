import React from "react";
import "../../../css/Main/AcademicAwards.css";
import { awardsData } from "../../../data";
const AcademicAwards = () => {
  return (
    <section className="academic-awards">
      <h2>Méritos Académicos</h2>
      <div className="awards-list">
        {awardsData.map((article, i) => (
          <article key={i}>
            {article.icon}
            {article.description}
          </article>
        ))}
      </div>
    </section>
  );
};

export default AcademicAwards;
