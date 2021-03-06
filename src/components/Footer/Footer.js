/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../css/Footer/MainFooter.css";
import { socialNetworks } from "../../data";
import { LinkButton } from "../BaseComponents/LinkButton";
import { useContext } from "react";
import { AppContext } from "../App/AppContext";
import { Link } from "react-router-dom";
const Footer = () => {
  const { links, hiddenMenu } = useContext(AppContext);
  return (
    <footer className="main-footer">
      <ul className="contact-info">
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
            hiddenMenu();
          }}
          to={"/"}
          className="nav-logo">
          {" "}
          U.C.I.M.A
        </Link>
        <li className="location">
          Centro Clínico Universidad de Oriente. <br /> Piso 1, Consultorio 09.{" "}
          <br /> Ciudad Bolívar, Venezuela.
        </li>
        <li className="phone-number">(+58)4148714271.</li>
        <li className="phone-number">(+58)4265902809.</li>
        <li className="email">gcoiro15@gmail.com.</li>
      </ul>
      {/* Social links  */}
      <nav>
        <ul className="footer-list">
          {links.map(
            (link) =>
              link.route !== "/" && (
                <li key={link.name}>
                  <LinkButton route={link.route} label={link.name} />
                </li>
              )
          )}
        </ul>
      </nav>
      <ul className="social-links">
        {socialNetworks.map((network) => (
          <li key={network.network}>
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              {network.icon}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
