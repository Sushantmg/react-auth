
import { createContext, useState } from "react";

export const ThemeContext = createContext();

const getThemeClasses = (themeName) => {
  switch (themeName) {
    case "default":
      return {
        bg: "bg-white",
        text: "text-black",
      };
    case "blackwhite":
      return {
        bg: "bg-black",
        text: "text-white",
      };
    case "blue":
      return {
        bg: "bg-blue-500",
        text: "text-white",
      };
    case "red":
      return {
        bg: "bg-red-500",
        text: "text-white",
      };
    case "green":
      return {
        bg: "bg-green-500",
        text: "text-white",
      };
    default:
      return {
        bg: "bg-white",
        text: "text-black",
      };
  }
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("default");

  const theme = getThemeClasses(currentTheme);

  const changeTheme = (themeName) => {
    setCurrentTheme(themeName);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
