
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeSwitcher = () => {
    const { currentTheme, changeTheme } = useContext(ThemeContext);

    const themes = ["default", "blackwhite", "blue", "red", "green"];

    return (
        <div className="mt-4 space-x-2">
            {themes.map((themeName) => (
                <button
                    key={themeName}
                    onClick={() => changeTheme(themeName)}
                    className={`px-3 py-1 rounded border ${currentTheme === themeName ? "border-black font-bold underline" : "border-gray-400"
                        }`}
                >
                    {themeName}
                </button>
            ))}
        </div>
    );
};

export default ThemeSwitcher;
