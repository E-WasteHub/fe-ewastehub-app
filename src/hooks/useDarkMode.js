import { useContext } from 'react';
import { DarkMode } from '../context/DarkMode';

const useDarkMode = () => {
  const context = useContext(DarkMode);

  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }

  // --- Fungsi Pembantu untuk mengubah tema ---
  const setLightMode = () => context.changeTheme('light');
  const setDarkMode = () => context.changeTheme('dark');
  const setSystemMode = () => context.changeTheme('system');
  const toggleTheme = () =>
    context.changeTheme(context.isDarkMode ? 'light' : 'dark');

  return {
    // --- State Inti ---
    theme: context.theme,
    isDarkMode: context.isDarkMode,

    // --- Fungsi Pengubah ---
    // DIUBAH: Kembalikan nama ke 'changeTheme' agar konsisten
    changeTheme: context.changeTheme,
    toggleTheme,
    setLightMode,
    setDarkMode,
    setSystemMode,

    // --- Helper Boolean ---
    isLight: context.theme === 'light',
    isDark: context.theme === 'dark',
    isSystem: context.theme === 'system',
  };
};

export default useDarkMode;
