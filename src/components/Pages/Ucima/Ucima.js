import React, { useContext } from "react";
import "../../../css/Main/MainContent.css";
import QuienesSomos from "./QuienesSomos";
import Establishment from "./Establishment";
import { AppContext } from "../../App/AppContext";
import { useEffect } from "react";
const Ucima = () => {
  const { setCurrentPage } = useContext(AppContext);
  useEffect(() => {
    setCurrentPage("/ucima");
  });
  return (
    <main className="main-content ucima">
      <QuienesSomos />
      <Establishment />
    </main>
  );
};

export default Ucima;
