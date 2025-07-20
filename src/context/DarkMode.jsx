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
    root.classList.toggle('dark', shouldBeDark); // Menggunakan toggle lebih ringkas
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Listener untuk perubahan tema sistem
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Fungsi ini dipanggil hanya ketika pengguna mengubah pengaturan OS
    const handleChange = () => {
      // Jika tema saat ini adalah 'system', kita perlu memicu pembaruan
      // dengan "mengatur ulang" tema ke 'system' agar useEffect utama berjalan lagi.
      if (theme === 'system') {
        // Ini akan memicu useEffect di atas untuk mengevaluasi ulang.
        setTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
    // Dependensi bisa dibuat hanya pada 'theme' untuk memastikan listener
    // hanya aktif ketika relevan.
  }, [theme]);

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
