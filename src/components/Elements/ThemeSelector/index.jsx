import { Check, Monitor, Moon, Sun } from 'lucide-react';
import { AnimatePresence, motion as Motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import useDarkMode from '../../../hooks/useDarkMode';

const THEME_OPTIONS = [
  { value: 'light', label: 'Light', Icon: Sun },
  { value: 'dark', label: 'Dark', Icon: Moon },
  { value: 'system', label: 'System', Icon: Monitor },
];

const ThemeSelector = () => {
  // We need isDarkMode here for styling
  const { theme, changeTheme, isDarkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // This logic is already correct
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

  const CurrentThemeIcon =
    THEME_OPTIONS.find((t) => t.value === theme)?.Icon || Monitor;

  return (
    <div className='relative' ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex h-9 w-9 items-center justify-center rounded-lg border transition-colors
          ${
            isDarkMode
              ? 'border-slate-600 bg-slate-800 text-slate-300 hover:bg-slate-700'
              : 'border-slate-300 bg-white text-slate-600 hover:bg-slate-50'
          }
        `}
        aria-label={`Change theme. Current theme: ${theme}`}
      >
        <CurrentThemeIcon size={18} />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`
              absolute right-0 mt-2 w-36 origin-top-right rounded-lg border p-1 shadow-lg
              ${
                isDarkMode
                  ? 'border-slate-700 bg-slate-800'
                  : 'border-slate-200 bg-white'
              }
            `}
          >
            {THEME_OPTIONS.map((option) => {
              const isActive = theme === option.value;
              return (
                <button
                  key={option.value}
                  onClick={() => handleThemeChange(option.value)}
                  className={`
                    flex w-full items-center gap-3 rounded-md px-3 py-1.5 text-left
                    text-sm transition-colors
                    ${
                      isActive
                        ? isDarkMode
                          ? 'bg-green-900/50 text-green-300'
                          : 'bg-green-100 text-green-700'
                        : isDarkMode
                        ? 'text-slate-200 hover:bg-slate-700'
                        : 'text-slate-700 hover:bg-slate-100'
                    }
                  `}
                >
                  <option.Icon size={16} />
                  <span>{option.label}</span>
                  {isActive && <Check size={16} className='ml-auto' />}
                </button>
              );
            })}
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSelector;
