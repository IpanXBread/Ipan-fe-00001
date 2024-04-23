import React, { createContext, useState } from 'react';
import { Button } from '@chakra-ui/react';

const ThemeContext = createContext();

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        console.log("Change theme to ", theme);
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Button onClick={toggleTheme}>User</Button> {/* Simply a fake */}
        </ThemeContext.Provider>
    );
};

export { ThemeSwitcher, ThemeContext };
