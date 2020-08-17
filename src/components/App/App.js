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

export const App = () => {
  const [{ menuHidden, links }, dispatch] = AppContextReducer(
    AppReducer,
    defaultState
  );
  const displayMenu = () => {
    dispatch({ type: "DISPLAY_MENU" });
  };
  const styleCurrentLink = (pathname) => {
    dispatch({
      type: "STYLE_CURRENT_LINK",
      currentLink: pathname,
    });
    dispatch({ type: "HIDDEN_MENU" });
  };
  const removeCurrentLinkStyle = () => {
    dispatch({ type: "REMOVE_LINK_STYLE" });
    dispatch({ type: "HIDDEN_MENU" });
  };
  const providerValue = {
    menuHidden,
    displayMenu,
    styleCurrentLink,
    removeCurrentLinkStyle,
    links,
    dispatch,
  };
  useEffect(() => {
    const currentPage = links.find((link) => link.current);
    document.title = `U.C.I.M.A ${currentPage ? "- " + currentPage.name : ""}`;
  }, [links]);
  return (
    <AppContext.Provider value={providerValue}>
      <Header />
      <Main />
      <Footer />
    </AppContext.Provider>
  );
};
