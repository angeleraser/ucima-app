import React from "react";
import "../../../css/Main/FAQ.css";
import { useState } from "react";
import { faqData } from "../../../data";
const Question = ({ quest, answer, id }) => {
  const [isActive, setClassName] = useState(false);
  const showHiddenQuestion = () => {
    setClassName(!isActive);
  };
  return (
    <article
      className={`${
        isActive ? "active" : ""
      } question-${id}`}>
      <h2 onClick={showHiddenQuestion}>{quest}</h2>
      <button onClick={showHiddenQuestion}></button>
      <div className={`answer`}>{answer}</div>
    </article>
  );
};

const FAQ = () => {
  return (
    <section className="faq-wrapper">
      <h1>Preguntas Frecuentes</h1>
      {faqData.map((question, i) => (
        <Question {...question} key={question.quest} id={i} />
      ))}
    </section>
  );
};

export default FAQ;
