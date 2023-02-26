import React from 'react';

import {ThemeContext, themes} from "../../Theme";
import './theme.css'


const Theme = () => {

    const [darkMode, setDarkMode] = React.useState(true);

    return (
        <div className="App">
            <ThemeContext.Consumer>
                {({changeTheme}) => (

                    <label className="switch">
                        <input onClick={() => {
                            setDarkMode(!darkMode);
                            changeTheme(darkMode ? themes.light : themes.dark);
                        }} type="checkbox"/>
                        <span className="slider"></span>
                    </label>
                )}
            </ThemeContext.Consumer>
        </div>
    );
};

export {Theme};