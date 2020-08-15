import React from "react";
import "../../../css/Main/Methods.css";
import { methodsData } from "../../../data";
const Step = ({ description, step }) => (
  <p>
    <span className="num">{step}</span>
    {description}
  </p>
);
const Methods = () => {
  return (
    <section className="methods">
      <h1>Procedimientos</h1>
      <div className="steps">
        {methodsData.map((step) => (
          <Step key={step.step} {...step} />
        ))}
      </div>
    </section>
  );
};

export default Methods;
