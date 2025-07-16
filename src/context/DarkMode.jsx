import { createContext, useCallback, useEffect, useState } from 'react';

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Initialize theme from localStorage or default to 'system'
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'system';
    }
    return 'system';
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Calculate initial dark mode state
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') || 'system';
      if (savedTheme === 'dark') return true;
      if (savedTheme === 'light') return false;
      // For 'system', check system preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Function to get system preference
  const getSystemPreference = useCallback(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }, []);

  // Function to determine if dark mode should be active
  const shouldUseDarkMode = useCallback(
    (themeMode) => {
      switch (themeMode) {
        case 'dark':
          return true;
        case 'light':
          return false;
        case 'system':
          return getSystemPreference();
        default:
          return false;
      }
    },
    [getSystemPreference]
  );

  // Function to apply theme to DOM
  const applyThemeToDOM = useCallback((shouldBeDark) => {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;

    if (shouldBeDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, []);

  // Main function to update theme state and apply changes
  const updateTheme = useCallback(
    (newTheme) => {
      const shouldBeDark = shouldUseDarkMode(newTheme);

      // Update states
      setTheme(newTheme);
      setIsDarkMode(shouldBeDark);

      // Apply to DOM
      applyThemeToDOM(shouldBeDark);

      // Save to localStorage
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('theme', newTheme);
        } catch (error) {
          console.warn('Failed to save theme to localStorage:', error);
        }
      }
    },
    [shouldUseDarkMode, applyThemeToDOM]
  );

  // Public function to change theme
  const changeTheme = useCallback(
    (newTheme) => {
      if (!['light', 'dark', 'system'].includes(newTheme)) {
        console.warn(`Invalid theme: ${newTheme}. Using 'system' instead.`);
        newTheme = 'system';
      }
      updateTheme(newTheme);
    },
    [updateTheme]
  );

  // Initialize theme on mount
  useEffect(() => {
    // Apply the initial theme to DOM
    const shouldBeDark = shouldUseDarkMode(theme);
    applyThemeToDOM(shouldBeDark);

    // Ensure state is synchronized
    if (isDarkMode !== shouldBeDark) {
      setIsDarkMode(shouldBeDark);
    }
  }, [theme, isDarkMode, shouldUseDarkMode, applyThemeToDOM]);

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleSystemChange = () => {
      // Only update if current theme is 'system'
      if (theme === 'system') {
        const shouldBeDark = getSystemPreference();
        setIsDarkMode(shouldBeDark);
        applyThemeToDOM(shouldBeDark);
      }
    };

    // Set initial listener
    mediaQuery.addEventListener('change', handleSystemChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleSystemChange);
    };
  }, [theme, getSystemPreference, applyThemeToDOM]);

  // Sync state when theme changes externally (e.g., from other tabs)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleStorageChange = (e) => {
      if (e.key === 'theme' && e.newValue) {
        const newTheme = e.newValue;
        if (
          ['light', 'dark', 'system'].includes(newTheme) &&
          newTheme !== theme
        ) {
          updateTheme(newTheme);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [theme, updateTheme]);

  const contextValue = {
    theme,
    isDarkMode,
    changeTheme,
    // Helper functions for advanced use cases
    getSystemPreference,
    isSystemTheme: theme === 'system',
  };

  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const DarkMode = DarkModeContext;
export default DarkModeProvider;
