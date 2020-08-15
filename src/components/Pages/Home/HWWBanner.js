/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../../css/Main/HWWBanner.css";
import { LinkButton } from "../../BaseComponents/LinkButton";
const HWWBanner = () => {
  return (
    <article className="how-we-work-banner">
      <h2>Somos los más calificados para ti</h2>
      <div className="links-wrapper">
        <LinkButton
          route="/personal"
          classes="cta-button"
          label="DR. GIUSEPPE A. COIRO"
        />
        <LinkButton route="/" classes="cta-button" label="U.C.I.M.A" />
        <LinkButton route="/" classes="cta-button" label="CONTACTAR" />
      </div>
    </article>
  );
};

export default HWWBanner;
