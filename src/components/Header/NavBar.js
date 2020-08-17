/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./../../css/Header/NavBar.css";
import MenuButton from "./MenuButton";
import { Link } from "react-router-dom";
import { AppContext } from "../App/AppContext";
import { useContext } from "react";

const NavBar = () => {
  const {
    links,
    styleCurrentLink,
    removeCurrentLinkStyle,
    menuHidden,
  } = useContext(AppContext);
  return (
    <nav className="nav-bar">
      <Link onClick={removeCurrentLinkStyle} to={"/"} className="nav-logo">
        {" "}
        U.C.I.M.A
      </Link>
      <MenuButton />
      <ul className={`${menuHidden ? "menu-hidden" : "menu-active"}`}>
        {links.map((link) => (
          <li key={link.name}>
            <Link
              onClick={() => {
                styleCurrentLink(link.route);
              }}
              className={`${link.current ? "active" : ""}`}
              to={link.route}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavBar;
