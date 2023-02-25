import {createContext} from "react";

const themes = {
    dark: "dark-content",
    light: "white-content",
};

const ThemeContext = createContext({
    theme: themes.dark,
    changeTheme: () => {
    },
});

export {
    themes,
    ThemeContext
};