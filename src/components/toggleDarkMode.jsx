// darkModeToggle.js
import { useState, useEffect } from 'react';

export const useDarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  // This tries to sync the website theme with the operating system theme. GOOD LUCK
  useEffect(() => {
    const prefersDarkMedia = window.matchMedia('(prefers-color-scheme:dark)').matches;
    setDarkMode(prefersDarkMedia);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // You can also store the current dark mode preference in localStorage here
    // to persist the theme across page reloads.
  };

  return [darkMode, toggleDarkMode];
};
