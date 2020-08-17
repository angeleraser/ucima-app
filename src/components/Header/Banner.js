/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./../../css/Header/Banner.css";
import { LinkButton } from "../BaseComponents/LinkButton";
const Banner = () => {
  return (
    <section className="banner">
      <div className="content">
        <h1>"Más precisa y eficaz que un bisturí."</h1>
        <p>
          La laparoscopia es la alternativa mínimamente invasiva a la cirugía
          abierta covnencional, los pacientes sometidos a esta sufren de menos
          dolor postoperatorio, una recuperación más rápida, y un mejor
          resultado estético.
        </p>
        <LinkButton
          label="más información"
          route="/blog"
          classes="cta-button"
        />
      </div>
      <div className="image"></div>
    </section>
  );
};

export default Banner;
