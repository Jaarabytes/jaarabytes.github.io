// darkModeToggle.js
import { useState } from 'react';

export const useDarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // You can also store the current dark mode preference in localStorage here
    // to persist the theme across page reloads.
  };

  return [darkMode, toggleDarkMode];
};
