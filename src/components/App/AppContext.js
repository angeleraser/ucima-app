import { createContext } from 'react';
import { useReducer } from 'react';
export const AppContext = createContext();
const navLinks = [
  {
    route: "/personal",
    name: "Dr. Giuseppe A. Coiro",
    current: false,
  },
  {
    route: "/blog",
    name: "Blog y Procedimientos",
    current: false,
  },
  {
    route: "/ucima",
    name: "U.C.I.M.A",
    current: false,
  },
  {
    route: "/contact",
    name: "Contacto",
    current: false,
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
  const setActiveClassToCurrentLink = (pathname, state) => {
    const currentLink = state.links.find((linkData) => linkData.route === pathname);
    return {
      ...state,
      links: state.links.map((link) => {
        if (link.route === currentLink.route) {
          return {
            ...link,
            current: true,
          };
        } else {
          return {
            ...link,
            current: false,
          };
        }
      }),
    };
  };
  const removeCurrentLinkStyle = (state) => ({
    ...state,
    links: [...navLinks],
  });

  switch (action.type) {
    case "DISPLAY_MENU":
      return displayMenu(state.menuHidden);
    case "HIDDEN_MENU":
      return hiddenMenu(state);
    case "STYLE_CURRENT_LINK":
      return setActiveClassToCurrentLink(action.currentLink, state);
    case "REMOVE_LINK_STYLE":
      return removeCurrentLinkStyle(state);
    default:
      return state;
  }
};
export const AppContextReducer = useReducer;