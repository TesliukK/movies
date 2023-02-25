import React from 'react';

import {ThemeContext, themes} from "../../Theme";
import './theme.css'


const Theme = () => {

    const [darkMode, setDarkMode] = React.useState(true);

    return (
        <div className="App">
            <ThemeContext.Consumer>
                {({changeTheme}) => (
                    <button
                        onClick={() => {
                            setDarkMode(!darkMode);
                            changeTheme(darkMode ? themes.light : themes.dark);
                        }}>
                        click
                    </button>
                )}
            </ThemeContext.Consumer>
        </div>
    );
};

export {Theme};