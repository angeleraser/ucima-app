/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../css/Footer/MainFooter.css";
import { socialNetworks } from "../../svg-icons";
import { LinkButton } from "../BaseComponents/LinkButton";
const Footer = () => {
  return (
    <footer className="main-footer outline-none">
      <section className="social-links">
        <LinkButton route={"/"} classes="nav-logo" label="U.C.I.M.A" />
        {/* Social links  */}
        <ul>
          {socialNetworks.map((icon, key) => (
            <li key={key}>
              <a href="#">{icon}</a>
            </li>
          ))}
        </ul>
      </section>
      <nav>
        <ul className="footer-list">
          <li>
            <LinkButton route="/personal" label="DR. GIUSEPPE A. COIRO" />
          </li>
          <li>
            <LinkButton route="/blog" label="BLOG Y PROCEDIMIENTOS" />
          </li>
          <li>
            <LinkButton route="" label="U.C.I.M.A" />
          </li>
          <li>
            <LinkButton label="CONTACTO" route="" />
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
