import React from "react";
import Footer from "../Footer/Footer";
import Header from "..//Header/Header";
import "../../../src/css/index.css";
import Main from "../Pages/Main";
import {
  AppContextReducer,
  AppContext,
  defaultState,
  AppReducer,
} from "./AppContext";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export const App = () => {
  const [{ menuHidden, links }, dispatch] = AppContextReducer(
    AppReducer,
    defaultState
  );

  const {
    location: { pathname },
  } = useHistory();

  const [currentPage, setCurrentPage] = useState(pathname);

  const displayMenu = () => {
    dispatch({ type: "DISPLAY_MENU" });
  };

  const hiddenMenu = () => {
    dispatch({ type: "HIDDEN_MENU" });
  };

  const providerValue = {
    menuHidden,
    displayMenu,
    hiddenMenu,
    links,
    currentPage,
    setCurrentPage,
  };

  const writeDocumentTitle = (currentPage) => {
    let title = "";
    switch (currentPage) {
      case "/blog":
        title = "Blog y Procedimientos";
        break;
      case "/personal":
        title = "Dr. Giuseppe A. Coiro";
        break;
      case "/ucima":
        title = "Empresa";
        break;
      case "/contact":
        title = "Contacto";
        break;
      default:
        title = "Inicio";
        break;
    }
    document.title = `U.C.I.M.A - ${title}`;
  };

  useEffect(() => {
    writeDocumentTitle(currentPage);
  }, [currentPage]);
  
  return (
    <AppContext.Provider value={providerValue}>
      <Header />
      <Main />
      <Footer />
    </AppContext.Provider>
  );
};
