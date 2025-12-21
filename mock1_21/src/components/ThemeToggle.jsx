import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button className="theme-toggle" onClick={toggleTheme}>
            <span className="theme-icon">
                {theme === 'light' ? '🌙' : '☀️'}
            </span>
            <span className="theme-text">
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
            </span>
        </button>
    );
};

export default ThemeToggle;
