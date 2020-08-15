/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./../../css/Header/NavBar.css";
import MenuButton from "./MenuButton";
import { Link } from "react-router-dom";
import { LinkButton } from "../BaseComponents/LinkButton";

const NavBar = () => {
  const [menuHidden, setClassName] = useState(true);
  return (
    <nav id="top" className="nav-bar">
      <LinkButton route={"/"} classes="nav-logo" label="U.C.I.M.A" />
      {/* Hamburber Button  */}
      <MenuButton displayMenu={setClassName} />
      <ul className={`${menuHidden ? "menu-hidden" : "menu-active"}`}>
        <li>
          <Link
            onClick={() => {
              setClassName(!menuHidden);
            }}
            to="/personal">
            DR. GIUSEPPE A. COIRO
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setClassName(!menuHidden);
            }}
            to="/blog">
            BLOG Y PROCEDIMIENTOS
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setClassName(!menuHidden);
            }}
            to="/">
            {" "}
            U.C.I.M.A
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setClassName(!menuHidden);
            }}
            to="/">
            {" "}
            CONTACTO
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
