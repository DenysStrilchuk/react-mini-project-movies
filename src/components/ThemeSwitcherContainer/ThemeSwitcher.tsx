import React, {JSX} from 'react';
import ReactSwitch from "react-switch";

import {useTheme} from "../ThemeContextContainer";

const ThemeSwitcher = (): JSX.Element => {
    const {isDarkMode, toggleTheme} = useTheme();

    return (
        <div>
            <label>
                <ReactSwitch
                    checked={isDarkMode}
                    onChange={toggleTheme}
                    onColor="#1e272e"
                    offColor="#dcdde1"
                    checkedIcon={false}
                    uncheckedIcon={false}
                />
            </label>
        </div>
    );
};

export {
    ThemeSwitcher
};
