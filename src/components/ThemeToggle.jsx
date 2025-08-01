import React from "react";
import { useGlobalContext } from "../context/GlobalContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useGlobalContext();

  return (
    <div
      className="p-4 rounded"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      Theme: {theme.name}
      <button
        className="ml-4 px-2 py-1 bg-indigo-500 text-white rounded"
        onClick={toggleTheme}
      >
        Toggle
      </button>
    </div>
  );
};

export default ThemeToggle;
