import { createContext, useEffect, useMemo, useState } from 'react';

const DarkModeContext = createContext(null);

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'system';
  return localStorage.getItem('theme') || 'system';
};

const DarkModeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    const initialTheme = getInitialTheme();
    if (initialTheme === 'dark') return true;
    if (initialTheme === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // useEffect utama untuk menerapkan tema (sudah benar)
  useEffect(() => {
    const root = document.documentElement;
    const isSystemDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const shouldBeDark =
      theme === 'dark' || (theme === 'system' && isSystemDark);

    setIsDarkMode(shouldBeDark);
    if (shouldBeDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // DIUBAH: Listener sekarang bergantung pada 'theme'
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
      // Sekarang kita bisa langsung memeriksa state 'theme' yang terbaru
      if (theme === 'system') {
        // Memicu useEffect utama untuk mengevaluasi ulang tema sistem
        // Trik ini sudah tidak diperlukan, kita bisa langsung set isDarkMode
        const newIsSystemDark = mediaQuery.matches;
        const root = document.documentElement;
        setIsDarkMode(newIsSystemDark);
        if (newIsSystemDark) {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]); // <-- DEPENDENSI DIPERBAIKI

  const contextValue = useMemo(
    () => ({
      theme,
      isDarkMode,
      changeTheme: setTheme,
    }),
    [theme, isDarkMode]
  );

  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const DarkMode = DarkModeContext;
export default DarkModeProvider;
