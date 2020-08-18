import { createContext } from "react";
import { useReducer } from "react";
export const AppContext = createContext();
const navLinks = [
  {
    route: "/",
    name: "Inicio",
  },
  {
    route: "/personal",
    name: "Dr. Giuseppe A. Coiro",
  },
  {
    route: "/blog",
    name: "Blog y Procedimientos",
  },
  {
    route: "/ucima",
    name: "U.C.I.M.A",
  },
  {
    route: "/contact",
    name: "Contacto",
  },
];
export const defaultState = {
  menuHidden: true,
  links: [...navLinks],
};
export const AppReducer = (state, action) => {
  const displayMenu = (condition) => ({
    menuHidden: !condition,
    links: [...state.links],
  });
  const hiddenMenu = (state) => {
    return {
      ...state,
      menuHidden: true,
    };
  };

  switch (action.type) {
    case "DISPLAY_MENU":
      return displayMenu(state.menuHidden);
    case "HIDDEN_MENU":
      return hiddenMenu(state);
    default:
      return state;
  }
};
export const AppContextReducer = useReducer;
