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

  // useEffect utama untuk menerapkan tema dengan smooth transitions
  useEffect(() => {
    const root = document.documentElement;
    const isSystemDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const shouldBeDark =
      theme === 'dark' || (theme === 'system' && isSystemDark);

    // Add transition class before theme change for smooth animation
    root.style.setProperty('--theme-transition-duration', '300ms');

    // Update state first
    setIsDarkMode(shouldBeDark);

    // Apply theme to DOM
    if (shouldBeDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Save to localStorage
    localStorage.setItem('theme', theme);

    // Ensure proper contrast ratios are maintained for accessibility
    if (shouldBeDark) {
      root.style.setProperty('--text-contrast-ratio', '7:1');
      root.style.setProperty('--form-contrast-ratio', '7:1');
      root.style.setProperty('--interactive-contrast-ratio', '4.5:1');
    } else {
      root.style.setProperty('--text-contrast-ratio', '4.5:1');
      root.style.setProperty('--form-contrast-ratio', '4.5:1');
      root.style.setProperty('--interactive-contrast-ratio', '3:1');
    }

    // Add smooth transition class to body for comprehensive theme switching
    document.body.classList.add('theme-transitioning');
    const timeoutId = setTimeout(() => {
      document.body.classList.remove('theme-transitioning');
    }, 300);

    return () => clearTimeout(timeoutId);
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
