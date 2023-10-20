import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="btn bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-2 rounded"
      onClick={toggleTheme}
    >
      Mode
    </button>
  );
};

export default ThemeToggle;
