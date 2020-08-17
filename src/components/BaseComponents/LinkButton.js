/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../css/LinkButton.css";
import { Link} from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App/AppContext";
export const LinkButton = ({ label, route, classes }) => {
  const { styleCurrentLink } = useContext(AppContext);
  return (
    <Link
      className={`${classes}`}
      to={route}
      onClick={() => {
        window.scrollTo(0, 0);
        styleCurrentLink(route);
      }}>
      {label}
    </Link>
  );
};
