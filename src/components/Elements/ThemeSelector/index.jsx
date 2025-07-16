import { AnimatePresence, motion as Motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import useDarkMode from '../../../hooks/useDarkMode';

const ThemeSelector = () => {
  const { theme, changeTheme, isDarkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const themes = [
    {
      value: 'light',
      label: 'Light',
      icon: '☀️',
    },
    {
      value: 'dark',
      label: 'Dark',
      icon: '🌙',
    },
    {
      value: 'system',
      label: 'System',
      icon: '💻',
    },
  ];

  const currentTheme = themes.find((t) => t.value === theme);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleThemeChange = (newTheme) => {
    changeTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className='relative' ref={dropdownRef}>
      {/* Trigger Button - Only Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center w-9 h-9 border rounded-lg transition-colors ${
          isDarkMode
            ? 'bg-slate-800 border-slate-600 hover:bg-slate-700'
            : 'bg-white border-slate-300 hover:bg-slate-50'
        }`}
        title={`Current theme: ${currentTheme?.label}`}
        aria-label={`Current theme: ${currentTheme?.label}. Click to change theme.`}
      >
        <span className='text-lg'>{currentTheme?.icon}</span>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className={`absolute right-0 mt-2 w-32 border rounded-lg shadow-lg z-50 ${
              isDarkMode
                ? 'bg-slate-800 border-slate-700'
                : 'bg-white border-slate-200'
            }`}
          >
            <div className='py-1'>
              {themes.map((themeOption) => (
                <button
                  key={themeOption.value}
                  onClick={() => handleThemeChange(themeOption.value)}
                  className={`w-full flex items-center gap-3 px-4 py-2 text-sm text-left transition-colors ${
                    theme === themeOption.value
                      ? `${
                          isDarkMode
                            ? 'bg-green-900/20 text-green-300'
                            : 'bg-green-50 text-green-700'
                        }`
                      : `${
                          isDarkMode
                            ? 'text-slate-200 hover:bg-slate-700'
                            : 'text-slate-700 hover:bg-slate-50'
                        }`
                  }`}
                >
                  <span className='text-base'>{themeOption.icon}</span>
                  <span>{themeOption.label}</span>
                  {theme === themeOption.value && (
                    <div className='ml-auto w-2 h-2 bg-green-500 rounded-full' />
                  )}
                </button>
              ))}
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSelector;
