import React, { createContext, useState, useEffect } from 'react';

// Create a context for the theme
const ThemeContext = createContext();

// Create a ThemeProvider component
const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Detect system preferences on mount
  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };