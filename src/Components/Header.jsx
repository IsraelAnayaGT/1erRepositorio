import React, { useState, useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { theme, updateTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
    theme === "bgligth" ? updateTheme("bgdark") : updateTheme("bgligth");
  };

  return (
    <div className="Header pt-3">
      <button
        className="btn btn-secondary "
        type="button"
        onClick={handleClick}
      >
        {darkMode ? "Modo Oscuro" : "Modo Blanco"}
      </button>
    </div>
  );
};

export default Header;
