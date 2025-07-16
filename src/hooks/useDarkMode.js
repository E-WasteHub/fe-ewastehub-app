import { useContext } from 'react';
import { DarkMode } from '../context/DarkMode';

const useDarkMode = () => {
  const context = useContext(DarkMode);

  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }

  const { theme, isDarkMode, changeTheme, getSystemPreference, isSystemTheme } =
    context;

  // Helper functions
  const setLightMode = () => changeTheme('light');
  const setDarkMode = () => changeTheme('dark');
  const setSystemMode = () => changeTheme('system');
  const toggleTheme = () => changeTheme(isDarkMode ? 'light' : 'dark');

  return {
    // Core state
    theme,
    isDarkMode,
    isSystemTheme,

    // Theme change functions
    changeTheme,
    setLightMode,
    setDarkMode,
    setSystemMode,
    toggleTheme,

    // Helper functions
    getSystemPreference,

    // Status helpers
    isLight: theme === 'light',
    isDark: theme === 'dark',
    isSystem: theme === 'system',
  };
};

export default useDarkMode;
