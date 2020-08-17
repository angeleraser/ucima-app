import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../App/AppContext";
const MenuButton = () => {
  const { menuHidden, displayMenu } = useContext(AppContext);
  const [isClosed, setMenuButtonClassName] = useState(menuHidden);
  useEffect(() => {
    setMenuButtonClassName(menuHidden);
  }, [menuHidden]);
  return (
    <button
      onClick={() => {
        displayMenu();
      }}
      className={!isClosed ? "open" : "close"}></button>
  );
};

export default MenuButton;
