import React, {createContext, useState, useContext, useEffect, ReactNode} from 'react';

interface ThemeContextType {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider = ({children}: ThemeProviderProps) => {
    const savedTheme = localStorage.getItem('isDarkMode');
    const [isDarkMode, setIsDarkMode] = useState(savedTheme === 'true');

    const toggleTheme = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('isDarkMode', newMode.toString());
    };

    useEffect(() => {
        const body = document.body;
        if (isDarkMode) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const value = {isDarkMode, toggleTheme};

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export {
    ThemeProvider,
    useTheme
};
