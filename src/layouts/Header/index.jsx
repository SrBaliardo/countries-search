import React, { useContext } from "react";
import * as H from "./styles";
import { DataContext } from "../../context";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(DataContext);

  return (
    <H.Header darkMode={darkMode}>
      <H.HeaderContent darkMode={darkMode} className="centralizer">
        <NavLink to="/">
          <h1 className="animeBottom">De qual país você gosta?</h1>
        </NavLink>
        <p className="animeBottom" onClick={() => setDarkMode(!darkMode)}>
          {!darkMode ? "Modo Escuro" : "Modo Claro"}
        </p>
      </H.HeaderContent>
    </H.Header>
  );
};

export default Header;
