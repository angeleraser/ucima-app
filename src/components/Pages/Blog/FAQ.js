import React from "react";
import "../../../css/Main/FAQ.css";
import { useState } from "react";
import { faqData } from "../../../data";

const Question = ({ quest, answer }) => {
  const [isActive, setClassName] = useState(false);
  return (
    <article className={`${isActive ? "active" : ""}`}>
      <h2
        onClick={() => {
          setClassName(!isActive);
        }}>
        {quest}
      </h2>
      <button
        onClick={() => {
          setClassName(!isActive);
        }}></button>
      <div className="answer">{answer}</div>
    </article>
  );
};

const FAQ = () => {
  return (
    <section className="faq-wrapper">
      <h1>Preguntas Frecuentes</h1>
      {faqData.map((question) => (
        <Question {...question} key={question.quest} />
      ))}
    </section>
  );
};

export default FAQ;
