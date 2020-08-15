/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../css/LinkButton.css";
import { Link } from "react-router-dom";
export const LinkButton = ({ label, route, classes }) => {
  return (
    <Link
      className={`${classes}`}
      to={route}
      onClick={() => {
        window.scrollTo(0, 0);
      }}>
      {label}
    </Link>
  );
};
