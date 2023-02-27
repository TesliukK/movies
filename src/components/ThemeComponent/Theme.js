import React, {useEffect, useState} from 'react';

import {ThemeContext, themes} from '../../Theme';
import './theme.css';

const Theme = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const isDarkModeEnabled = JSON.parse(localStorage.getItem('darkMode'));
        if (isDarkModeEnabled !== null) {
            setDarkMode(isDarkModeEnabled);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    const handleToggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="theme">
            <ThemeContext.Consumer>
                {({changeTheme}) => (
                    <label className="switch">
                        <input
                            onClick={() => {
                                handleToggleTheme();
                                changeTheme(darkMode ? themes.light : themes.dark);
                            }}
                            type="checkbox"
                            defaultChecked={darkMode}
                        />
                        <span className="slider"></span>
                    </label>
                )}
            </ThemeContext.Consumer>
        </div>
    );
};

export {Theme};
