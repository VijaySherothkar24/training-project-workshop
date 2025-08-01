import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const themes = {
  dark: {
    name: "dark",
    background: "#111",
    text: "#fff",
  },
  light: {
    name: "light",
    background: "#fff",
    text: "#111",
  },
};

export const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev.name === "dark" ? themes.light : themes.dark
    );
  };

  return (
    <GlobalContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
