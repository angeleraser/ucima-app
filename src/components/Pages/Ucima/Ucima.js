import React from "react";
import "../../../css/Main/MainContent.css";
import QuienesSomos from "./QuienesSomos";
import Establishment from "./Establishment";
import { useHistory } from "react-router-dom";
const Ucima = () => {
  const {location:{pathname}} = useHistory();
  console.log(pathname)
  return (
    <main className="main-content ucima">
      <QuienesSomos />
      <Establishment />
    </main>
  );
};

export default Ucima;
